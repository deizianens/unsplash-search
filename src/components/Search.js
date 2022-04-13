import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  searchContainer: {
    width: "490px",
    display: "block",
    margin: "0 auto",
  },
  searchBar: {
    margin: "0 auto",
    width: "100%",
    height: "45px",
    padding: "0 20px",
    fontSize: "1rem",
    border: "1px solid #D0CFCE",
    outline: "none",

    "&:focus": {
      border: "1px solid #008ABF",
      transition: "0.35s ease",
      color: "#008ABF",

      "&::-webkit-input-placeholder": {
        transition: "opacity 0.45s ease",
        opacity: "0",
      },

      "&::-moz-placeholder": {
        transition: "opacity 0.45s ease",
        opacity: "0",
      },

      "&:-ms-placeholder": {
        transition: "opacity 0.45s ease",
        opacity: "0",
      },
    },
  },

  searchIcon: {
    position: "relative",
    float: "right",
    width: "75px",
    height: "75px",
    top: "-62px",
    right: "-45px",
  },
});

const Search = () => {
  const classes = useStyles();

  return (
    <form class={classes.searchContainer}>
      <input
        class={classes.searchBar}
        type="text"
        id="search-bar"
        placeholder="Pesquisar"
      />
      <img
        class={classes.searchIcon}
        src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
        alt=""
      />
    </form>
  );
};

export default Search;
