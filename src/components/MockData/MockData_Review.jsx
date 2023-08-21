// 이미지
import food_image1 from '../../assets/Images/products/food_image1.jpg';
import food_image2 from '../../assets/Images/products/food_image2.jpg';
import food_image3 from '../../assets/Images/products/food_image3.jpg';
import food_image4 from '../../assets/Images/products/food_image4.jpg';
import food_image5 from '../../assets/Images/products/food_image5.jpg';

// Mock Data
const mockData = [
    {
        id: 0,
        url: '/community/reviewDetail',
        image: food_image1,
        productName: "데이스포 장영양제 250g",
        star: 4,
        subject: '우리아이가 잘 먹어요',
        usename: '배**',
        createDate: new Date('2023-01-21 00:00:00')
    },
    {
        id: 1,
        url: '/community/reviewDetail',
        image: food_image2,
        productName: "애견비책 오리 연어 화식사료 120g x 10",
        star: 1,
        subject: '가성비가 안좋아요',
        usename: '김**',
        createDate: new Date('2023-01-15 00:00:00')
    },
    {
        id: 2,
        url: '/community/reviewDetail',
        image: food_image3,
        productName: "NPABC-844-A-반려동물 사각캔 닭고기+소고기 100gx24",
        star: 5,
        subject: '닭가슴살 부족할 때, 내가 먹어도 꿀맛임',
        usename: '최**',
        createDate: new Date('2023-01-05 00:00:00')
    },
    {
        id: 3,
        url: '/community/reviewDetail',
        image: food_image4,
        productName: "기둥 컴팩트 애견배변판 배변용품 반려동물 애완",
        star: 3,
        subject: '배변 교육시키는데 너무 좋네요',
        usename: '은**',
        createDate: new Date('2022-12-29 00:00:00')
    },
    {
        id: 4,
        url: '/community/reviewDetail',
        image: food_image5,
        productName: "gooby 메모리폼 스텝인 하네스 편안한 강아지 가슴줄",
        star: 4,
        subject: '산책 필수템!',
        usename: '박**',
        createDate: new Date('2022-12-11 00:00:00')
    }
];

export default mockData;