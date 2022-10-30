import React, { Fragment } from "react";

export default function Search() {

  const [keyword,setKeyWord]=useState("")
  return (
    <Fragment>
      <form className="searchBox" >
        <input
          type="text"
          placeholder="Search a Product"
         
        />

        <input type="submit" value="Search"/>
      </form>
    </Fragment>
  );
}
