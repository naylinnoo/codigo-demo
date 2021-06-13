import Images from './images'

export default function Portfolio() {

    return (
        <div
            className={'grid 2xl:grid-cols-4 lg:grids-col-4 md:grid-cols-3 sm:grid-cols-2 grid-flow-row-dense pt-10 overflow-hidden'}>

            {/*can be improved with api calls*/}

            <Images
                title="OCBC Pay Anyone"
                category='Banking and Finance'
                size='2'
                image='https://cdn.codigo.co/uploads/2021/04/PAO-0@2x.jpg'
                types={['app', 'web']}/>

            <Images
                title="Ecolab"
                category='Others'
                size='1'
                image='https://cdn.codigo.co/uploads/2021/04/ECO-0@2x.jpg'
                types={['app', 'cms', 'uiux']}/>

            <Images
                title="KIWI Auto Marketplace"
                category='Others, Start ups'
                size='1'
                image='https://cdn.codigo.co/uploads/2021/04/KIWI-0@2x.jpg'
                types={['app', 'web', 'cms', 'uiux']}/>

            <Images
                title="Furama Hotels"
                category='Lifestyle'
                size='1'
                image='https://cdn.codigo.co/uploads/2021/04/FURAMA-0@2x.jpg'
                types={['app', 'uiux']}/>

            <Images
                title="Woodlands Transport"
                category='Transport & Logistics'
                size='1'
                image='https://cdn.codigo.co/uploads/2021/04/WTS-0@2x.jpg'
                types={['app', 'web', 'cms', 'uiux']}/>


            <Images
                title="Ready To Travel (SATS)"
                category='Lifestyle, Retail & Entertainment, Start-ups'
                size='2'
                image='https://cdn.codigo.co/uploads/2021/04/RTT-0@2x.jpg'
                types={['app', 'uiux']}/>

            <Images
                title="Yoga Movement"
                category='Lifestyle'
                size='2'
                image='https://cdn.codigo.co/uploads/2021/04/YM-0@2x-1.jpg'
                types={['app', 'web', 'cms', 'uiux']}/>

            <Images
                title="Don Don Donki"
                category='Retail & Entertainment'
                size='2'
                image='https://cdn.codigo.co/uploads/2021/04/DONKI-0@2x.jpg'
                types={['app', 'cms', 'uiux']}/>

            <Images
                title="TAP Ride Hailing"
                category='Transport & Logistics'
                size='1'
                image='https://cdn.codigo.co/uploads/2021/04/TAP-0@2x.jpg'
                types={['app']}/>

            <Images
                title="FWD Insurance"
                category='Others'
                size='2'
                image='https://cdn.codigo.co/uploads/2021/04/FWD-0@2x.jpg'
                types={['app', 'cms', 'uiux']}/>

            <Images
                title="Isetan"
                category='Retail & Entertainment'
                size='1'
                image='https://cdn.codigo.co/uploads/2021/04/ISETAN-0@2x.jpg'
                types={['app', 'cms', 'uiux']}/>
        </div>

    )
}
    