import React from "react";
import BlogHeader from "../../components/BlogPageComponents/BlogHeader";
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";
import Footer from "../../components/Footer/FooterDemo";
import BlogCard from "../../components/BlogPageComponents/BlogCard";
import { getBlogs } from "../../services/fetchBlogData";
class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // tabs: 1
      blogPosts: []
      //   postNo: 1
    };
  }
  componentDidMount() {
    document.body.classList.toggle("index-page");
    document.body.classList.toggle("profile-page");
    this.setState({ blogPosts: [...getBlogs()] });
    // this.setState(blogPosts : [...getBlogPosts]);
  }
  componentWillUnmount() {
    document.body.classList.toggle("profile-page");
    document.body.classList.toggle("index-page");
  }

  render() {
    var blogPosts = this.state;
    console.log(blogPosts);
    return (
      <>
        <ExamplesNavbar />
        <BlogHeader />
        <div className="wrapper">
          {/* {blogPosts.map(post => {
            return (
               <div key={post["backText"]}> 
              <BlogCard key={post["backText"]} backText={post["backText"]} />
              </div>
            );
          })} */}
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <Footer />
        </div>
      </>
    );
  }
}

export default Blog;
