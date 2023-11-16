import React from "react";
import SearchResults from "./searchResults";
import Image from "./image";

export default function Search({ setCurrentPage, setSelectedBook, searchResult, setSearchResult }) {
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
                  <a href="#!" className="breadcrumb">
                    Busca
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="center-align row">
          <h1 className="section-title">RESULTADO DA BUSCA</h1>
          <a href="/" className="back-link">
            Voltar
          </a>
        </div>
        {searchResult.totalItems >= 1 ? (
          <SearchResults setCurrentPage={setCurrentPage} setSelectedBook={setSelectedBook} data={searchResult} setSearchResult={setSearchResult}/>
        ) : (
          <div className="container valign-wrapper">
            <div className="row logo-container white">
              <Image
                imagePath={require("../assets/not-found.png")}
                width={500}
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
