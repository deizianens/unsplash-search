import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  dropdown: {
    display: "inline-block",
    position: "relative",
    overflow: "hidden",
    height: "45px",
    width: "150px",
    background: "#f2f2f2",
    border: "1px solid",
    borderColor: "white #f7f7f7 whitesmoke",
    borderRadius: "3px",
    backgroundImage:
      "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.06))",
    boxShadow: "0 1px 1px rgba(0, 0, 0, 0.08)",
    padding: "0 20px",

    "&:before, &:after": {
      content: '""',
      position: "absolute",
      zIndex: "2",
      top: "17px",
      right: "10px",
      width: "0",
      height: "0",
      border: "4px dashed",
      borderColor: "#888888 transparent",
      pointerEvents: "none",
    },

    "&:before": {
      borderBottomStyle: "solid",
      borderTop: "none",
    },

    "&:after": {
      marginTop: "7px",
      borderTopStyle: "solid",
      borderBottom: "none",
    },
  },

  dropdownSelect: {
    position: "relative",
    width: "130%",
    margin: "0",

    height: "45px",
    lineHeight: "14px",
    fontSize: "12px",
    color: "#62717a",
    textShadow: "0 1px white",
    background: "#f2f2f2" /* Fallback for IE 8 */,
    border: "0",
    borderRadius: "0",

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
        <option value="">Select…</option>
        <option value="1">Option #1</option>
        <option value="2">Option #2</option>
        <option value="3">Option #3</option>
      </select>
    </div>
  );
};

export default Dropdown;
