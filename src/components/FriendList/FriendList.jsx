import styles from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem"

function FriendList({ friends }) {
    return (
        <ul className={styles.listOfFriends}>
            {friends.map(friend => {
                return (
                    <li className={styles.listOfFriendsItem} key={friend.id}>
                        <FriendListItem name={friend.name} avatar={friend.avatar} isOnline={friend.isOnline} />
                    </li>
                )
            })}
        </ul>
    )
}

export default FriendList