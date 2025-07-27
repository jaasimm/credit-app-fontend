import React, { useState } from 'react';
import LoanFormModal from '../Components/LoanFormModal';
import ActionTabs from '../Components/ActionTabs';
import SearchBar from '../Components/Searchbar';
import AppliedLoans from '../Components/UserApplied';

const UserPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Top section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 600 }}>Dashboard</h1>
        <button
          onClick={() => setShowModal(true)}
          style={{
            padding: '12px 24px',
            backgroundColor: '#0047AB',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          Get a Loan
        </button>
      </div>
      <ActionTabs/>
      <SearchBar/>
      <AppliedLoans/>
      
      

      {/* Placeholder for dashboard content */}
      <div style={{ marginTop: '2rem', color: '#666' }}>
        <p>Loan stats and history will appear here.</p>
        {/* Add cards or charts here later */}
        
      </div>

      {/* Loan Form Modal */}
      {showModal && <LoanFormModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default UserPage;
