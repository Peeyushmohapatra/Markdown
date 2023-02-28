import React, { useState } from "react";
import "./container.css";
import ReactMarkdown from "react-markdown";

const Container = () => {
  const [first, setfirst] = useState();
  return (
    <div className="outer">
        <h1 className="h1">React Markdown</h1>

      <div className="container">
        <textarea
          placeholder="Enter Markdown"
          name="textarea"
          onChange={(e) => {
            setfirst(e.target.value);
          }}
          id="textarea"
          cols="30"
          rows="1"
        ></textarea>
        <div className="screen">
          <ReactMarkdown>{first}</ReactMarkdown>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Container;
