import React from "react";
import "./singlePost.css";

export const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__340.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Environment dissertation topices
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Autor: <b>Hasan</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          The research conducted by international defence organigation,Chikago
          reveal that where 55% failed to recognise the perfect problem and
          misjudgment killed the countries own protectors. it is obvios that the
          negative effect should be taken into concedaration. whenever,
          improvisation and higher research methodology of AI could help in
          aleviating such problem. on the other hand, one can not deny the harsh
          and trabulsome situation of artifical intelligense.
        </p>
      </div>
    </div>
  );
};
