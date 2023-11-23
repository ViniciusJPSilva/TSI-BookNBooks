import React, { useState } from "react";
import axios from "axios";
import LoadingModal from "./loadingModal";

export default function Header({ setCurrentPage, setSearchResult }) {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  /**
   * Realiza uma pesquisa de livros com base no título fornecido e atualiza o estado da aplicação com os resultados.
   *
   * @async
   * @function
   * @param {Event} e - O evento associado à chamada da função (geralmente um evento de clique do mouse).
   * @param {string} title - O título do livro a ser usado na pesquisa.
   * @returns {void}
   */
  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      // Inicia o indicador de carregamento
      setLoading(true);

      document.getElementById("bookSearch").blur();

      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&langRestrict=pt-BR`
      );
      const response_data = await response.data;

      await new Promise((resolve) => setTimeout(resolve, 3200));

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
    <header>
      <nav>
        <div className="nav-wrapper orange darken-1">
          <form onSubmit={handleSearch}>
            <div className="input-field">
              <input
                id="bookSearch"
                className="search-field"
                type="search"
                placeholder="Encontre seu próximo livro favorito..."
                required
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <label className="label-icon" htmlFor="bookSearch">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons" onClick={() => setSearchTerm("")}>
                close
              </i>
            </div>
          </form>

          {loading && (
            <div className="valign-wrapper">
              <LoadingModal isOpen={loading} />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
