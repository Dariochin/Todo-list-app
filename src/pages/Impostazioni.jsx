/* import React, { useState } from "react"; */

const Impostazioni = () => {/* 
  const [generalSettings, setGeneralSettings] = useState({
  });

  const [notificationSettings, setNotificationSettings] = useState({
  });

  const handleGeneralSettingChange = (event) => {
  };

  const handleNotificationSettingChange = (event) => {
    // Update the notificationSettings state based on the event
  }; */

  return (
    <div className="impostazioni-container">{/* 
      <h2>Impostazioni</h2>
      <h3>Generali</h3>
      <div className="setting">
        <label htmlFor="theme">Tema:</label>
        <select id="theme" value={generalSettings.theme} onChange={handleGeneralSettingChange}>
          <option value="light">Chiaro</option>
          <option value="dark">Scuro</option>
        </select>
      </div>

      <h3>Notifiche</h3>
      <div className="setting">
        <label htmlFor="emailNotifications">Notifiche via email:</label>
        <input
          type="checkbox"
          id="emailNotifications"
          checked={notificationSettings.emailNotifications}
          onChange={handleNotificationSettingChange}
        />
      </div> */}
    </div>
  );
};

export default Impostazioni;