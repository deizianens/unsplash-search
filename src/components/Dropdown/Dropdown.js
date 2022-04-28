import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  dropdown: {
    display: "inline-block",
    position: "relative",
    overflow: "hidden",
    height: "45px",
    width: "150px",
    backgroundColor: "transparent",
    border: "1px solid",
    borderColor: "#D0CFCE",
    borderRadius: "3px",
    boxShadow: "0 1px 1px rgba(0, 0, 0, 0.08)",
  },

  dropdownSelect: {
    position: "relative",
    width: "100%",
    margin: "0",
    height: "45px",
    fontSize: "1rem",
    color: "#62717a",
    textShadow: "0 1px white",
    border: "0",
    borderRadius: "0",
    padding: "0 20px",

    "&:focus": {
      zIndex: "3",
      width: "100%",
      color: "#394349",
    },

    "> option": {
      margin: "3px",
      padding: "6px 8px",
      textShadow: "none",
      background: "#f2f2f2",
      borderRadius: "3px",
      cursor: "pointer",
    },
  },
});

const Dropdown = () => {
  const classes = useStyles();

  return (
    <div class={classes.dropdown}>
      <select name="one" class={classes.dropdownSelect}>
        <option value="">Tags</option>
        <option value="1">Câmera</option>
        <option value="2">Option #2</option>
        <option value="3">Option #3</option>
      </select>
    </div>
  );
};

export default Dropdown;
