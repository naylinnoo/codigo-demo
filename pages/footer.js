import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <div className={' bg-white w-full my-10 '}>
            <div className={'text-center'}>
                <span className={styles.title}>Let's have a chat</span>
            </div>
            <div className={'grid 2xl:grid-cols-4 lg:grids-col-4 md:grid-cols-1 sm:grid-cols-1 grid-flow-row-dense pt-10 px-52'}>
                <div className={'col-span-1'}>
                    Build
                </div>
                <div className={'col-span-1'}>
                    Co-incubate
                </div>
                <div className={'col-span-1'}>
                    Customise
                </div>
                <div className={'col-span-1'}>
                    Organise
                </div>
            </div>
        </div>
        
        )
    }
    