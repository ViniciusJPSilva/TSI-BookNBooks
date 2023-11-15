import SearchBook from "./searchBook";

export default function SearchResults({
  setCurrentPage,
  setSelectedBook,
  data,
}) {
  const sortedData = data.items.sort((a, b) => {
    // Se a tiver imageLinks e b não tiver, a deve vir primeiro
    if (a.volumeInfo.imageLinks && !b.volumeInfo.imageLinks) {
      return -1;
    }
    // Se b tiver imageLinks e a não tiver, b deve vir primeiro
    else if (!a.volumeInfo.imageLinks && b.volumeInfo.imageLinks) {
      return 1;
    }
    // Caso contrário, mantenha a ordem original
    else {
      return 0;
    }
  });

  const components = sortedData.map((item, index) => {
    return (
      <div className="col s12" key={index}>
        <SearchBook
          title={item.volumeInfo.title}
          authors={item.volumeInfo.authors}
          image={
            item.volumeInfo.imageLinks
              ? item.volumeInfo.imageLinks.thumbnail.replace("zoom=1", "zoom=1")
              : require("../assets/no-image.png")
          }
          setCurrentPage={setCurrentPage}
          setSelectedBook={setSelectedBook}
          data={item}
        />
      </div>
    );
  });

  return <div className="row">{components}</div>;
}
