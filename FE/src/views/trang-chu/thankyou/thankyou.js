import React from 'react';
import Footer from 'views/trang-chu/trangchu/Footer';
import Header from 'views/trang-chu/trangchu/Header';
import '../../../assets/scss/thankyou.scss'
import { useNavigate } from 'react-router';

function ThankYou() {
    const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="content-container">
        {/* <Banner /> */}
      </div>
      <br></br>
      <div className="container text-center thong-bao-thanh-cong">
        <i className="fa-regular fa-circle-check fa-xl icon-succsess"></i>
        <h3 className="title-tks mt-4">Cảm ơn bạn đã đặt hàng</h3>
        <p className="text mt-3">Chúng tôi sẽ liên hệ Quý khách để xác nhận đơn hàng trong thời gian sớm nhất</p>
        <button type="button" className="btn btn-warning" onClick={() => navigate('/trang-chu')}>
          Tiếp tục mua sắm
        </button>
      </div>
      <br></br>
      <br></br>
      <br></br>

      <p></p>
      <Footer />
    </div>
  );
}
export default ThankYou;
