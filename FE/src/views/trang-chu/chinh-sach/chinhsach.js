import React from 'react';
import Footer from 'views/trang-chu/trangchu/Footer';
import Header from 'views/trang-chu/trangchu/Header';
import '../../../scss/chinh-sach.module.scss'

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

          </ul>
        </section>
<br></br>
        <section>
          <h2>NỘI DUNG CHÍNH SÁCH</h2>

          <table>
            <thead>
              <tr>
                <th>Chi tiết</th>
                <th>Nhóm hàng</th>
              </tr>
            </thead>
            <tbody>
              <td>Giầy Thể Thao Unisex</td>
              <td>
                - Khi mua hàng tại Sports Shop: Đổi hàng trong 15 ngày
                <br></br>
              </td>
            </tbody>
          </table>
        </section>

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
