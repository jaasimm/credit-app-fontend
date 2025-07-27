// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import VerifiedLoans from './VerifiedLoans';

// interface Loan {
//   _id: string;
//   fullName: string;
//   loanAmount: number | string;
//   appliedAt: string;
//   status: string;
// }

// const CommonParent: React.FC = () => {
//   const [loans, setLoans] = useState<Loan[]>([]);

//   useEffect(() => {
//     fetchLoans();
//   }, []);

//   const fetchLoans = async () => {
//     try {
//       const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/loans`);
//       setLoans(res.data);
//     } catch (error) {
//       console.error('Failed to fetch loans:', error);
//     }
//   };

//   const handleUpdateStatus = async (id: string, newStatus: string) => {
//     try {
//       await axios.patch(`http://localhost:3000/api/loans/${id}`, { status: newStatus });
//       // Refresh data
//       fetchLoans();
//     } catch (error) {
//       console.error('Error updating loan status:', error);
//     }
//   };

//   return (
//     <div>
//       <VerifiedLoans loans={loans} onUpdateStatus={handleUpdateStatus} />
//     </div>
//   );
// };

// export default CommonParent;
