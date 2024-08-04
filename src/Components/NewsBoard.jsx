import { useState, useEffect } from "react";
import NewsItems from "./NewsItems";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${
      // here is the only one problem it can't categories the news if category=${category}
      import.meta.env.VITE_API_KEY
    }`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.articles) {
          setArticles(data.articles);
        } else {
          throw new Error("No articles found");
        }
      })
      .catch((error) => {
        console.error("Fetching error: ", error);
      });
  }, [category]);

  return (
    <div style={{ padding: "2em", marginBottom: "100px" }}>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItems
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        <p>No news articles available.</p>
      )}
    </div>
  );
};

export default NewsBoard;
