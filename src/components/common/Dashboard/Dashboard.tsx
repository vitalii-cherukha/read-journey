import css from './Dashboard.module.css';

interface DashboardProps {
  children: React.ReactNode;
}

const Dashboard = ({ children }: DashboardProps) => {
  return <div className={css.wrapper}>{children}</div>;
};

export default Dashboard;
