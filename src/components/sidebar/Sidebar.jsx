import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__content}>
        <div className={styles.sidebar__profile}>
          <p className={styles.sidebar__userName}>Metacare</p>
          <p className={styles.sidebar__userEmail}>adeyinka@metacare.app</p>
        </div>

        <nav className={styles.sidebar__nav}>
          <ul>
            <li className={styles.sidebar__navItem}></li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
