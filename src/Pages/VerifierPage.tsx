import React from 'react';
import LoanVerificationTable from '../Components/LoanVerificationTable';
import Dashboard from '../Components/Loans';

const VerifierPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Dashboard/>
      <LoanVerificationTable />
    </div>
  );
};

export default VerifierPage;
