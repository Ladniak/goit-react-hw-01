import clsx from "clsx";
import styles from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
    const statusClass = clsx(styles.friendListItemStats, isOnline ? styles.online : styles.offline);

    return (
        <div className={styles.friendListItemDiv}>
            <img className={styles.friendListItemImg} src={avatar} alt="Avatar" width="48" />
            <p className={styles.friendListItemName}>{name}</p>
            <p className={statusClass}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    );
}

export default FriendListItem;
