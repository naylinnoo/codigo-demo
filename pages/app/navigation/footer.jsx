import styles from '../../../styles/Footer.module.css'

export default function Footer() {
    return (
        <div className={' bg-white w-full my-10 '}>
            <div className={'text-center'}>
                <span className={styles.title}>Let's have a chat</span>
            </div>
            <div className={'grid 2xl:grid-cols-4 2xl:grids-col-4 lg:grids-col-4 md:grid-cols-1 sm:grid-cols-1 grid-flow-row-dense pt-10 3xl:px-80 2xl:px-20 lg:px-0 md:px-0'}>
                <div className={'col-span-1 2xl:border-r lg:border-r md:border-0 sm:border-0 border-black-100 grid justify-items-center py-5'}>
                    <div className={styles.trustsBox}>
                        <div className={'flex 2xl:justify-start lg:justify-between md:justify-between sm:justify-between justify-between'}>
                            <span className={styles.subtitle}>Build</span>
                            <div className={styles.arrow}/>
                        </div>
                       
                        <p>Help you build something</p>
                    </div>
                </div>
                <hr className={'justify-self-center w-11/12 2xl:hidden lg:block md:block sm:block'}/>
                <div className={'col-span-1 2xl:border-r lg:border-r md:border-0 sm:border-0 border-black-100 grid justify-items-center py-5'}>
                <div className={styles.trustsBox}>
                <div className={'flex 2xl:justify-start lg:justify-between md:justify-between sm:justify-between justify-between'}>
                        <span className={styles.subtitle}>Co-incubate</span>
                        <div className={styles.arrow}/>
                        </div>
                        <p>Co-incubate an idea together</p>
                    </div>
                </div>
                <hr className={'justify-self-center w-11/12 2xl:hidden lg:block md:block sm:block'}/>
                <div className={'col-span-1 2xl:border-r lg:border-r md:border-0 sm:border-0 border-black-100 grid justify-items-center py-5'}>
                    <div className={styles.trustsBox}>
                    <div className={'flex 2xl:justify-start lg:justify-between md:justify-between sm:justify-between justify-between'}>
                        <span className={styles.subtitle}>Customise</span>
                        <div className={styles.arrow}/>
                        </div>
                        <p>Customise a solution for your business</p>
                    </div>
                </div>
                <hr className={'justify-self-center w-11/12 2xl:hidden lg:block md:block sm:block'}/>
                <div className={'col-span-1  md:border-0 sm:border-0 border-black-100 grid justify-items-center py-5'}>
                    <div className={styles.trustsBox}>
                    <div className={'flex 2xl:justify-start lg:justify-between md:justify-between sm:justify-between justify-between'}>
                        <span className={styles.subtitle}>Organise</span>
                        <div className={styles.arrow}/>
                        </div>
                        <p>Organise learning sessions with us</p>
                    </div>
                </div>
                <hr className={'justify-self-center w-11/12 2xl:hidden lg:block md:block sm:block'}/>
            </div>
            <div className={'text-center'}>
                <div className={'flex justify-center py-5'}>
                    <a className={'inline m-3'}>
                        <img src={'https://www.codigo.co/img/icons/social-facebook.svg'} width={12} alt={'facebook'}/>
                    </a>
                    <a className={'inline m-3'}>
                        <img src={'https://www.codigo.co/img/icons/social-twitter.svg'} width={23} alt={'twitter'}/>
                    </a>
                    <a className={'inline m-3'}>
                        <img src={'https://www.codigo.co/img/icons/social-instagram.svg'} width={21} alt={'instagram'}/>
                    </a>
                    <a className={'inline m-3'}>
                        <img src={'https://www.codigo.co/img/icons/social-linkedIn.svg'} width={21} alt={'linkedin'}/>
                    </a>

                </div>
               
            <span>Copyright © Codigo - Mobile App Developer Singapore</span> 
            <br/>
            <span>+65 6455 9790 • 26 Sin Ming Lane, Midview City #07-115 Singapore 573971</span>

            </div>
        </div>
        
        )
    }
    