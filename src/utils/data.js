import ringOne from '../images/ring2.svg';
import ringTwo from '../images/ring3.svg';
import necklace from '../images/necklace.jpg';
import earringsOne from '../images/earrings1.svg';
import earringsTwo from '../images/earrings2.svg';

import socialImage1 from '../images/social-networks1.jpg';
import socialImage2 from '../images/social-networks2.jpg';
import socialImage3 from '../images/social-networks3.jpg';
import socialImage4 from '../images/social-networks4.jpg';
import socialImage5 from '../images/social-networks5.jpg';
import socialImage6 from '../images/social-networks6.jpg';
import socialImage7 from '../images/social-networks7.jpg';
import socialImage8 from '../images/social-networks8.jpg';

export const languageList = [
  {
    id: 'ru',
  },
  {
    id: 'en',
  },
]

export const catalogSectionInfo = [
  {
    className:'catalog__section catalog__section_type_for-man',
    subtitle: 'Перейти в раздел',
    title: 'Для мужчин',
    id: 1,
  },
  {
    className:'catalog__section catalog__section_type_for-woman',
    subtitle: 'Перейти в раздел',
    title: 'Для женщин',
    id: 2,
  },
]

const productsNameClass = "caption__product-name products__product-name";
const productsDescriptionClass = "caption__product-description products__product-description";
const productPriceClass = "caption__product-price products__product-price";

export const productsSectionInfo = [
  {
    sectionClassName:'products__square-section',
    img:ringOne,
    imgClassName:'products__product products__product_ring',
    alt:'Кольцо',
    productNameClassName: productsNameClass,
    productDescriptionClassName: productsDescriptionClass,
    productPriceClassName: productPriceClass,
    productName:'КОЛЬЦО jow’s, Cartier',
    productDescription:'Белое золото, бриллианты',
    productPrice:'674 000 ₽',
    id:1
  },
  {
    sectionClassName:'products__square-section',
    img:ringTwo,
    imgClassName:'products__product products__product_ring',
    alt:'Кольцо',
    productNameClassName: productsNameClass,
    productDescriptionClassName: productsDescriptionClass,
    productPriceClassName: productPriceClass,
    productName:'КОЛЬЦО croix, Cartier',
    productDescription:'Желтое, белое, розовое золото',
    productPrice:'432 000 ₽',
    id:2
  },
  {
    sectionClassName:'products__rectangle-section',
    img:necklace,
    imgClassName:'products__product products__product_necklace',
    alt:'Колье',
    productNameClassName: 'caption__product-name products__middle-section_description',
    productDescriptionClassName: 'caption__product-description products__middle-section_description',
    productPriceClassName: 'caption__product-price products__middle-section_price',
    productName:'КОЛЬЕ ETOILE, HUBLOT',
    productDescription:'Белое золото, бриллианты',
    productPrice:'539 000 ₽',
    id:3
  },
  {
    sectionClassName:'products__square-section',
    img:earringsOne,
    imgClassName:'products__product products__product_earring',
    alt:'Серьги',
    productNameClassName: productsNameClass,
    productDescriptionClassName: productsDescriptionClass,
    productPriceClassName: productPriceClass,
    productName:'СЕРЬГИ MOON, HUBLOT',
    productDescription:'Желтое золото, сапфир',
    productPrice:'498 000 ₽',
    id:4
  },
  {
    sectionClassName:'products__square-section',
    img:earringsTwo,
    imgClassName:'products__product products__product_earring',
    alt:'Серьги',
    productNameClassName: productsNameClass,
    productDescriptionClassName: productsDescriptionClass,
    productPriceClassName: productPriceClass,
    productName:'СЕРЬГИ WIN, BLANCPAIN',
    productDescription:'Желтое золото, жемчуг',
    productPrice:'398 000 ₽',
    id:5
  }
]

export const socialImages = [
  {
    img:socialImage1,
    id:1
  },
  {
    img:socialImage2,
    id:2
  },
  {
    img:socialImage3,
    id:3
  },
  {
    img:socialImage4,
    id:4
  },
  {
    img:socialImage5,
    id:5
  },
  {
    img:socialImage6,
    id:6
  },
  {
    img:socialImage7,
    id:7
  },
  {
    img:socialImage8,
    id:8
  },
  {
    img:socialImage1,
    id:1
  },
  {
    img:socialImage2,
    id:2
  },
  {
    img:socialImage3,
    id:3
  },
  {
    img:socialImage4,
    id:4
  },
  {
    img:socialImage5,
    id:5
  },
  {
    img:socialImage6,
    id:6
  },
  {
    img:socialImage7,
    id:7
  },
  {
    img:socialImage8,
    id:8
  },
]

export const footerLinks = [
  {
    linkTextContent:'работа в компании',
    id:1,
  },
  {
    linkTextContent:'условия пользования',
    id:2,
  },
  {
    linkTextContent:'выходные данные',
    id:3,
  },
  {
    linkTextContent:'политика конфиденциальности',
    id:4,
  },
  {
    linkTextContent:'карта сайта',
    id:5,
  },
]
