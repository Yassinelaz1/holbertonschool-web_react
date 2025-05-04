import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png'; // Assuming close icon exists

const Notifications = () => {
  const handleClose = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="notifications">
      <button
        aria-label="Close"
        style={{ float: 'right' }}
        onClick={handleClose}
      >
        <img src={closeIcon} alt="Close" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          dangerouslySetInnerHTML={{
            __html: '<strong>Urgent requirement</strong> - complete by EOD',
          }}
        />
      </ul>
    </div>
  );
};

export default Notifications;
