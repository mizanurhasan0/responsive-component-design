import React from "react";
import "./post.css";
export const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__340.jpg"
        alt="image"
      />
      <div className="postInfo">
        <div className="postsCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Descovery Lead to generate</span>
        <hr />
        <span className="postData">1 hour ago</span>
      </div>
      <p className="postDesc">
        particulary in warefare and understanding the emotion of living beign
        the rebots are absolute failures. The GPS map system everyone using
        nowadays became an indistinguishable part of our life, this would not
        have been possible in absence of roabts.
      </p>
    </div>
  );
};
