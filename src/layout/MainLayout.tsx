import Header from '../components/Header';

interface LayoutPropsType {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutPropsType> = ({ children }) => (
  <div className="main-layout">
    <Header title="GitHub Users" />
    <main>{children}</main>
  </div>
);

export default Layout;
