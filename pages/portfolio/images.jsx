import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Port.module.css'

export default function Images({category, title = 1 , size, color, image, types}) {
  
        const data = Array.from(types)
        const icons = data.map(type =>{
         return (<div className={styles.iconBackground} style={{backgroundImage: `url("https://www.codigo.co/img/ui/ico-${type}.svg")`}}></div>)
        })

    return (
        <div className={`col-span-${size} overflow-hidden`}>
            <div className={ styles.imageContainer}>
                <img src={image}  className={styles.zoom} alt="" />
                <div className={styles.imageInfo}>
                    <div className={'mt-10'}>
                        <p>{category}</p>
                        <p className={styles.imageTitle}>{title}</p>
                    </div>
                    <div className={'flex mt-auto mb-10'}>
                        {icons}
                    </div>
                </div>
            </div>
        </div>
        
        )
    }
    