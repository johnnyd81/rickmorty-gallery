import Navbar from "./Navbar";

const Layout = ({ children }) => {
  //the layout component structures the user interface i.e. how the different components are arranged
  return (
    <div className="content">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
