import Navbar from '../pages/app/navigation/navbar'
import Meta from '../pages/app/meta'
import Footer from '../pages/app/navigation/footer'
import Work from "./work/work";

export default function Home() {
    return (
        <div className={'z-0'}>
            <Meta/>
            <Navbar/>

            <Work/>

            <Footer/>
        </div>
    )
}
  