import React, { useEffect } from "react";

const Image = ({ imagePath, alt , caption = '', width = 650}) => {
  useEffect(() => {
    const materialboxedElements = document.querySelectorAll(".materialboxed");
    window.M.Materialbox.init(materialboxedElements);
  }, []);

  return (
    <img className="materialboxed responsive-img" src={imagePath} alt={alt} data-caption={caption} width={width}/>
  );
};

export default Image;
