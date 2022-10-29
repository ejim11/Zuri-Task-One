import LinksList from "../LinksList/LinksList";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Profile />
      <main>
        <LinksList />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
