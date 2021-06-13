export default function Navbar() {
    return (
        <div className={'fixed bg-white w-full nav-animate z-10'}>
            <nav className={" relative select-none lg:flex lg:items-stretch w-full p-7 px-10"}>
            <div className={"flex flex-no-shrink items-stretch items-center h-12"}>
                <img src="https://www.codigo.co/img/ui/logo-codigo-red.svg" width={'150'} alt="codigologo" />

                <div className={'block lg:hidden cursor-pointer ml-auto mobile-nav flex items-center justify-center'}>
                    <svg className={"fill-current text-white w-6"} viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                  </div>
            </div>


        <div className={"lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow sm:hidden hidden"}>
        <div className={"lg:flex lg:items-stretch lg:justify-end ml-auto"}>
        <a href="" className={'font-bold flex-no-grow flex-no-shrink relative py-2 px-8 leading-normal no-underline flex items-center hover:bg-grey-dark'}>Work</a>
        <a href="" className={'flex-no-grow flex-no-shrink relative py-2 px-8 leading-normal no-underline flex items-center hover:bg-grey-dark'}>Solutions</a>
        <a href="" className={'flex-no-grow flex-no-shrink relative py-2 px-8 leading-normal no-underline flex items-center hover:bg-grey-dark'}>Service</a>
        <a href="" className={'flex-no-grow flex-no-shrink relative py-2 px-8 leading-normal no-underline flex items-center hover:bg-grey-dark'}>About us</a>
        <a href="" className={'flex-no-grow flex-no-shrink relative py-2 px-8 leading-normal no-underline flex items-center hover:bg-grey-dark'}>Blog</a>
        <a href="" className={'flex-no-grow flex-no-shrink relative py-2 px-8 leading-normal no-underline flex items-center hover:bg-grey-dark bg-red-900 py-4 text-white font-bold text-xs rounded-full'}>Request a quote</a>
        </div>
        </div>
        </nav>
        </div>
        
        )
    }
    