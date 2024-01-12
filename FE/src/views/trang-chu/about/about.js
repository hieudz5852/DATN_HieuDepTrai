import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Footer from 'views/trang-chu/trangchu/Footer';
import Header from 'views/trang-chu/trangchu/Header';

function About() {
  return (
    <div>
      <Header />
      <div className="content-container">
        {/* <Banner /> */}
      </div>
      <br></br>
    
    <div className='row'>
        <div style={{paddingTop: 80}} className='col-3'>
<div className="list-group">
  <a className="list-group-item list-group-item-action active" aria-current="true">
    Giới Thiệu
  </a>
  <a className="list-group-item list-group-item-action">Về Sản Phẩm</a>
  <a className="list-group-item list-group-item-action">Năm Ra Đời</a>
  <a  className="list-group-item list-group-item-action">Dịch Vụ Khách Hàng</a>
  {/* <a className="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a> */}
</div>
</div>

  <div className="col-9">
      <div className="col-inner" style={{ padding: '0px 40px 0px 40px' }}>
        <div className="row row-full-width align-middle align-center row-product-home" id="row-1054244304">
          <div className="col medium-9 small-12 large-9">
            <div className="col-inner text-left">
              <p style={{ textAlign: 'center' }}>
                <span style={{ color: '#000000', fontSize: '150%' }}>
                  <strong>CỬA HÀNG CHUYÊN</strong>
                </span>
                <span style={{ color: '#000000', fontSize: '150%' }}>
                  <strong> BÁN GIẦY </strong>
                </span>
                <span style={{ color: '#000000', fontSize: '150%' }}>
                  <strong>F5</strong>
                </span>
              </p>
              <br></br>
              <p style={{ textAlign: 'left' }}>
                <strong>Cửa hàng bán giầy F5</strong> được thành lập và hoạt động từ năm 2023 với lĩnh vực kinh doanh chính:
              </p>
              <br></br>

              <ol>
                <li>
                  Kinh doanh các loại giày.
                </li>
              </ol>
              <br></br>

              <ol start="2">
                {/* <li>Đầu tư kinh doanh bất động sản công nghiệp, dịch vụ kho vận.</li> */}
                <li>
                  Kinh doanh giầy và các sản phẩm thời trang với 3 nhãn hiệu đã được đăng ký bảo hộ sở hữu độc quyền gồm:
                  <ul style={{ textAlign: 'left' }}>
                  <br></br>

                    <li>
                      <strong>D&amp;A: </strong>Dòng giày tiện dụng, mềm mại.
                    </li>
                    <br></br>

                    <li>
                      <strong>URBAN FOOTPRINT: </strong>Dòng giầy thời trang cao cấp, đa phong cách, phù hợp với nhiều lứa tuổi với vật liệu tiên tiến và thân thiện môi trường.
                    </li>
                    <br></br>

                    <li>
                      <strong>NOMNOM:</strong> nhãn hiệu thời trang dành cho nam các thiết kế hiện đại nhưng tiện dụng phù hợp với lứa tuổi, bằng nguồn nguyên liệu an toàn sức khoẻ
                    </li>
                  </ul>
                </li>
              </ol>
              <br></br>

              <p style={{ textAlign: 'left' }}>
                Tất cả các sản phẩm giày của công ty đều được sản xuất tại Việt Nam, trên dây chuyền công nghệ hiện đại, nguyên vật liệu và quy trình sản xuất đạt tiêu chuẩn châu Âu của các nhà máy là đối tác sản xuất cho các nhãn hàng lớn như : <em>NIKE, ADIDAS, MLB, Zara, Sketcher, FILA, NEXT, NY, Boston....</em>
              </p>
              <br></br>

              <p style={{ textAlign: 'left' }}>
                Mục đích của chúng tôi là đưa đến người tiêu dùng Việt Nam các sản phẩm chất lượng, phù hợp với phom dáng của người Việt nhưng luôn bắt nhịp được với hơi thở của thời trang quốc tế với giá cả hợp lý nhất.
              </p>
              <br></br>

              <p style={{ textAlign: 'left' }}>
                <strong><em>Slogan của chúng tôi: Mềm mại với những bước đi năng động!</em></strong>
              </p>
              <br></br>
              <br></br>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>



      <p></p>
      <Footer />
    </div>
  );
}
export default About;
