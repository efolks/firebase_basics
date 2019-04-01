import React from 'react';

export default function Profile() {
  return (
    <div id="about">
      <h1 id="name">Ash Ketchum</h1>
      <div id="profile" className="flex-container">
        <img id="profile-pic" src="https://cdn.bulbagarden.net/upload/thumb/0/09/Ash_M21.png/240px-Ash_M21.png" alt="Ash Ketchum" />
        <div id="basic-info">
          <p>Male</p>
          <p>10 years old</p>
          <p>Kanto</p>
        </div>
      </div>
      <h3>Fun facts</h3>
      <ul id="favorite-things">
        <li>Loves catching Pokemon</li>
        <li>Born May 22</li>
        <li>Likes the color dark green</li>
        <li>Top Pokemon trainer</li>
        <li>Favorite Pokemon type is Grass</li>
      </ul>
    </div>
  );
}
