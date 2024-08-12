import {productsSectionInfo} from "../../utils/data.js";

function product(prop) {
    return (
        <div className={prop.sectionClassName} key={prop.id}>
            <img className={prop.imgClassName} src={prop.img} alt={prop.alt}/>

            <div className="products__caption caption">
                <p className={prop.productNameClassName}>{prop.productName}</p>

                <p className={prop.productDescriptionClassName}>{prop.productDescription}</p>

                <p className={prop.productPriceClassName}>{prop.productPrice}</p>
            </div>
        </div>
    )
}

export default function Products() {
    return (
        <section className="products" id={'products'}>
            <div className="products__section products__section_extreme">
                {product(productsSectionInfo[0])}
                {product(productsSectionInfo[1])}
            </div>

            <div className="products__section products__section_middle">
                {product(productsSectionInfo[2])}
            </div>

            <div className="products__section products__section_extreme">
                {product(productsSectionInfo[3])}
                {product(productsSectionInfo[4])}
            </div>
        </section>
    )
}