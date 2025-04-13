import React from "react";
import styles from "@/styles/MailListItem.module.css";
import Mark from "../assets//icons/mark.svg";

const MailListItem = ({ id, subject, from, to, date, body, isRead }) => {
  return (
    <div>
      <div className={styles.mailItem}>
        <div className={styles.subject}>
          {!isRead && <Mark />}
          <div>
            <p className={styles.from}>{from}</p>
            <p>{subject}</p>
          </div>
        </div>
        <div className={styles.date}>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default MailListItem;
