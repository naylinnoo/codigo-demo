import Title from '../work/componenets/title'
import Filter from '../work/componenets/filter/filter'
import Portfolio from '../work/componenets/portfolio/portfolio'

export default function Work() {
    return (
        <div>
            <div className={'pt-56 2lg:mx-72 lg:mx-40 md:mx-20 sm:mx-20 mx-10 animate'}>
                <Title/>
                <Filter/>
            </div>

            <Portfolio/>
        </div>
    )
}
