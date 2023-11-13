import Image from "./image";
import Card from "./card";

export default function SearchResults({ data }) {
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
        <div className="row">
          <div className="col s4">
            <Image
              imagePath={
                item.volumeInfo.imageLinks
                  ? item.volumeInfo.imageLinks.thumbnail.replace(
                      "zoom=1",
                      "zoom=1"
                    )
                  : require("../assets/no_image.jpg")
              }
              width={250}
            />
          </div>
          <div className="col s8">
            <Card title={item.volumeInfo.title} content={item.volumeInfo.description}/>
          </div>
        </div>
      </div>
    );
  });

  return <div className="row">{components}</div>;
}
