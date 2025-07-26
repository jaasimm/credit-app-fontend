import React, { useEffect, useState } from 'react';
import { useRole } from './RoleContext';
import {
  FaBell,
  FaEnvelope,
  FaUserCircle,
  FaHome,
  FaMoneyBillWave,
  FaChartBar,
  FaCreditCard,
} from 'react-icons/fa';
import { MdOutlineMenu } from 'react-icons/md';

interface ResponsiveHeaderProps {
  toggleSidebar: () => void;
  sidebarVisible: boolean;
}

const ResponsiveHeader: React.FC<ResponsiveHeaderProps> = ({ toggleSidebar, sidebarVisible }) => {
  const { role, setRole } = useRole();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems =
    role === 'User' && !isMobile
      ? [
          { icon: <MdOutlineMenu /> },
          { icon: <FaHome />, label: 'Home' },
          { icon: <FaMoneyBillWave />, label: 'Payment' },
          { icon: <FaChartBar />, label: 'Budget' },
          { icon: <FaCreditCard />, label: 'Card' },
        ]
      : [];

  return (
    <header
      style={{
        height: '64px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e0e0e0',
        padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      {/* Left side: menu icon (mobile) + logo/title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Show menu icon on mobile or if role allows */}
        {(isMobile || role === 'Verifier' || role === 'Admin') && (
          <MdOutlineMenu
            size={28}
            style={{ cursor: 'pointer' }}
            onClick={toggleSidebar}
            aria-label={sidebarVisible ? 'Close sidebar' : 'Open sidebar'}
          />
        )}

        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#0047AB',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '16px',
          }}
        >
          C
        </div>
        <h1 style={{ fontSize: '20px', fontWeight: '600', margin: 0 }}>Credit App</h1>
      </div>

      {/* Center menu items */}
      {menuItems.length > 0 && (
        <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          {menuItems.map((item) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '18px',
                color: '#333',
                cursor: 'pointer',
              }}
            >
              <div style={{ fontSize: '16px' }}>{item.icon}</div>
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      )}

      {/* Right side icons and role dropdown */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <FaBell size={18} style={{ cursor: 'pointer' }} />
        <FaEnvelope size={18} style={{ cursor: 'pointer' }} />
        <FaUserCircle size={22} style={{ cursor: 'pointer' }} />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as 'User' | 'Verifier' | 'Admin')}
          style={{
            padding: '6px 10px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            backgroundColor: '#fff',
          }}
        >
          <option value="User">User</option>
          <option value="Verifier">Verifier</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
    </header>
  );
};

export default ResponsiveHeader;
