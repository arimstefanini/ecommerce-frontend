import NavBar from '../../components/client/NavBar'
import Announcement from '../../components/client/Announcement'
import Slider from '../../components/client/Slider'
import Categories from '../../components/client/Categories'
import Products from '../../components/client/Products'
import Newsletter from '../../components/client/Newsletter'
import Footer from '../../components/client/Footer'

const Home = () => {
    return(
        <div>
            <Announcement/>
            <NavBar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home