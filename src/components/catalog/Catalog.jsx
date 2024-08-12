import {catalogSectionInfo} from "../../utils/data.js";

const catalogSection = catalogSectionInfo.map(
    section =>
        <div className={section.className} key={section.id}>
            <p className="catalog__subtitle">{section.subtitle}</p>

            <h2 className="catalog__title">{section.title}</h2>

            <div className="catalog__line line-element"></div>
        </div>
)

export default function Catalog() {
    return (
        <section className="catalog" id={"catalog"}>
            {catalogSection}
        </section>
    )
}