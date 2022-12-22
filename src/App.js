import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import React from "react";
import imageOne from "./images/image_one.jpg"
import imageTwo from "./images/image_two.jpg"
import imageThree from "./images/image_three.jpg"
function App() {
  return (
    <div className="container">
  <Title/>
  <Wrapper>
  <FriendCard image={imageOne}
   name="Ayenew"
   occupation="front"
   location="Dc"/>
 
  <FriendCard image={imageTwo} 
  name="Zelalem"
  occupation="back"
  location="va"/>

  <FriendCard image={imageThree}
  name="Lilisa"
  occupation="both"
  location="mch"/>
  
  </Wrapper> 
  </div>
  );
}

export default App;
