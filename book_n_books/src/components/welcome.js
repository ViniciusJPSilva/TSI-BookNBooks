import Image from "./image";

export default function Welcome() {
  return (
    <main className="container">
      <div className="row">
        <div className="col s5">
            <Image imagePath={require("../assets/library.jpg")} alt="Imagem de uma Biblioteca" caption="Imagem de uma Biblioteca"/>
        </div>
        <div className="col s7">
            a
        </div>
      </div>
    </main>
  );
}
