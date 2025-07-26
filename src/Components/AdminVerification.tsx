import React, { useState } from 'react';
import { FiMoreVertical, FiUser } from 'react-icons/fi';

interface Loan {
  reason: string;
  amount: string;
  date: string;
  status: string;
}

const AdminVerifiedLoans: React.FC = () => {
  const [loans, setLoans] = useState<Loan[]>([
    { reason: 'John Obi', amount: '₦50,000.00', date: 'June 08, 2021', status: 'Pending' },
    { reason: 'John Obi', amount: '₦100,000.00', date: 'June 07, 2021', status: 'Verified' },
    { reason: 'John Obi', amount: '₦100,000.00', date: 'June 07, 2021', status: 'Rejected' },
    { reason: 'John Obi', amount: '₦100,000.00', date: 'May 27, 2021', status: 'Approved' },
  ]);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [newReason, setNewReason] = useState('');
  const [newStatus, setNewStatus] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return '#FFA726';
      case 'Verified':
        return '#66BB6A';
      case 'Approved':
        return '#42A5F5';
      case 'Rejected':
        return '#EF5350';
      default:
        return '#888';
    }
  };

  const handleEditClick = (index: number) => {
    setSelectedIndex(index);
    setNewReason(loans[index].reason);
    setNewStatus(loans[index].status);
  };

  const handleSave = () => {
    if (selectedIndex === null) return;

    const updatedLoans = [...loans];
    updatedLoans[selectedIndex] = {
      ...updatedLoans[selectedIndex],
      reason: newReason,
      status: newStatus,
    };

    setLoans(updatedLoans);
    setSelectedIndex(null);
  };

  return (
    <div
      style={{
        marginTop: '32px',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        overflowX: 'auto',
      }}
    >
      <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Applied Loans</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '700px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f9f9f9', textAlign: 'left' }}>
            <th style={{ padding: '12px' }}>Loan Officer</th>
            <th style={{ padding: '12px' }}>Amount</th>
            <th style={{ padding: '12px' }}>Date Applied</th>
            <th style={{ padding: '12px' }}>Status</th>
            <th style={{ padding: '12px' }}></th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan, index) => (
            <tr key={index} style={{ borderTop: '1px solid #eee' }}>
              <td style={{ padding: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FiUser size={18} color="#555" />
                {loan.reason}
              </td>
              <td style={{ padding: '12px' }}>{loan.amount}</td>
              <td style={{ padding: '12px' }}>{loan.date}</td>
              <td style={{ padding: '12px' }}>
                <span
                  style={{
                    backgroundColor: getStatusColor(loan.status),
                    color: '#fff',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: 500,
                  }}
                >
                  {loan.status}
                </span>
              </td>
              <td style={{ padding: '12px', textAlign: 'right' }}>
                <FiMoreVertical
                  size={18}
                  color="#999"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleEditClick(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '24px',
              borderRadius: '10px',
              minWidth: '300px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
            }}
          >
            <h3 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: 'bold' }}>Edit Loan</h3>

            <label style={{ fontSize: '14px' }}>Reason</label>
            <input
              value={newReason}
              onChange={(e) => setNewReason(e.target.value)}
              style={{
                width: '100%',
                marginBottom: '12px',
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid #ccc',
              }}
            />

            <label style={{ fontSize: '14px' }}>Status</label>
            <select
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
              style={{
                width: '100%',
                marginBottom: '16px',
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid #ccc',
              }}
            >
              <option value="Pending">Pending</option>
              <option value="Verified">Verified</option>
              <option value="Rejected">Rejected</option>
               <option value="Approved">Approved</option>
            </select>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button
                onClick={() => setSelectedIndex(null)}
                style={{
                  padding: '6px 12px',
                  backgroundColor: '#eee',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                style={{
                  padding: '6px 12px',
                  backgroundColor: '#4CAF50',
                  color: '#fff',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminVerifiedLoans;
