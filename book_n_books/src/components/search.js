import React from "react";

export default function Search({ setCurrentPage, searchResult }) {
  const renderContent = () => {
    return <div>a</div>;
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col w-100-pc mt-20">
            <nav className="w-100-pc orange darken-1">
              <div className="nav-wrapper">
                <div className="col s12">
                  <a href="/" className="breadcrumb">
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
        <div className="row">
          <div className="col w-100-pc mt-20">

          </div>
        </div>
      </div>
    </section>
  );
}
