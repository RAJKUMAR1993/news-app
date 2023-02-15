import React from "react";
import { Helmet } from "react-helmet";

const Meta = (props) => {
  console.log(props);

  return (
    <>
      <Helmet>
        <meta name="description" content="Helmet application" />
        <title>{props.title}</title>
      </Helmet>
    </>
  );
};

export default Meta;
