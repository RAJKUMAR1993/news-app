import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
  const { title } = props;
  return (
    <>
      <div className="breadCrumb py-3">
        <div className="row">
          <div className="col-md-6 col-lg-12 col-sm-12">
            <div className="text-center mb-0">
              <Link to="#" className="text-dark">
                <b>Home</b> &nbsp;
              </Link>
              /
              <Link to="#" className="text-dark">
                <b> {title}</b>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
