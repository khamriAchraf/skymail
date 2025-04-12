import React from "react";
import styles from "@/styles/Sidebar.module.css";
import NewMessageButton from "../assets/new-message.svg";
import EmailIcon from "../assets//icons/email.svg";
import SelectedDecorator from "../assets//icons/selectedDecHeavy.svg";
import Decorator from "../assets//icons/decHeavy.svg";
import Link from "next/link";
import { useRouter } from "next/router";

const sidebarItems = [
  {
    title: "Inbox",
    path: "/",
    count: 170,
  },
  {
    title: "Drafts",
    path: "/drafts",
    count: 0,
  },
  {
    title: "Sent",
    path: "/sent",
    count: 0,
  },
  {
    title: "All Mail",
    path: "/all",
    count: 220,
  },
  {
    title: "Spam",
    path: "/spam",
    count: 0,
  },
  {
    title: "Trash",
    path: "/trash",
    count: 0,
  },
  {
    title: "Important",
    path: "/important",
    count: 16,
  },
  {
    title: "Starred",
    path: "/starred",
    count: 0,
  },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className={styles.sidebar}>
      <NewMessageButton className={styles.button} />
      
      <div className={styles.email}>
        <EmailIcon className={styles.icon} />
        <p>achraf@skyrim.tmrl</p>
      </div>
      {sidebarItems.map(({ title, path, count }) => (
        <Link href={path} key={title}>
          <div
            className={`${styles.sidebarItem} ${
              router.pathname === path && styles.active
            }`}
          >
            <div className={styles.title}>{title} {count > 0 && <span>({count})</span>}</div>
            {router.pathname === path ? <SelectedDecorator className={styles.SelectedDecorator} /> : <Decorator className={styles.SelectedDecorator} />}
          </div>
        </Link>
      ))}
      <div className={styles.filler}></div>
    </aside>
  );
};

export default Sidebar;
