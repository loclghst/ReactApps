import React from "react";
import faker from "faker";

const Comment = (props) => {
  return (
    <div className="comment">
      <a className="avatar" href="/">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.name}
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00 pm </span>
        </div>
        <div className="text">{props.content}</div>
      </div>
    </div>
  );
};

export default Comment;