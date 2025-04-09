import React from 'react'
import styles from '@/styles/Sidebar.module.css'
import NewMessageButton from "@/assets/new-message.svg"


const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <NewMessageButton className={styles.button} />
        </aside>
    )
}

export default Sidebar