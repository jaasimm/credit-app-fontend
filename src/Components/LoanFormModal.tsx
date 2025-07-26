import React, { useState } from 'react';
import axios from 'axios';

interface Props {
  onClose: () => void;
}

const LoanFormModal: React.FC<Props> = ({ onClose }) => {
  const [form, setForm] = useState({
    fullName: '',
    loanTenture: '',
    phone: '',
    address: '',
    loanAmount: '',
    loanReason: '',
    income: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:3000/api/loans', form);
    console.log('Loan saved:', response.data);
    alert('Loan submitted successfully');
    onClose();
  } catch (error) {
    console.error('Error submitting loan:', error);
  }
};

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    fontSize: '15px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    color: '#333',
    backgroundColor: '#fff',
    outline: 'none',
    height: '45px',
    boxSizing: 'border-box',
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: '90%',
          maxWidth: '800px',
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        }}
      >
        <h3 style={{ marginBottom: '1rem' }}>Loan Application</h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
          {/* Left Column */}
          <div style={{ flex: '1 1 45%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label>Full Name</label>
              <input name="fullName" value={form.fullName} onChange={handleChange} style={inputStyle} required />
            </div>
            <div>
              <label>Loan Tenture</label>
              <input name="loanTenture" type="number" value={form.loanTenture} onChange={handleChange} style={inputStyle} required />
            </div>
            <div>
              <label>Phone</label>
              <input name="phone" type="tel" value={form.phone} onChange={handleChange} style={inputStyle} required />
            </div>
          </div>

          {/* Right Column */}
          <div style={{ flex: '1 1 45%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label>Address</label>
              <textarea name="address" value={form.address} onChange={handleChange} style={{ ...inputStyle, height: '80px', resize: 'none' }} required />
            </div>
            <div>
              <label>Loan Amount</label>
              <input name="loanAmount" type="number" value={form.loanAmount} onChange={handleChange} style={inputStyle} required />
            </div>
            <div>
              <label>Reason for Loan</label>
              <input name="loanReason" value={form.loanReason} onChange={handleChange} style={inputStyle} required />
            </div>
            <div>
              <label>Monthly Income</label>
              <input name="income" type="number" value={form.income} onChange={handleChange} style={inputStyle} required />
            </div>
          </div>

          {/* Buttons */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
            <button type="button" onClick={onClose} style={{ padding: '10px 18px', backgroundColor: '#ccc', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
              Cancel
            </button>
            <button type="submit" disabled={isSubmitting} style={{ padding: '10px 18px', backgroundColor: '#0047AB', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoanFormModal;
