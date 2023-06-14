import React from "react";
import "./blog.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Blog from "../../components/Blog/Blog";
const BlogPage = () => {
  return (
    <>
      <Navbar />
      <Blog />
      <Footer />
    </>
  );
};

export default BlogPage;
