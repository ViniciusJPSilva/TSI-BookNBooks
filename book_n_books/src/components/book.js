import React, { useEffect } from "react";

export default function Book({ setCurrentPage, book }) {
  let authorsList = "";

  if (book.volumeInfo.authors) {
    authorsList += book.volumeInfo.authors.map((item, index) => ` ${item}`);
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/books/jsapi.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.google.books.load();
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const loadBookViewer = () => {
    const viewer = new window.google.books.DefaultViewer(
      document.getElementById("viewerCanvas")
    );
    viewer.load(`ISBN:${book.volumeInfo.industryIdentifiers[0].identifier}`);
  };

  return (
    <main className="search-section section ">
      <div className="container yellow lighten-5">
        <div className="row">
          <div className="col w-100-pc breadcrumb-container">
            <nav className="w-100-pc orange darken-1">
              <div className="nav-wrapper">
                <div className="col s12">
                  <a href="/" className="breadcrumb white-text">
                    Início
                  </a>
                  <a href="#!" className="breadcrumb">
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
          <a href="/" className="back-link">
            Voltar
          </a>
        </div>
        <div className="book-info center-align row">
          <div className="col s4">
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
          <div className=" col s8">
            <div className="row left-align">
              <h6>Autor(es): {authorsList}</h6>
              <h6>Publicação: {book.volumeInfo.publishedDate}</h6>
              <blockquote>{book.volumeInfo.description}</blockquote>
              <h6>Número de Páginas: {book.volumeInfo.pageCount}</h6>
              <h6>Idioma: {book.volumeInfo.language}</h6>
            </div>
          </div>
        </div>
        <div className="center-align row">
          <div className="center-align row">
            <button onClick={loadBookViewer} className="btn">
              Carregar Livro no Visualizador
            </button>
          </div>

          {/* VIEWER */}
          <div className="center-align row">
            <div
              id="viewerCanvas"
              className="book-viewer"
            ></div>
          </div>
        </div>
      </div>
    </main>
  );
}
