import React from 'react';

const NotificationBell = ({ badgeCount }) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <svg
        width="31"
        height="33"
        viewBox="0 0 31 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.66846 18.4521C4.66846 15.4281 7.11995 12.9766 10.144 12.9766V12.9766C13.1681 12.9766 15.6196 15.4281 15.6196 18.4521V23.9277H4.66846V18.4521Z"
          stroke="#2E308A"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <circle cx="10.1439" cy="27.2123" r="1.09511" fill="#2E308A" />
        <path
          d="M10.144 12.9764V10.7861"
          stroke="#2E308A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
    </svg>
    {badgeCount > 0 && (
      <span
        style={{
          position: 'absolute',
          top: '2px',
          right: '3px',
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '50%',
          padding: '1px 6px',
          fontSize: '11px',
        }}
      >
        {badgeCount}
      </span>
    )}
  </div>
);
};

export default NotificationBell;