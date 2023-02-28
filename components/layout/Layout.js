import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import Footer from './Footer';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <div className={classes.mainblock}>
        <main>{props.children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
