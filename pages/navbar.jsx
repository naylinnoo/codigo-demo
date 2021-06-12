import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Nav.module.css'

export default function Navbar() {
    return (
        <nav className={"fixed p-0 bg-white w-full nav-animate z-10relative select-none lg:flex lg:items-stretch w-full p-7 px-10"}>
        <div class="flex flex-no-shrink items-stretch items-center h-12">
            <img src="https://www.codigo.co/img/ui/logo-codigo-red.svg" width={'150'} alt="" />

            <div className={'block lg:hidden cursor-pointer ml-auto mobile-nav flex itmes-center justify-center'}>
                <svg className={"fill-current text-white w-6"} viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                {/* <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg> */}
            </div>
    
       
        </div>


        <div class="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow sm:hidden hidden">
        <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
        <a href="" className={'font-bold flex-no-grow flex-no-shrink relative py-2 px-8 leading-normal no-underline flex items-center hover:bg-grey-dark'}>Work</a>
        <a href="" className={'flex-no-grow flex-no-shrink relative py-2 px-8 leading-normal no-underline flex items-center hover:bg-grey-dark'}>Solutions</a>
        <a href="" className={'flex-no-grow flex-no-shrink relative py-2 px-8 leading-normal no-underline flex items-center hover:bg-grey-dark'}>Service</a>
        <a href="" className={'flex-no-grow flex-no-shrink relative py-2 px-8 leading-normal no-underline flex items-center hover:bg-grey-dark'}>About us</a>
        <a href="" className={'flex-no-grow flex-no-shrink relative py-2 px-8 leading-normal no-underline flex items-center hover:bg-grey-dark'}>Blog</a>
        <a href="" className={'flex-no-grow flex-no-shrink relative py-2 px-8 leading-normal no-underline flex items-center hover:bg-grey-dark bg-red-900 py-4 text-white font-bold text-xs rounded-full'}>Request a quote</a>
        </div>
        </div>
        </nav>
        
        )
    }
    