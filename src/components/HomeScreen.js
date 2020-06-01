import React from "react";

const image = require("../LeatherGuest.jpg")

function HomeScreen({history}) {
  return (
    <div class="container">
      <div class="row m-5">
        <div class="col">
          <h2 class="text-primary">
             Welcome to our Guest Book
          </h2>
        </div>  
      </div>
      <div class="row m-5">
        <div class="col">
          <img src={image} width="350px" height="350px"></img>
        </div>  
      </div>
      <div class="row m-5">
        <div class="col-12 m-2">
          <button type="button" class="btn btn-success" onClick={()=>{history.push("/login")}}>Login</button>
        </div>
        <div class="col">
          <a href="" onClick={()=>{history.push("/signup")}}>Or create account</a>
        </div>
      </div>
   </div>
  );
}

export default HomeScreen;
