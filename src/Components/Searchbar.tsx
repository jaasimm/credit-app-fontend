import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px 16px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        width: '100%',
        maxWidth: '100%', // slightly wider on desktop
        margin: '24px auto 0',
      }}
    >
      <FiSearch size={20} color="#666" style={{ marginRight: '10px' }} />
      <input
        type="text"
        placeholder="Search for loans"
        style={{
          border: 'none',
          outline: 'none',
          fontSize: '15px',
          color: '#333',
          width: '100%',
          padding: '4px 0',
          fontWeight: 400,
        }}
      />
      <style>{`
        ::placeholder {
          color: #555;
          opacity: 1;
        }
        @media (max-width: 768px) {
          input {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default SearchBar;
