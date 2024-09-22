import styles from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={styles.profileDiv}>
            <div className={styles.infoDiv}>
                <img
                    className={styles.profileImg}
                    src={image}
                    alt="User avatar"
                />
                <p className={styles.profileName}>{name}</p>
                <p className={styles.profileInfo}>@{tag}</p>
                <p className={styles.profileInfo}>{location}</p>
            </div>

            <ul className={styles.statsDiv}>
                <li className={styles.statsItem}>
                    <span>Followers</span>
                    <span className={styles.statsSpan}>{stats.followers}</span>
                </li>
                <li className={styles.statsItem}>
                    <span>Views</span>
                    <span className={styles.statsSpan}>{stats.views}</span>
                </li>
                <li className={styles.statsItem}>
                    <span>Likes</span>
                    <span className={styles.statsSpan}>{stats.likes}</span>
                </li>
            </ul>
        </div >

    )
}

export default Profile