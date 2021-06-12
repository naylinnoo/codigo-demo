import Images from '../portfolio/images'
import styles from '../../styles/Port.module.css'

export default function Portfolio({category, title = 1 , size, color, image, types}) {

    return (
        <div className={'grid 2xl:grid-cols-4 lg:grids-col-4 md:grid-cols-3 sm:grid-cols-2 grid-flow-row-dense pt-10 overflow-hidden'}>
            <Images 
            title="OCBC Pay Anyone" 
            category='Banking and Finance' 
            size = '2' 
            image = 'https://cdn.codigo.co/uploads/2021/04/PAO-0@2x.jpg' 
            types={['app', 'web']}></Images>

            <Images 
            title="Ecolab" 
            category='Others' 
            size = '1' 
            image = 'https://cdn.codigo.co/uploads/2021/04/ECO-0@2x.jpg' 
            types={['app', 'cms','ui/ux']}></Images>

            <Images 
            title="KIWI Auto Marketplace" 
            category='Others, Start ups' 
            size = '1' 
            image = 'https://cdn.codigo.co/uploads/2021/04/KIWI-0@2x.jpg' 
            types={['app', 'web','cms','uiux']}></Images>

            <Images 
            title="Furama Hotels" 
            category='Lifestyle' 
            size = '1' 
            image = 'https://cdn.codigo.co/uploads/2021/04/FURAMA-0@2x.jpg' 
            types={['app','uiux']}></Images>

            <Images 
            title="Woodlands Transport" 
            category='Transport & Logistics' 
            size = '1' 
            image = 'https://cdn.codigo.co/uploads/2021/04/WTS-0@2x.jpg' 
            types={['app', 'web','cms','uiux']}></Images>


            <Images 
            title="Ready To Travel (SATS)" 
            category='Lifestyle, Retail & Entertainment, Start-ups' 
            size = '2' 
            image = 'https://cdn.codigo.co/uploads/2021/04/RTT-0@2x.jpg' 
            types={['app','uiux']}></Images>

            <Images 
            title="Yoga Movement" 
            category='Lifestyle' 
            size = '2' 
            image = 'https://cdn.codigo.co/uploads/2021/04/YM-0@2x-1.jpg' 
            types={['app', 'web','cms','uiux']}></Images>

            <Images 
            title="Don Don Donki" 
            category='Retail & Entertainment' 
            size = '2' 
            image = 'https://cdn.codigo.co/uploads/2021/04/DONKI-0@2x.jpg' 
            types={['app', 'cms','uiux']}></Images>

            <Images 
            title="TAP Ride Hailing" 
            category='Transport & Logistics' 
            size = '1' 
            image = 'https://cdn.codigo.co/uploads/2021/04/TAP-0@2x.jpg' 
            types={['app']}></Images>

            <Images 
            title="FWD Insurance" 
            category='Others' 
            size = '2' 
            image = 'https://cdn.codigo.co/uploads/2021/04/FWD-0@2x.jpg' 
            types={['app','cms','uiux']}></Images>

            <Images 
            title="Isetan" 
            category='Retail & Entertainment'  
            size = '1' 
            image = 'https://cdn.codigo.co/uploads/2021/04/ISETAN-0@2x.jpg' 
            types={['app','cms','uiux']}></Images>
        </div>
        
        )
    }
    