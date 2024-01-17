/* eslint-disable react/prop-types */
import React from 'react';
import Modal from 'react-bootstrap/Modal';

function ModalChinhSach({ handleClose, show }) {
  return (
    <>
      <Modal style={{paddingTop: 120}} show={show} size="md" onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Chính Sách</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>1, Tổng giá trị đơn hàng đặt online trên 50 triệu sẽ phải ra cửa hàng để xử lý hoặc liên hệ nhân viên để đặt cọc trước 30%.</p>
          <p>2, Phí giao hàng sẽ do người mua tự chi trả.</p>
          <p>3, Shop sẽ không hỗ trợ đổi trả hàng.</p>
          <p>4, Trong trường hợp khách hàng muốn cập nhật sản phẩm sẽ phải liên hệ với nhân viên để xử lý
               (Trường hợp khách hàng đã thanh toán đơn hàng thì phải liên hệ với nhân viên để xử lý bù trả !) .</p>
          <p>5, Trong trường hợp khách hàng muốn hủy đơn hàng sẽ liên hệ với nhân viên để hủy.</p>
          <p>6, Trong trường hợp khách hàng đã thanh toán đơn hàng nhưng giao hàng thất bại thì nhân viên sẽ liên hệ với khách hàng để hoàn trả tiền.</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalChinhSach;
