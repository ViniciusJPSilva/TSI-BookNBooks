export default function About() {
  return (
    <section className="section about-section valign-wrapper mb-10">
      <div className="container">
        <div className="row">
          <div className="side-image h-90 col s0 m5 l5 hide-on-med-and-down"></div>
          <div className="col s12 m12 l7">
            <div className="card black-text">
              <div className="card-image">
                <img src={require("../assets/books.jpg")} about="" alt="" />
                <span className="card-title">Sobre o Book N' Books</span>
              </div>
              <div className="card-content">
                <h4 className="">
                  Bem-vindo ao Book N' Books, sua plataforma de busca e
                  recomendação de livros que se vale da abrangente API{" "}
                  <a href="https://developers.google.com/books?hl=pt-br">
                    Google Books
                  </a>{" "}
                  como fonte principal. Aqui, mergulhe em um vasto acervo de
                  títulos com a confiança de que nosso sistema de recomendação,
                  impulsionado por Inteligência Artificial, seleciona
                  cuidadosamente obras similares para enriquecer sua experiência
                  de leitura.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
