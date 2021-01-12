import React from 'react';
import data from "../data";
import styles from "./App.modules.css"
import Profile from "./profile/Profile"
import Statistics from "./statistics/Statistics"
import FriendList from "./friendList/FriendList"
import TransactionHistory from "./transactionHistory/TransactionHistory"



const App = () => {
    return (
        <div className={styles.container}>
      <Profile {...data.user} />

      <Statistics title="Upload stats" stats={data.statisticalData} />
      <Statistics stats={data.statisticalData} />

      <FriendList friends={data.friends} />

      <TransactionHistory items={data.transactions} />
    </div>
      
    );
}

export default App;


