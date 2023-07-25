import { useEffect, useState } from "react";

const blogsAPI = "http://18.224.64.42:5001/api/blogs";

const Blogs = ({ items }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(blogsAPI, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.slice(0, 6));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const renderItem = (items) => {
    return items.map((item, idx) => {
      return (
        <div className="blog-item" key={idx}>
          <div className="title">
            <a href="/blog/20221207">
              <h3>{item.title}</h3>
            </a>
          </div>
          <div className="date">
            <p>20221207</p>
          </div>
          {/* <div className="content">
            <p>20221207</p>
          </div> */}
        </div>
      );
    });
  };

  return (
    <section id="blogs">
      <div className="container">
        <div className="blogs-con">
          <h5>Blogs</h5>
          <div className="banners">
            <div className="title">程式開發筆記</div>
            <div className="more-btn">
              <a href="/blogs">See more</a>
            </div>
          </div>
        </div>
        <div className="blogs-items">
          {items && (
            <div>
              {renderItem(blogs)}
              <p className="dots">...</p>
            </div>
          )}
          {!items && <p>No blogs.</p>}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
