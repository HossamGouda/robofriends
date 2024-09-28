import React from "react";

const Card = ({name, email, id}) => {
  return (
    // <h1>RoboFriends</h1>
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?200/200`} alt='' />
      <div className='info'>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
