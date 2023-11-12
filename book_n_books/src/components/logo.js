import Image from "./image";

export default function Logo() {
  return (
    <section className="logo-section valign-wrapper mb-10">
      <div className="container valign-wrapper">
        <div className="row logo-container white">
          <Image
            className="center-align white"
            imagePath={require("../assets/bnb-large.png")}
            caption="Book N' Books logo"
            alt="Book N' Books logo"
            width={500}
          />
        </div>
      </div>
    </section>
  );
}
