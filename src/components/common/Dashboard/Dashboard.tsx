interface DashboardProps {
  children: React.ReactNode;
}

const Dashboard = ({ children }: DashboardProps) => {
  return <div>{children}</div>;
};

export default Dashboard;
