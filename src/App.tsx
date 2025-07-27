import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import ResponsiveHeader from './Components/MainHeader';
import { useRole } from './Components/RoleContext';
import Userpage from './Pages/Userpage';
import VerifierPage from './Pages/VerifierPage';
import Admin from './Pages/Admin';
import Sidebar from './Components/Sidebar';
import  { useState, useEffect } from 'react';

function App() {
  const { role } = useRole();

  // Track if mobile view
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sidebar visible state
  // Default: visible on desktop roles, hidden on mobile
  const [sidebarVisible, setSidebarVisible] = useState(!isMobile && (role === 'Verifier' || role === 'Admin'));

  // Update sidebar visibility if role or screen size changes
  useEffect(() => {
    setSidebarVisible(!isMobile && (role === 'Verifier' || role === 'Admin'));
  }, [role, isMobile]);

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  const renderRolePage = () => {
    switch (role) {
      case 'User':
        return <Userpage />;
      case 'Verifier':
        return <VerifierPage />;
      case 'Admin':
        return <Admin />;
      default:
        return <Navigate to="/" />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <header style={{ flexShrink: 0 }}>
        {/* Pass toggleSidebar and sidebarVisible to header */}
        <ResponsiveHeader toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
      </header>

      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        {sidebarVisible && (role === 'Verifier' || role === 'Admin') && (
          <aside
            style={{
              width: '250px',
              backgroundColor: '#2f855a', // green
              color: 'white',
              minHeight: '100%',
              boxSizing: 'border-box',
              paddingTop: '10px',
              position: isMobile ? 'fixed' : 'relative',
              zIndex: 1100,
              top: 6,
              left: 0,
              height: isMobile ? 'calc(100% - 64px)' : '100%',
              overflowY: 'auto',
              transition: 'transform 0.3s ease',
              transform: sidebarVisible ? 'translateX(0)' : 'translateX(-100%)',
            }}
          >
            <Sidebar />
          </aside>
        )}

        <main
          style={{
            flex: 1,
            padding: '10px',
            overflowY: 'auto',
            backgroundColor: '#f7fafc',
            boxSizing: 'border-box',
            marginLeft: !isMobile && sidebarVisible && (role === 'Verifier' || role === 'Admin') ? '10px' : 0,
            transition: 'margin-left 0.3s ease',
          }}
        >
          <Routes>
            <Route path="/" element={renderRolePage()} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
