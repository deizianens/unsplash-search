import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  image: {
    display: "inline-block",
  },
});

const Image = () => {
  return (
    <img
      src="https://images.unsplash.com/photo-1650969206434-622016de7428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      alt=""
    />
  );
};

export default Image;
