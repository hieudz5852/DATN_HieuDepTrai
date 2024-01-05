import React from 'react'
import { Image } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import AnhBanner from '../../../assets/images/anh1.jpg'
import AnhBanner1 from '../../../assets/images/anh2.jpg'
import AnhBanner2 from '../../../assets/images/anh3.jpg'
import AnhBanner3 from '../../../assets/images/anh4.jpg'
import AnhBanner4 from '../../../assets/images/anh5.jpg'
import '../../../assets/scss/pannerhieu.scss'
function Banner() {
  return (
    <div>
      <div  style={{ height: 30 ,backgroundColor:'black',marginBottom:1}}>
        <p className="pannerHieu">
          CHÀO MỪNG BẠN ĐẾN VỚI SHOP BÁN GIẦY F5, NẾU CÓ THĂC MẮC CẦN GIẢI ĐÁP VUI LÒNG LIÊN HỆ ADMIN NGUYỄN VŨ MINH HIẾU VỚI SỐ 0395852610 ĐỂ ĐƯỢC HỖ TRỢ
        </p>
      </div>

      <Carousel className="banner" style={{ height: 600 }}>
        <Carousel.Item interval={1000}>
          <Image src={AnhBanner} className="d-block w-100" alt="Anh1" style={{ height: 600 }} />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <Image src={AnhBanner1} className="d-block w-100" alt="Anh2" style={{ height: 600 }} />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={AnhBanner2} className="d-block w-100" alt="Anh3" style={{ height: 600 }} />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={AnhBanner3} className="d-block w-100" alt="Anh4" style={{ height: 600 }} />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={AnhBanner4} className="d-block w-100" alt="Anh5" style={{ height: 600 }} />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
export default Banner
