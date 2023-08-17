// 이미지
import FoodImg_dog from '../../assets/Images/products/food_dog.jpg'
import FoodImg_cat from '../../assets/Images/products/food_cat.jpg'
import SnackImg_dog from '../../assets/Images/products/snack_dog.jpg'
import SnackImg_cat from '../../assets/Images/products/snack_cat.jpg'
import WashImg_dog from '../../assets/Images/products/wash_dog.jpg'
import WashImg_cat from '../../assets/Images/products/wash_cat.jpg'
import Brush from '../../assets/Images/products/brush.jpg'
import Cushion from '../../assets/Images/products/cushion.jpg'
import Toy_dog from '../../assets/Images/products/toy_dog.jpg'
import Toy_cat from '../../assets/Images/products/toy_cat.jpg'
import Clothes_dog from '../../assets/Images/products/clothes_dog.jpg'

const mockData = [
    {
        id: 0,
        kind: 'dog',
        category: 'feed',
        title: '강아지 사료',
        content: '강아지 사료입니다',
        price: 10000,
        new: false,
        cntOfsales: 90,
        discount: 20,
        img: FoodImg_dog
    },
    {
        id: 1,
        kind: 'cat',
        category: 'feed',
        title: '고양이 사료',
        content: '고양이 사료입니다',
        price: 10000,
        new: false,
        cntOfsales: 80,
        discount: 20,
        img: FoodImg_cat
    },
    {
        id: 2,
        kind: 'dog',
        category: 'snackNutrient',
        title: '강아지 간식',
        content: '강아지 간식입니다',
        price: 7000,
        new: false,
        cntOfsales: 70,
        discount: 15,
        img: SnackImg_dog
    },
    {
        id: 3,
        kind: 'cat',
        category: 'snackNutrient',
        title: '고양이 간식',
        content: '고양이 간식입니다',
        price: 7000,
        new: false,
        cntOfsales: 60,
        discount: 15,
        img: SnackImg_cat
    },
    {
        id: 4,
        kind: 'dog',
        category: 'hygiene',
        title: '강아지 샴푸',
        content: '강아지 샴푸입니다',
        price: 5000,
        new: false,
        cntOfsales: 50,
        discount: 0,
        img: WashImg_dog
    },
    {
        id: 5,
        kind: 'cat',
        category: 'hygiene',
        title: '고양이 샴푸',
        content: '고양이 샴푸입니다',
        price: 5000,
        new: false,
        cntOfsales: 40,
        discount: 0,
        img: WashImg_cat
    },
    {
        id: 6,
        kind: 'all',
        category: 'beautyCare',
        title: '펫 브러쉬',
        content: '펫 브러쉬입니다',
        price: 2000,
        new: true,
        cntOfsales: 30,
        discount: 0,
        img: Brush
    },
    {
        id: 7,
        kind: 'all',
        category: 'living',
        title: '쿠션',
        content: '쿠션입니다',
        price: 15000,
        new: true,
        cntOfsales: 20,
        discount: 0,
        img: Cushion
    },
    {
        id: 8,
        kind: 'dog',
        category: 'walkPlay',
        title: '강아지 장난감',
        content: '강아지 장난감입니다',
        price: 8000,
        new: true,
        cntOfsales: 10,
        discount: 0,
        img: Toy_dog
    },
    {
        id: 9,
        kind: 'cat',
        category: 'walkPlay',
        title: '고양이 장난감',
        content: '고양이 장난감입니다',
        price: 8000,
        new: true,
        cntOfsales: 100,
        discount: 0,
        img: Toy_cat
    },
    {
        id: 10,
        kind: 'dog',
        category: 'clothesAccessorie',
        title: '강아지 옷',
        content: '강아지 옷입니다',
        price: 20000,
        new: false,
        cntOfsales: 9,
        discount: 0,
        img: Clothes_dog
    }
];

export default mockData;