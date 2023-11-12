import Card from "./card";

export default function Helper() {
  return (
    <section className="section helper-section valign-wrapper">
      <div className="container">
        <div className="row">
          <div className="col s12 m12 l4">
            <Card
              title="Descubra"
              content={
                <div>
                  <h5>
                    Desvende novos mundos entre as páginas. Deixe-se envolver
                    pelas sugestões personalizadas do Book N' Books e descubra
                    obras que desafiem, encantem e inspirem.
                  </h5>
                  <hr />
                  <h6>
                    Busque títulos literários utilizando a barra de pesquisa no
                    início da página!
                  </h6>
                </div>
              }
            />
          </div>
          <div className="col s12 m12 l4">
            <Card
              title="Leia"
              content={
                <h5>
                  Explore a magia das palavras. Com o Book N' Books, sua jornada
                  literária ganha vida. De clássicos atemporais a lançamentos
                  emocionantes, embarque em histórias que enriquecem a mente e
                  alimentam a imaginação.
                </h5>
              }
            />
          </div>
          <div className="col s12 m12 l4">
            <Card
              title="Compartilhe"
              content={
                <h5>
                  Encontre sua tribo literária. Compartilhe suas descobertas,
                  opiniões e recomendações com a comunidade Book N' Books.
                  Juntos, criamos um espaço onde a paixão pela leitura se torna
                  uma experiência coletiva.
                </h5>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
