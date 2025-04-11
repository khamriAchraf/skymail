import React from 'react'
import styles from '@/styles/Sidebar.module.css'
import NewMessageButton from "../assets/new-message.svg";
import EmailIcon from '../assets//icons/email.svg';


const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <NewMessageButton className={styles.button} />
            <div className={styles.email}>
                <EmailIcon className={styles.icon} />
                <p>juxtopposed@skyrim.tmrl</p>
            </div>

        </aside>
    )
}

export default Sidebar