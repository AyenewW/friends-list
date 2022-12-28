import React from 'react';
 
function FriendCard(props) {
  console.log("props",props)
  return (
    <div className="image_wrapper">
    <div style={StyledFriendCard}>
    <img style={StyledImage} src={props.image} alt="one"/>
        <div className ="friend-description">
            <ul> 
              <li><strong>Name</strong>:{props.name}</li>
                <li><strong>Occupation</strong>:{props.occupation}</li>
                <li><strong>Location</strong>:{props.location}</li>
            </ul>
        </div>
        

    </div>
    </div>
  );
}
const StyledFriendCard ={
  backgroundColor:"#fff",
  boxShadow:"0 4px 8px rgba(0,0,0,0.25)",
  width:"100%",
  flexwrap:"wrap",
  fontFamily: "Georgia",
   
}
const StyledImage={
  width:"100%",
  height:"150px",
  
}
export default FriendCard;
