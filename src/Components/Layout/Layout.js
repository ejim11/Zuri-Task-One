import LinksList from "../LinksList/LinksList";
import Profile from "../Profile/Profile";

const Layout = () => {
  return (
    <>
      <Profile />
      <main>
        <LinksList />
      </main>
    </>
  );
};

export default Layout;
