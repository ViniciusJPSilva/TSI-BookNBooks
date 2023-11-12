import React, { useState } from "react";
import LoadingModal from "./loadingModal";

export default function Header({ setCurrentPage }) {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      // Inicia o indicador de carregamento
      setLoading(true);

      // Simula uma requisição (substitua isso pela sua lógica de requisição real)
      await new Promise((resolve) => setTimeout(resolve, 3500));

      // Após a conclusão da requisição, você pode redefinir o indicador de carregamento
      setLoading(false);

      // Aqui você pode continuar com o resto da lógica de manipulação da resposta
      console.log(`Requisição realizada para: ${searchTerm}`);
    } catch (error) {
      console.error("Erro na requisição:", error);
      setLoading(false);
    } finally {
      // Fecha o modal após a conclusão da requisição
      setLoading(false);
      setCurrentPage('SEARCH');
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
