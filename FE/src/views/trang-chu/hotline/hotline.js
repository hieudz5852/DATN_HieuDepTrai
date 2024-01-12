import React from 'react';
import Footer from 'views/trang-chu/trangchu/Footer';
import Header from 'views/trang-chu/trangchu/Header';
import '../../../assets/scss/hotline.scss'

function HotLine() {
  return (
    <div>
      <Header />

      <section className="ftco-section">
      <div className="container">
   
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="contact-wrap w-100 p-lg-5 p-4">
                    <h3 className="mb-4">Liên hệ chúng tôi</h3>
                    <div id="form-message-warning" className="mb-4"></div>
                    <div id="form-message-success" className="mb-4">
                      Your message was sent, thank you!
                    </div>
                    <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input type="text" className="form-control" name="name" id="name" placeholder="Họ Và Tên" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Chủ Đề" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea name="message" className="form-control" id="message" cols="30" rows="6" placeholder="Lời nhắn"></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input type="submit" value="Send Message" className="btn btn-primary" />
                            <div className="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="info-wrap w-180 p-lg-5 p-4 img">
                    <h3>Thông Tin Liên Hệ Của Chúng Tôi</h3>
                    {/* <p className="mb-4">We're open for any suggestion or just to have a chat</p> */}
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker"></span>
                      </div>
                      <div className="text pl-3">
                        <p><span>Địa Chỉ:</span>Ngách 86/2 Phú Mỹ, Biên Giang, Hà Đông, Hà Nội. </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text pl-3">
                        <p><span>Số Điện Thoại:</span> <a href="tel://0395852610">0395852610</a></p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text pl-3">
                        <p><span>Email:</span> <a href="mailto:hieuvuive13579@gmail.com">hieuvuive13579@gmail.com</a></p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-globe"></span>
                      </div>
                      <div className="text pl-3">
                        <p><span>Website</span> <a href="#">yoursite.com</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <p></p>
      <Footer />
    </div>
  );
}
export default HotLine;
