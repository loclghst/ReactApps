import React from "react";
import ReactDOM from "react-dom";
import Comment from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <Comment name="Sam" content="Nice Blog Post1" />
      </ApprovalCard>
      <ApprovalCard>
        <Comment name="Manish" content="Nice Blog Post2" />
      </ApprovalCard>
      <ApprovalCard>
        <Comment name="Aswani" content="Nice Blog Post3" />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
