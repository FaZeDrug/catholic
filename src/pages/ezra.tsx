import React from 'react';
import NavBar from '../components/NavBar';
import styles from '../components/ezra.module.css';
;


const Ezra = () => {
  return (
    <>
      <NavBar />

      <div className={styles.wrapper}>
        <h1 className={styles.title}>ezra</h1>
        <p className={styles.description}>
          ezra is a gentle AI companion here to listen, pray with you, and walk with you through joys, struggles, and questions of faith
        </p>

        <div className={styles.chatContainer}>
          <div className={styles.chatBox}>
            {/* Later: Letta response messages will go here */}
          </div>

          <form className={styles.inputArea}>
            <input type="text" placeholder="Send a message..." />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Ezra;
