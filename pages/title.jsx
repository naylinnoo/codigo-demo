import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Title.module.css'

export default function Title() {
    return (
        <div>
        <p className={styles.title}>
        Here’s 5% of
        </p>
        <p className={styles.title}>
        our published work.
        </p>
        <p className={styles.subtitle}>
        See 100% of our power.
        </p>
        </div>
        )
    }
    