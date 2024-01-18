import React from 'react';
import Footer from 'views/trang-chu/trangchu/Footer';
import Header from 'views/trang-chu/trangchu/Header';
import '../../../scss/chinh-sach.scss'

function ChinhSach() {
  return (
    <div>
      <Header />
      <div className="content-container">
        {/* <Banner /> */}
      </div>
      <br></br>
   
      <div className="chinh-sach-container">
        <section>
          <h2>CHÍNH SÁCH CỬA HÀNG</h2>
        </section>

        <section>
          <ul>
            <li>Tổng giá trị đơn hàng đặt online trên 50 triệu sẽ phải ra cửa hàng để xử lý hoặc liên hệ nhân viên để đặt cọc trước 30%.</li>
            <li>Phí giao hàng sẽ do người mua tự chi trả.</li>
            <li>Shop không hỗ trợ đổi trả hàng.</li>
            <li>Trong trường hợp khách hàng có vấn đề về đơn hàng, vui lòng liên hệ với nhân viên để được hỗ trợ
               (Trường hợp khách hàng đã thanh toán đơn hàng thì phải liên hệ với nhân viên để xử lý bù trả!) .</li> 
            <li>Trong trường hợp khách hàng đã thanh toán đơn hàng nhưng giao hàng thất bại thì nhân viên sẽ liên hệ với khách hàng để hoàn trả tiền.</li>
          </ul>
        </section>
<br></br>

        {/* Thêm các section khác tương tự ở đây */}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}
export default ChinhSach;
