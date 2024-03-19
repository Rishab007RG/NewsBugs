import React from "react";


const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, publishedAt, author, source } =props;
  return (
    <>
      <div className="card" style={{ width: "18rem",padding:"10px",margin:'10px',border:"3px solid black"}}>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ">
          {source}
          <span class="visually-hidden">unread messages</span>
        </span>
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <footer class="blockquote-footer">
            Published at {new Date(publishedAt).toGMTString()} By{" "}
            <cite title="Source Title">{author ? author : "unknown"}</cite>
          </footer>
          <a href={newsUrl} class="btn btn-dark" target="_blank">
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
