import hachapuriJpg from '../imgs/hachapuri.jpg';
import hachapuriWebp from '../imgs/hachapuri.webp';
import lanchJpg from '../imgs/lanch.jpg';
import lanchWebp from '../imgs/lanch.webp';
import hinkaliJpg from '../imgs/hinkali.jpg';
import hinkaliWebp from '../imgs/hinkali.webp';
import odjahuriJpg from '../imgs/odjahuri.jpg';
import odjahuriWebp from '../imgs/odjahuri.webp';
import dolmaJpg from '../imgs/dolma.jpg';
import dolmaWebp from '../imgs/dolma.webp';
import hotPng from '../imgs/hot.png';
import hotWebp from '../imgs/hot.webp';
import soupsPng from '../imgs/soups.png';
import soupsWebp from '../imgs/soups.webp';
import menuhinkaliPng from '../imgs/menuhinkali.png';
import menuhinkaliWebp from '../imgs/menuhinkali.webp';
import coldPng from '../imgs/cold.png';
import coldWebp from '../imgs/cold.webp';
import saladsPng from '../imgs/salads.png';
import saladsWebp from '../imgs/salads.webp';
// import sousesPng from '../imgs/souses.png';
// import sousesWebp from '../imgs/souses.webp';
import baceryPng from '../imgs/bacery.png';
import baceryWebp from '../imgs/bacery.webp';
import dessertPng from '../imgs/dessert.png';
import dessertWebp from '../imgs/dessert.webp';
import drinksPng from '../imgs/drinks.png';
import drinksWebp from '../imgs/drinks.webp';
import fireIconWebp from '../imgs/fireIcon.webp';
import fireIconPng from '../imgs/fireIcon.png';
import fireImgWebp from '../imgs/fireimg.webp';
import fireImgPng from '../imgs/fireimg.png';
import tabletBannerWebp from '../imgs/tabletBanner.webp';
import tabletBannerJpg from '../imgs/tabletBanner.jpg';
import mobileBannerWebp from '../imgs/mobileBanner.webp';
import mobileBannerJpg from '../imgs/mobileBanner.jpg';
export const cardsArr = [
  {
    _id: 1,
    imgJpg: hachapuriJpg,
    imgWebp: hachapuriWebp,
    title: 'Хачапури по-аджарски',
    description: '',
    weight: 80,
    price: 425,
    quantity: 1,
  },
  {
    _id: 2,
    imgJpg: lanchJpg,
    imgWebp: lanchWebp,
    title: 'Ланч низкокалорийный',
    description: '',
    weight: 380,
    price: 525,
    quantity: 2,
  },
  {
    _id: 3,
    imgJpg: hinkaliJpg,
    imgWebp: hinkaliWebp,
    title: 'Хинкали жаренные',
    description: 'Из баранины с тархуном',
    weight: 420,
    price: 115,
    quantity: 6,
  },
  {
    _id: 4,
    imgJpg: odjahuriJpg,
    imgWebp: odjahuriWebp,
    title: 'Оджахури из телятины',
    description: '',
    weight: 80,
    price: 355,
    quantity: 1,
  },
  {
    _id: 5,
    imgJpg: dolmaJpg,
    imgWebp: dolmaWebp,
    title: 'Долма',
    description: 'С бараниной',
    weight: 80,
    price: 490,
    quantity: 1,
  },
];
export const headerMenu = [
  {
    _id: 10,
    anchor: 'Акции',
    url: '#',
    iconWebp: fireIconWebp,
    iconPng: fireIconPng,
    customClass: 'mobile-menu-1',
    imgPng: fireImgPng,
    imgWebp: fireImgWebp,
    tabletBannerWebp: tabletBannerWebp,
    tabletBannerJpg: tabletBannerJpg,
    mobileBannerWebp: mobileBannerWebp,
    mobileBannerJpg: mobileBannerJpg,
  },
  {
    _id: 20,
    anchor: 'Горячее',
    children: [
      {
        _id: 21,
        anchor: 'Горячие блюда',
        url: '#',
        imgPng: hotPng,
        imgWebp: hotWebp,
      },
      {
        _id: 22,
        anchor: 'Супы',
        url: '#',
        imgPng: soupsPng,
        imgWebp: soupsWebp,
      },
      {
        _id: 23,
        anchor: 'Хинкали',
        url: '#',
        imgPng: menuhinkaliPng,
        imgWebp: menuhinkaliWebp,
      },
    ],
    customClass: 'mobile-menu-2',
  },
  {
    _id: 30,
    anchor: 'Холодное',
    children: [
      {
        _id: 31,
        anchor: 'Холодные закуски',
        url: '#',
        imgPng: coldPng,
        imgWebp: coldWebp,
      },
      {
        _id: 32,
        anchor: 'Салаты',
        url: '#',
        imgPng: saladsPng,
        imgWebp: saladsWebp,
      },
      {
        _id: 33,
        anchor: 'Соусы',
        url: '#',
        // imgPng: sousesPng,
        // imgWebp: sousesWebp,
      },
    ],
    customClass: 'mobile-menu-3',
  },
  {
    _id: 40,
    anchor: 'Свежая выпечка',
    url: '#',
    imgPng: baceryPng,
    imgWebp: baceryWebp,
    customClass: 'mobile-menu-4',
  },
  {
    _id: 50,
    anchor: 'Десерты',
    url: '#',
    imgPng: dessertPng,
    imgWebp: dessertWebp,
    customClass: 'mobile-menu-5',
  },
  {
    _id: 60,
    anchor: 'Напитки',
    url: '#',
    imgPng: drinksPng,
    imgWebp: drinksWebp,
    customClass: 'mobile-menu-6',
  },
];

export const footerMenu = [
  {
    _id: 70,
    anchor: 'Обратная связь',
    url: '#',
  },
  {
    _id: 80,
    anchor: 'Доставка',
    url: '#',
  },
  {
    _id: 90,
    anchor: 'Оплата',
    url: '#',
  },
  {
    _id: 100,
    anchor: 'Контакты',
    url: '#',
  },
];

export const footerDocMenu = [
  {
    _id: 110,
    anchor: 'Политика конфиденциальности и оферта',
    url: '#',
  },
  {
    _id: 120,
    anchor: 'Пользовательское соглашение',
    url: '#',
  },
];

export const phone = "+7 (499) 841-67-29";
export const email = "delivery@midas.rest"

// export const token = '4d2fc48f-d0c7-4bea-a8e0-385b9ccc8f15';
// export const baseUrl = 'https://mesto.nomoreparties.co/v1/cohort-75';

// export const profileElementsSelectors = {
//   userNameElementSelector: '.profile__name',
//   userRoleElementSelector: '.profile__role',
//   userAvatarElementSelector: '.profile__avatar-image',
// };

// export const profilePopupSelector = '.js-profile-popup';
// export const placePopupSelector = '.js-place-popup';
// export const imagePopupSelector = '.js-image-popup';
// export const deletePopupSelector = '.js-delete-popup';
// export const avatarPopupSelector = '.js-avatar-popup';
// export const elementsContainerSelector = '.elements';