import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { options } from "../country";

const FetchData = ({ cat }) => {
  const [allData, setAllData] = useState("");
  const [searchCountry, setSearchCountry] = useState();

  const handleOnChange = (e) => {
    const isCountry = e.target.value;
    console.log("onChnage value---->", e.target.value);
    console.log(searchCountry);
    setSearchCountry(isCountry);
  };

  const getNewsApiData = () => {
    axios
      .get(
        cat
          ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=b8c23be371174cf3a636b735eb4f2fd8`
          : "https://newsapi.org/v2/top-headlines?country=in&apiKey=b8c23be371174cf3a636b735eb4f2fd8"
      )
      .then((response) => setAllData(response.data.articles));
  };
  useEffect(() => {
    getNewsApiData();
  });

  return (
    <>
      <div className="container py-3">
        <div className="title h1 d-flex justify-content-between">
          <h4>Daily News update</h4>

          <select
            className="form-control w-25"
            value={searchCountry}
            onChange={handleOnChange}
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
          {allData
            ? allData.map((element, index) => {
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
      </div>
    </>
  );
};

export default FetchData;
