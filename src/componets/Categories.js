import React from "react";

const Categories = (props) => {
  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <p>{props.cat}</p>
      </div>
    </>
  );
};

export default Categories;
