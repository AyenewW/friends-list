import React from 'react';
 
function FriendCard(props) {
  console.log("props",props)
  return (
    <div style={StyledFriendCard}>
    <img style={StyledImage} src={props.image} alt="one"/>
        <div className ="friend-description">
            <ul> 
              <li>Name:{props.name}</li>
                <li>Occupation:{props.occupation}</li>
                <li>Location:{props.location}</li>
            </ul>
        </div>
        

    </div>
  );
}
const StyledFriendCard ={
  backgroundColor:"#fff",
  boxShadow:"0 4px 8px rgba(0,0,0,0.25)",
  width:"30%",
  flexwrap:"wrap",
  
}
const StyledImage={
  width:"100%",
  height:"150px",

}
export default FriendCard;
