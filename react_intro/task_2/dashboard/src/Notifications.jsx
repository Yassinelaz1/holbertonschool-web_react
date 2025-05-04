import React from 'react';
import './Notifications.css';
import closeIcon from './assets/close-button.png';
import { getLatestNotification } from './utils';

function Notifications() {
  const handleClick = () => console.log('Close button has been clicked');

  return (
    <div className="notifications">
      <button
        style={{ float: 'right', background: 'none', border: 'none' }}
        aria-label="Close"
        onClick={handleClick}
      >
        <img src={closeIcon} alt="close" style={{ height: '10px', width: '10px' }} />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}

export default Notifications;
