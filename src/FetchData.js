import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "./componets/Loading";
import { options } from "./country";
import ReactPaginate from "react-paginate";

const FetchData = ({ cat }) => {
  const [newsData, setNewsData] = useState([]);
  const [searchCountry, setSearchCountry] = useState("in");
  const [loading, setLoading] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [pageNum, setPageNum] = useState(1);

  //componentDidMount
  const handleGetData = () => {
    // setLoading(true);
    axios
      .get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: searchCountry,
          apiKey: "b8c23be371174cf3a636b735eb4f2fd8",
          category: cat,
          page: pageNum,
        },
      })
      .then((response) => {
        setNewsData(response.data.articles);
        setTotalRecords(response.data.totalResults);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // component did mount

  useEffect(() => {
    handleGetData();
  }, [[cat, searchCountry]]);

  const handleCountryChange = (e) => {
    setSearchCountry(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <>
      <div className="container py-3">
        {loading ? <Loading /> : null}
        <div className="title h1 d-flex justify-content-between">
          <h4>Daily News update</h4>

          <select
            className="form-control w-25"
            value={searchCountry}
            onChange={handleCountryChange}
          >
            <option>Select</option>
            {options.map((option, index) => {
              return (
                <>
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                </>
              );
            })}
          </select>
        </div>
        <div className="card">
          {newsData
            ? newsData.map((element, index) => {
                return (
                  <div key={index}>
                    <div className="row ">
                      <div className="col-ms-12 col-md-6 col-lg-6 px-3">
                        <div className="card-block px-6">
                          <h4 className="card-title">{element.title}</h4>
                          <p className="card-text">{element.description}</p>
                          <p>{element.content}</p>
                          <br className="textsuccess " />
                          <Link
                            to={element.url}
                            target="_blank"
                            className="mt-auto "
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div
                          id="CarouselTest"
                          className="carousel slide"
                          data-ride="carousel"
                        >
                          <div className="carousel-inner">
                            <div className="carousel-item active py-2">
                              <img
                                className="card-img-top"
                                src={element.urlToImage}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : "Loading...."}
        </div>
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          activeClassName="active"
          containerClassName="pagination"
          pageCount={Math.ceil(totalRecords / 5)} //total
          onPageChange={(res) => {
            setPageNum(res.selected + 1);
          }}
        />
      </div>
    </>
  );
};

export default FetchData;
