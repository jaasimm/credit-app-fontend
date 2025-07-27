import React, { useEffect, useState } from 'react';
import { FiMoreVertical, FiUser } from 'react-icons/fi';
import axios from 'axios';


interface Loan {
  _id: string;
  fullName: string;
  loanAmount: number | string;
  appliedAt: string;  // ISO date string
  status: string;
}


const AppliedLoans: React.FC = () => {
   const [loans, setLoans] = useState<Loan[]>([]);
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState<string | null>(null);



useEffect(() => {
  const fetchLoans = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/loans`);
      // Check if data is an array before setting
      if (Array.isArray(res.data)) {
        setLoans(res.data);
      } else {
        console.error('Expected array but got:', res.data);
        setLoans([]); // fallback to empty array to avoid crash
      }
    } catch (err) {
      console.error('Error fetching loans:', err);
      setLoans([]); // fallback to empty array
    }
  };
  fetchLoans();
}, []);


  // const loanss = [
  //   { officer: 'John Obi', amount: '₦50,000.00', date: 'June 08, 2021', status: 'Pending' },
  //   { officer: 'John Obi', amount: '₦100,000.00', date: 'June 07, 2021', status: 'Verified' },
  //   { officer: 'John Obi', amount: '₦100,000.00', date: 'June 07, 2021', status: 'Rejected' },
  //   { officer: 'John Obi', amount: '₦100,000.00', date: 'May 27, 2021', status: 'Approved' },
  // ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return '#FFA726'; // Orange
      case 'Verified':
        return '#66BB6A'; // Blue
      case 'Approved':
        return ' #42A5F5'; // Green
      case 'Rejected':
        return '#EF5350'; // Red
      default:
        return '#888';
    }
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
            <th style={{ padding: '12px' }}></th> {/* For the three-dot icon */}
          </tr>
        </thead>
        <tbody>
          {loans.map((loan, index) => (
            <tr key={index} style={{ borderTop: '1px solid #eee' }}>
              <td style={{ padding: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FiUser size={18} color="#555" />
                John Okoh
              </td>
              <td style={{ padding: '12px' }}>{loan.loanAmount}</td>
              <td style={{ padding: '12px' }}>
              {new Date(loan.appliedAt).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                })}
              </td>
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
                <FiMoreVertical size={18} color="#999" style={{ cursor: 'pointer' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppliedLoans;
