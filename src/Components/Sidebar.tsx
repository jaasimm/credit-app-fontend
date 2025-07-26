import React from 'react';
import { FaTachometerAlt, FaUserFriends, FaMoneyCheckAlt, FaReceipt, FaUserCircle } from 'react-icons/fa';

const Sidebar = () => {
  const items = [
    { label: 'Dashboard', icon: <FaTachometerAlt /> },
    { label: 'Borrowers', icon: <FaUserFriends /> },
    { label: 'Loans', icon: <FaMoneyCheckAlt /> },
    { label: 'Repayments', icon: <FaReceipt /> },
     { label: 'Loan Parameters', icon: <FaTachometerAlt /> },
    { label: 'Accounting', icon: <FaUserFriends /> },
    { label: 'Reports', icon: <FaMoneyCheckAlt /> },
    { label: 'Collateral', icon: <FaReceipt /> },
     { label: 'Acces configuration', icon: <FaTachometerAlt /> },
    { label: 'Savings', icon: <FaUserFriends /> },
    { label: 'E-Signature', icon: <FaMoneyCheckAlt /> },
    { label: 'Expenses', icon: <FaReceipt /> },
     { label: 'Calender', icon: <FaTachometerAlt /> },
    { label: 'Savings', icon: <FaUserFriends /> },
    { label: 'Investor Accounts', icon: <FaMoneyCheckAlt /> },
    { label: 'SignOut', icon: <FaReceipt /> },
  ];

  const darkGreen = '#22543d';      // darker green (normal bg)
  const lightGreen = '#48bb78';     // lighter green (hover bg)
  const sidebarBg = '#276749';      // sidebar background color

  return (
    <nav
      style={{
        height: '100%',
        backgroundColor: sidebarBg,
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px 0',
        boxSizing: 'border-box',
      }}
    >
      {/* Profile section */}
      <div
        style={{
          padding: '0 24px',
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontWeight: '600',
          fontSize: '18px',
        }}
      >
        <FaUserCircle size={40} />
        <span>John Doe</span>
      </div>

      {/* Menu items */}
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, flexGrow: 1 }}>
        {items.map((item) => (
          <li
            key={item.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '6px 24px',  // padding left & right
              cursor: 'pointer',
              backgroundColor: darkGreen,
              color: 'white',
              marginBottom: '1px',
              borderRadius: '0px',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = lightGreen)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = darkGreen)}
          >
            <span style={{ marginRight: '10px', fontSize: '16px' }}>{item.icon}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
