import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  // const BlogList = (props) => {
  //   const blogs = props.blogs;
  //   const title = props.title;
  const navigate = useNavigate();

  const [blog, setBlog] = useState(blogs);
  const handleDelete = function (x) {
    const ss = blog.filter((val) => val.id !== x);
    setBlog(ss);

    fetch(`http://localhost:8000/blogs/${x}`, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blog.map((blog) => (
        <div className="blog-preview" key={blogs.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>written By {blog.author}</p>
          </Link>
          <button onClick={() => handleDelete(blog.id)}> Delete me</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
