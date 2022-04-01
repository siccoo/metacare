import { Link, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";

const sidebarNavLinks = [
    "Admin"
]


const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__content}>
        <div className={styles.sidebar__profile}>
          <p className={styles.sidebar__userName}>Metacare</p>
          <p className={styles.sidebar__userEmail}>adeyinka@metacare.app</p>
        </div>

        <nav className={styles.sidebar__nav}>
          <ul>
            <li className={styles.sidebar__navItem}>
              <img src="" alt="" />
              <Link
                className={
                  location.pathname === "/admin"
                    ? styles.sidebar__navlinkActive
                    : styles.sidebar__navlink
                }
              >
                Admin
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
