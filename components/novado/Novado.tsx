'use client';

import Rocket from '@/components/rocket/Rocket';
import styles from './Novado.module.css';
export default () => {

    return (
        <div className={styles.container}>
            <div className={styles.rowContainer}>
                <Rocket />

                <div>
                    <span className={styles.nova}>nova</span>
                    <span className={styles.do}>do</span>
                </div>
                
            </div>
        </div>
    )
}