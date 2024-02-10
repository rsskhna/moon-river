import Lead from "./Lead.jsx";
import Catalog from "./Catalog.jsx";
import Location from "./Location.jsx";
import Products from "./Products.jsx";
import Social from "./Social.jsx";
import Subscription from "./Subscription.jsx";

export default function Main() {
    return (
        <main className="content">
            <Lead/>

            <Catalog/>

            <Location/>

            <Products/>

            <Social/>

            <Subscription/>
        </main>
    )
}

