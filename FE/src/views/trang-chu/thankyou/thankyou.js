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
        <i style={{color: "blue"}} className="fa-regular fa-circle-check fa-xl"></i>
        <h3 style={{color: "green"}} className="title-tks mt-4">Cảm ơn bạn đã đặt hàng</h3>
        <p className="text mt-3">Chúng tôi sẽ liên hệ Quý khách để xác nhận đơn hàng trong thời gian sớm nhất có thể !</p>
        <p className="text mt-3">Hãy tiếp tục mua sắm để nhận được nhiều ưu đãi: </p>

        <button type="button" className="btn btn-info" onClick={() => navigate('/trang-chu')}>
          Tiếp tục mua sắm
        </button>
        <p style={{color: "red", fontWeight: "bold"}} className="text mt-3">Trân trọng cảm ơn !</p>

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
