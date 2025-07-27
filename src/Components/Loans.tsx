import React from "react";
import { FaMoneyBillWave } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BsFillPersonDashFill } from "react-icons/bs";
import { MdSavings } from "react-icons/md";
import { FcAcceptDatabase } from "react-icons/fc";
interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // fixed 3-column layout
    gap: "20px",
    padding: "20px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    background: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(67, 42, 42, 0.05)",
    padding: "0px",
    transition: "transform 0.2s ease-in-out",
    cursor: "pointer",
  },
  iconBox: {
    backgroundColor: "#2ecc71", // green
    color: "#ffffff",
    fontSize: "1.8rem",
    padding: "16px",
    marginRight: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "60px",
    minHeight: "60px",
  },
  value: {
    fontSize: "1.5rem",
    fontWeight: "bold" as const,
    color: "#333",
  },
  label: {
    fontSize: "1rem",
    color: "#666",
    marginTop: "4px",
  },
  dataBox: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-start",
  },
};

const StatCard: React.FC<StatCardProps> = ({ label, value, icon }) => {
  const [isHovered, setHovered] = React.useState(false);

  return (
    <div
      style={{
        ...styles.card,
        transform: isHovered ? "scale(1.02)" : "scale(1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={styles.iconBox}>{icon}</div>
      <div style={styles.dataBox}>
        <div style={styles.value}>{value}</div>
        <div style={styles.label}>{label}</div>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const stats = [
    { label: "Loans", value: "50", icon: <FaMoneyBillWave /> },
    { label: "Borrowers", value: "100", icon: <BsFillPersonDashFill /> },
    { label: "Cash Disbursed", value: "550,000", icon: <FaMoneyBillTrendUp /> },
    { label: "", value: "450,000", icon: <MdSavings /> },
    { label: "Repaid Loans", value: "30", icon: <BsFillPersonCheckFill /> },
    { label: "Cash Received", value: "1,000,000", icon: <FcAcceptDatabase /> },
  ];

  return (
    <div style={styles.container}>
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          label={stat.label}
          value={stat.value}
          icon={stat.icon}
        />
      ))}
    </div>
  );
};

export default Dashboard;