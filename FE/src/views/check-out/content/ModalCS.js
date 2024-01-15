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
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalChinhSach;
