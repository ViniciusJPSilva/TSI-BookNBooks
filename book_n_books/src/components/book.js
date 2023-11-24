import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingModal from "./loadingModal";

export default function Book({ setCurrentPage, book, setSearchResult }) {
  const [loading, setLoading] = useState(false);

  const headers = {
    "Content-Type": "application/json",
  };

  const API_URL = "http://127.0.0.1:15000";

  let authorsList = "";

  if (book.volumeInfo.authors) {
    authorsList += book.volumeInfo.authors.map((item, index) => ` ${item}`);
  }

  /**
   * Verifica a disponibilidade da API por meio de uma solicitação assíncrona.
   *
   * @async
   * @function
   * @returns {Promise<boolean>} Uma Promise que resolve para `true` se a API estiver disponível
   *                            e `false` caso contrário.
   */
  const checkApiAvailability = async () => {
    try {
      let responseData;

      await axios
        .post(API_URL, {
          headers: headers,
        })
        .then(function (response) {
          responseData = response.data;
        });

      if (
        responseData.status === 200 &&
        responseData.message === "API online"
      ) {
        return true; // A API está disponível
      } else {
        return false; // A API não retornou a resposta esperada
      }
    } catch (error) {
      return false; // Ocorreu um erro ao tentar acessar a API
    }
  };

  /**
   * Obtém e exibe livros relacionados por meio de uma solicitação assíncrona à API.
   *
   * @async
   * @function
   * @param {Event} e - O evento associado ao clique do botão (geralmente um evento de clique do mouse).
   * @returns {Promise<void>} Uma Promise que é resolvida após a conclusão da operação.
   */
  const getRelatedBooks = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Verifica a disponibilidade da API antes de prosseguir
    const apiAvailable = await checkApiAvailability();
    const buttonElement = document.querySelector(".related-books-btn");

    if (!apiAvailable) {
      // Exibe a mensagem de indisponibilidade no botão
      buttonElement.innerHTML = "API Indisponível :(";
      buttonElement.disabled = true;
      setLoading(false);
      return;
    }

    // Restante do código para obter livros relacionados
    let maxAttempts = 3;
    let attempts = 0;
    let success = false;

    while (attempts < maxAttempts && !success) {
      try {
        let responseData;

        const postData = {
          title: book.volumeInfo.title,
        };

        await axios
          .post(
            `${API_URL}/ai/query/related-books`,
            postData,
            {
              headers: headers,
            }
          )
          .then(function (response) {
            responseData = response.data;
          })
          .catch((error) => {
            console.error(error);
          });

        populateTable(responseData.related);

        success = true; // Indica que a requisição foi bem-sucedida
      } catch (error) {
        attempts++;
      }
    }

    setLoading(false);

    if (success) {
      // Fecha o modal após a conclusão da requisição, independentemente de ser bem-sucedida ou não
      document.querySelector(".related-list").style.display = "block";
      document.querySelector(".related-books-btn").style.display = "none";
    } else {
      buttonElement.innerHTML = "Ocorreu um erro :(";
      buttonElement.disabled = true;
    }
  };

  /**
   * Efeito colateral React que carrega o script da API do Google Books quando o componente é montado.
   *
   * @function
   * @effect
   * @listens none
   * @returns {void}
   */
  useEffect(() => {
    // Cria um elemento script e configura sua origem e assincronicidade
    const script = document.createElement("script");
    script.src = "https://www.google.com/books/jsapi.js";
    script.async = true;

    // Adiciona o script ao corpo do documento
    document.body.appendChild(script);

    // Define o manipulador de carga do script para invocar o método de carregamento da API do Google Books
    script.onload = () => {
      window.google.books.load();
    };

    // Define a função de limpeza para remover o script do corpo do documento quando o componente for desmontado
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  /**
   * Carrega o visualizador de livros ao exibir o componente de visualização.
   *
   * @function
   * @returns {void}
   */
  const loadBookViewer = () => {
    document.querySelector(".book-viewer").style.display = "block";
    document.querySelector(".book-viewer-btn").style.display = "none";
    const viewer = new window.google.books.DefaultViewer(
      document.getElementById("viewerCanvas")
    );
    viewer.load(`ISBN:${book.volumeInfo.industryIdentifiers[0].identifier}`);
  };

  /**
   * Retorna à página de pesquisa, alterando o estado da página atual.
   *
   * @function
   * @returns {void}
   */
  const backToTheBooks = () => {
    setCurrentPage("SEARCH");
  };

  /**
   * Formata uma string de data no formato "YYYY-MM-DD" para "DD/MM/YYYY".
   *
   * @function
   * @param {string} inputDateStr - A string de data no formato "YYYY-MM-DD".
   * @returns {string} A string de data formatada no formato "DD/MM/YYYY" ou a string original se o formato for inválido.
   */
  function formatDate(inputDateStr) {
    var dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (dateFormatRegex.test(inputDateStr)) {
      var dateParts = inputDateStr.split("-");

      return dateParts[2] + "/" + dateParts[1] + "/" + dateParts[0];
    } else {
      return inputDateStr;
    }
  }

  /**
   * Preenche a tabela com os dados fornecidos.
   *
   * @function
   * @param {Array} data - Um array de dados a serem exibidos na tabela.
   * @returns {void}
   */
  function populateTable(data) {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";

    // Preencha a tabela com os dados
    data.forEach((book) => {
      const row = document.createElement("tr");
      const cell = document.createElement("td");
      // Crie um link com um título h6 dentro de cada célula
      const link = document.createElement("a");

      link.classList.add("back-link");
      link.href = "#!"; // Substitua '#' pelo link real
      // link.onclick((e) => handleSearch(e, book));
      const title = document.createElement("h6");
      title.textContent = book;
      link.appendChild(title);

      link.addEventListener("click", (e) => handleSearch(e, book));

      // Adicione o link à célula
      cell.appendChild(link);
      row.appendChild(cell);
      tableBody.appendChild(row);
    });
  }

  /**
   * Realiza uma pesquisa de livros com base no título fornecido e atualiza o estado da aplicação com os resultados.
   *
   * @async
   * @function
   * @param {Event} e - O evento associado à chamada da função (geralmente um evento de clique do mouse).
   * @param {string} title - O título do livro a ser usado na pesquisa.
   * @returns {void}
   */
  const handleSearch = async (e, title) => {
    e.preventDefault();

    try {
      // Inicia o indicador de carregamento
      setLoading(true);

      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${title}&langRestrict=pt-BR`
      );
      const response_data = await response.data;

      setSearchResult(response_data);
      // Após a conclusão da requisição, você pode redefinir o indicador de carregamento
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      // Fecha o modal após a conclusão da requisição
      setLoading(false);

      setCurrentPage("SEARCH");
    }
  };

  return (
    <main className="search-section section ">
      <div className="container white">
        <div className="row">
          <div className="col w-100-pc breadcrumb-container">
            <nav className="w-100-pc orange darken-1">
              <div className="nav-wrapper">
                <div className="col s12">
                  <a href="/" className="breadcrumb white-text">
                    Início
                  </a>
                  <a onClick={backToTheBooks} href="#!" className="breadcrumb">
                    Busca
                  </a>
                  <a href="#!" className="breadcrumb">
                    Livro
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="center-align row">
          <h1 className="section-title">{book.volumeInfo.title}</h1>
          <a onClick={backToTheBooks} href="#!" className="back-link">
            Voltar
          </a>
        </div>
        <div className="book-info center-align row">
          <div className="col s12 m6 l4">
            <div className="img-data">
              <img
                className=""
                src={
                  book.volumeInfo.imageLinks
                    ? book.volumeInfo.imageLinks.thumbnail
                    : require("../assets/no-image.png")
                }
                alt=""
                width={200}
              />
            </div>
          </div>
          <div className=" col s12 m6 l8">
            <div className="row left-align">
              <h6>Autor(es): {authorsList}</h6>
              <h6>Publicação: {formatDate(book.volumeInfo.publishedDate)}</h6>
              <blockquote>{book.volumeInfo.description}</blockquote>
              <h6>Número de Páginas: {book.volumeInfo.pageCount}</h6>
              <h6>Idioma: {book.volumeInfo.language}</h6>
              {book.volumeInfo.industryIdentifiers && (
                <h6>
                  ISBN: {book.volumeInfo.industryIdentifiers[0].identifier}
                </h6>
              )}
            </div>
          </div>
        </div>
        <div className="center-align row">
          {book.volumeInfo.readingModes.text ? (
            <>
              <div className="center-align row">
                <button
                  onClick={loadBookViewer}
                  className="book-viewer-btn btn"
                >
                  Carregar Prévia no Visualizador
                </button>
              </div>
              <div className="center-align row">
                <div id="viewerCanvas" className="book-viewer col s12"></div>
              </div>
            </>
          ) : (
            <>
              <h4>Prévia indisponível :(</h4>
            </>
          )}
        </div>
        <div className="center-align row">
          <div className="center-align row">
            <button onClick={getRelatedBooks} className="related-books-btn btn">
              Obter Recomendações da IA
            </button>
          </div>
          <div className="center-align row">
            <div className="col s12">
              {loading && (
                <div className="valign-wrapper white-text">
                  <LoadingModal isOpen={loading} />
                </div>
              )}
              <div className="container related-list">
                <h3 className="main-color">Livros Relacionados</h3>

                <table className="responsive-table">
                  <tbody id="table-body">
                    {/* <!-- Os dados da tabela serão inseridos aqui --> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
