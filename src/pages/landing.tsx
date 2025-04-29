import React from 'react';
import NavBar from '../components/NavBar';
import styles from '../components/landing.module.css';


const Landing = () => {
    return (
      <>
        <NavBar />
        <div className={styles.container}>
          <div className={styles.left}>
            <p className={styles.verse}>
              “Come to me, all you who labor<br />
              and are burdened, and I will give you rest”
              <br /><br />
              — Matthew 11:28
            </p>
            <img src="/grass.png" alt="Grass" className={styles.grass} />
          </div>
          <div className={styles.right}>
            <img src="/jesus.png" alt="Jesus" className={styles.jesus} />
          </div>
        </div>
      </>
    );
  };

export default Landing;

