export default function Filter() {

    return (
        <div className={'pt-10 animate lg:block md:block hidden'}>
        <div className={'grid grid-cols-6'}>

        <div className={'lg:col-span-4 sm:col-span-6 col grid grid-cols-3 gap-4'}>
            <div className={'flex'}>
                <div className={'w-4 h-1 border-b-2 border-red-700 pt-4 mr-2 active'}/>
                <strong >{'All'}</strong>
            </div>
            <div>{'Food And Beverage'}</div>
            <div>{'Media'}</div>
            <div>{'Transport & Logistic'}</div>
            <div>{'Banking & Finance'}</div>
            <div>{'LifeStyle'}</div>
            <div>{'Co-incubation'}</div>
            <div>{'HealthCare'}</div>
            <div>{'Retail & Entertainment'}</div>
            <div>{'Telco'}</div>
            <div>{'Others'}</div>
            <div>{'Startup'}</div>
        </div>
        <div className={'lg:col-span-2  lg:block md:block hidden flex items-end lg:justify-end md:pt-10'}>

            <div>
            <strong className={'text-xs'}>LEGEND</strong>
            <div className={"category col-span-4 grid grid-cols-2 gap-x-10 gap-y-5 pt-3 mt-2 px-5 border-l border-black"}>
                <div className={'text-xs'}>
                    <img  className={'inline mr-3'} src="https://www.codigo.co/img/ui/ico-app.svg" width={12} alt={'app'}/>
                    <p className={'inline font-light'} >APP</p>
                </div>
                <div className={'text-xs'}>
                    <img  className={'inline mr-3'} src="https://www.codigo.co/img/ui/ico-web.svg" width={12} alt={'web'}/>
                    <p className={'inline font-light'} >WEB</p>
                </div>
                <div className={'text-xs'}>
                    <img  className={'inline mr-3'} src="https://www.codigo.co/img/ui/ico-cms.svg" width={12} alt={'cms'}/>
                    <p className={'inline font-light'} >CMS</p>
                </div>
                <div className={'text-xs'}>
                    <img  className={'inline mr-3'} src="https://www.codigo.co/img/ui/ico-uiux.svg" width={12} alt={'uiux'}/>
                    <p className={'inline font-light'} >UI/UX</p>
                </div>
            </div>
        </div>
       

        </div>
        </div>
        
        </div>
        
        )
    }
    