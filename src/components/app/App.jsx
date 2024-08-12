import Header from '../header/Header.jsx';
import Footer from "../footer/Footer.jsx";
import Lead from "../lead/Lead.jsx";
import Catalog from "../catalog/Catalog.jsx";
import Location from "../location/Location.jsx";
import Products from "../products/Products.jsx";
import Social from "../social/Social.jsx";
import Subscription from "../subscription/Subscription.jsx";

export default function App() {
    return (
        <div className="page">
            <Header/>

            <Lead/>

            <Catalog/>

            <Products/>

            <Social/>

            <Subscription/>

            <Location/>

            <Footer/>
        </div>
    )
}