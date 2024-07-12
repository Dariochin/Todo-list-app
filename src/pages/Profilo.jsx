import React, { useState } from "react";

const Profilo = () => {
  const [userData, setUserData] = useState({
  });

  const handleUserDataChange = (event) => {
  };

  return (
    <div className="profilo-container">
      <h2>Profilo</h2>
      {/* User information sections */}
      <div className="user-info">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          value={userData.name}
          onChange={handleUserDataChange}
        />
      </div>
      <div className="user-info">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={userData.email}
          onChange={handleUserDataChange}
        />
      </div>
      {/* Add more user information fields as needed */}
    </div>
  );
};

export default Profilo;
