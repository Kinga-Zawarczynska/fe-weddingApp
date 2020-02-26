import React from 'react';
import styles from './Home.module.css'

function Home() {
    return (
        <div className={styles.home}>
            <h2>Pobieramy się!</h2>
            <div className={styles.church}>
                <div><i class="fas fa-church"> Ślub</i></div>
                <h3>04.09.2021r. Godzina</h3>
                <p>Kościół</p>
            </div>
            <div className={styles.weddingHall}>
                <div><i class="fas fa-glass-cheers"> Wesele</i></div>
                <h3>Sala weselna</h3>
                <p>Godzina</p>
            </div>


        </div>
    )
}

export default Home