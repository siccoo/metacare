import React from "react";
import SearchIcon from "../../assets/searchIcon.svg";

import styles from "./Topbar.module.css";

function Topbar() {
  return (
    <>
      <div className={styles.topbar}>
        <section className={styles.topbarWrapper}>
          <form>
            <input type="search" placeholder="Ask us any question" />
            <button type="submit">
              <SearchIcon />
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Topbar;
