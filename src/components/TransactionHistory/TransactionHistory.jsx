import styles from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
    return (
        <table className={styles.transactionTable}>
            <thead className={styles.transactionThead}>
                <tr>
                    <th className={styles.transactionTh}>Type</th>
                    <th className={styles.transactionTh}>Amount</th>
                    <th className={styles.transactionTh}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => {
                    return (
                        <tr key={item.id} className={styles.transactionTbodyTr}>
                            <td className={styles.transactionTd}>{item.type}</td>
                            <td className={styles.transactionTd}>{item.amount}</td>
                            <td className={styles.transactionTd}>{item.currency}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>

    )
}

export default TransactionHistory