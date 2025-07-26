import React from 'react';

const actions = [
  { label: 'Borrow Cash' },
  { label: 'Transact' },
  { label: 'Deposit' },
];

const ActionTabs: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        
        marginTop: '2rem',
      }}
    >
      {actions.map((action, index) => (
        <div
          key={index}
          style={{
            flex: '1 1 10%',
            minWidth: '100px',
            
            padding: '8px',
            backgroundColor: '#f5f5f5',
            borderRadius: '10px',
            textAlign: 'center',
            fontWeight: 500,
            fontSize: '16px',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
            transition: 'all 0.2s ease-in-out',
          }}
          onClick={() => alert(`${action.label} clicked`)}
          onMouseEnter={(e) => ((e.currentTarget.style.backgroundColor = '#eaf0ff'))}
          onMouseLeave={(e) => ((e.currentTarget.style.backgroundColor = '#f5f5f5'))}
        >
          {action.label}
        </div>
      ))}
    </div>
  );
};

export default ActionTabs;
