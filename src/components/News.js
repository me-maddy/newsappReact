import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [state, setState] = useState({
    articles: [],
    totalResults: 0,
    page: 1,
    loading: true,
  });

  const capitaliseString = (String) => {
    return String.charAt(0).toUpperCase() + String.slice(1).toLowerCase();
  };

  const updateNews = async () => {
    props.updateProgress(10);
    let newsApi = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.newsApi}&pageSize=${props.pageSize}&page=${state.page}`;
    let responseData = await fetch(newsApi);
    props.updateProgress(30);
    let data = await responseData.json();
    props.updateProgress(70);
    setState({
      ...state,
      loading: false,
      articles: data.articles,
      totalResults: data.totalResults,
    });
    props.updateProgress(100);
  };

  useEffect(() => {
    updateNews();
    document.title = `${capitaliseString(props.category)} - Fatafatnews`;
  }, []);

  const fetchData = async () => {
    const newsApi = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.newsApi}&pageSize=${
      props.pageSize
    }&page=${state.page + 1}`;
    let responseData = await fetch(newsApi);
    let data = await responseData.json();
    setState({
      ...state,
      articles: state.articles.concat(data.articles),
      page: state.page + 1,
    });
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          margin: "80px 0 20px 0",
        }}
      >
        FatafatNews - Top {capitaliseString(props.category)} Headlines
      </h1>
      {state.loading && <Spinner />}
      <InfiniteScroll
        dataLength={state.articles.length}
        next={fetchData}
        hasMore={state.articles.length !== state.totalResults}
        loader={<Spinner />}
      >
        <div className="container my-3">
          <div className="row my-3">
            {state.articles.map((element, index) => {
              return (
                <div className="my-3 col-md-4" key={element.url}>
                  {" "}
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    url={element.url}
                    name={element.source.name}
                    color={props.color}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
          {/* <div className='d-flex justify-content-between'>
        <button disabled={this.state.page===1} type="button" className={`btn btn-${this.props.color}`} onClick={this.handlePreviousClick}>Previous</button>
        <button disabled={this.state.page===Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className={`btn btn-${this.props.color}`} onClick={this.handleNextClick}>Next</button>
        </div> */}
        </div>
      </InfiniteScroll>
    </>
  );
}

News.defaultProps = {
  country: "in",
  category: "health",
  color: "success",
  pageSize: 6,
};

News.propTypes = {
  category: PropTypes.string,
  color: PropTypes.string,
  pageSize: PropTypes.number,
  country: PropTypes.string,
};
