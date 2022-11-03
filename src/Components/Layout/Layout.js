import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <>
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
