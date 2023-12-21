import SideMenu from "../../ui/aside-menu/SideMenu";
import styles  from "./MainApp.module.css";

function MainApp() {
  return (
    <div>
      <SideMenu />
      <div className={styles.container}></div>
    </div>
  );
}

export default MainApp;
