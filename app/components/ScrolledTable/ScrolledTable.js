import React from "react";
import styles from "./ScrolledTable.module.css";
import Filter from "../Filter/index"; // Import your CSS module
const ScrolledTable = () => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <Filter />
      </table>
    </div>
  );
};
export default ScrolledTable;
