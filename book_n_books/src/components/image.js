import React, { useEffect } from "react";

const Image = ({ imagePath, alt , caption = ''}) => {
  useEffect(() => {
    const materialboxedElements = document.querySelectorAll(".materialboxed");
    window.M.Materialbox.init(materialboxedElements);
  }, []);

  return (
    <img className="materialboxed responsive-img" src={imagePath} alt={alt} data-caption={caption}/>
  );
};

export default Image;
