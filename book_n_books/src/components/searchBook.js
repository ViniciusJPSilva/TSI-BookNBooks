export default function SearchBook({ title, authors, image }) {
  let authorsList = [];

  if (authors) {
    authorsList = authors.map((item, index) => <h6 key={index}>{item}</h6>);
  }

  return (
    <div className="row center-align">
      <a href="#!" className="book-data">
        <div className="img-data">
          <img className="left" src={image} alt="" width={150} />
        </div>
        <div className="txt-data white-text">
          <h3 className="">{title}</h3>
          {authorsList}
        </div>
      </a>
    </div>
  );
}
