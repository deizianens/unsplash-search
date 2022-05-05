import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { createApi } from "unsplash-js";

const useStyles = createUseStyles({
  searchContainer: {
    width: "490px",
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

const Search = ({ handleResult }) => {
  const classes = useStyles();
  const [search, setSearch] = useState("");

  const unsplash = createApi({
    accessKey: "",
  });

  const handleSearch = (event) => {
    event.preventDefault();

    unsplash.search.getPhotos({ query: search }).then((result) => {
      if (result.errors) {
        // handle error here
        console.log("error occurred: ", result.errors[0]);
      } else {
        // handle success here
        const photo = result.response;
        console.log(photo);
      }
    });
  };

  return (
    <form class={classes.searchContainer} onSubmit={handleSearch}>
      <input
        class={classes.searchBar}
        type="text"
        id="search-bar"
        placeholder="Pesquisar"
        onChange={(e) => setSearch(e.target.value)}
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
