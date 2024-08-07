import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import Blog from "./blog/Blog";
import BlogPost from "./blog/BlogPost";
import useLocationBlocker from "../../shared/functions/useLocationBlocker";
import TermsOfService from "./home/TermService";

function Routing(props) {
  const {
    blogPosts,
    selectBlog,
    selectHome,
    openRegisterDialog,
    openLoginDialog,
  } = props;
  useLocationBlocker();
  return (
    <Switch>
      {blogPosts.map((post) => (
        <PropsRoute
          path={post.url}
          component={BlogPost}
          title={post.title}
          key={post.title}
          src={post.src}
          date={post.date}
          content={post.content}
          otherArticles={blogPosts.filter(
            (blogPost) => blogPost.id !== post.id
          )}
        />
      ))}
      <PropsRoute
        exact
        path="/blog"
        component={Blog}
        selectBlog={selectBlog}
        blogPosts={blogPosts}
      />
      <PropsRoute
        path="/serviceterm"
        component={TermsOfService}
        openRegisterDialog={openRegisterDialog}
      />
      <PropsRoute
        path="/"
        component={Home}
        selectHome={selectHome}
        openRegisterDialog={openRegisterDialog}
        openLoginDialog={openLoginDialog}
      />
    </Switch>
  );
}

Routing.propTypes = {
  blogposts: PropTypes.arrayOf(PropTypes.object),
  selectHome: PropTypes.func.isRequired,
  selectBlog: PropTypes.func.isRequired,
  openRegisterDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired,
};

export default memo(Routing);
