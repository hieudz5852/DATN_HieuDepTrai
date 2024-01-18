/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { searchByTrangThai } from 'service/ServiceDonHang'
import Slidebar from 'views/trang-chu/thong-tin-khach-hang/layout/Slidebar'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import { Table } from 'react-bootstrap';
import {  getById, detailLSHD} from 'service/ServiceDonHang'
function ContentHistory({ dataLogin }) {
  const [values, setValues] = useState([])
  const [modalShow, setModalShow] = useState(false);
  const [id, setId] = useState('')
  const [show1, setShow1] = useState(false)
  const handleClose1 = () => {
    setModalShow(true)
    setShow1(false)}
  const handleShow1 = () =>  {
    setModalShow(false)
    setShow1(true)}
  const [valuesSanPham, setValuesSanPham] = useState([])
  const [lichSuHoaDon, setLichSuHoaDon] = useState([])

  console.log(id);
  
  useEffect(() => {
    if (id) {
      getAllById(id)
      detailListLSHD(id)
    }
  }, [id])

  const getAllById = async (idHD) => {
    const res = await getById(idHD)
    if (res) {
      setValuesSanPham(res.data)
    }
  }

    // getListLSHDbyIDHD
    const detailListLSHD = async (id) => {
      const res = await detailLSHD(id)
      if (res && res.data) {
        setLichSuHoaDon(res.data)
      }
    }

  useEffect(() => {
    if (dataLogin) {
      searchByTT(dataLogin.id, [0, 1, 2, 3, 4])
    }
  }, [dataLogin])

  function convertToCurrency(number) {
    // Chuyển đổi số thành định dạng tiền Việt Nam
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    })
    return formatter.format(number)
  }

  function formatDate(dateString) {
    if (dateString === null) {
      return ''
    }

    const dateObject = new Date(dateString)

    const day = dateObject.getDate()
    const month = dateObject.getMonth() + 1
    const year = dateObject.getFullYear()

    let hours = dateObject.getHours()
    const minutes = dateObject.getMinutes()

    // Đảm bảo hiển thị đúng định dạng hh:mm
    const formattedHours = hours.toString().padStart(2, '0')
    const formattedMinutes = minutes.toString().padStart(2, '0')

    const formattedDate = `${day}/${month}/${year} ${formattedHours}:${formattedMinutes}`

    return formattedDate
  }

  const searchByTT = async (id, values) => {
    const res = await searchByTrangThai(id, values)
    if (res) {
      setValues(res.data.hoaDonList)
      console.log(res)
    }
  }

  const handleShowModalSP = (id) =>{
    setModalShow(true);
    setId(id);
  }

  const handleShowModalSPOFF = () =>{
    setModalShow(false);
    setId('');
  } 

  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-3">
          <Slidebar></Slidebar>
        </div>
        <div className="col-9">
          <h1>Lịch sử mua hàng</h1>
          <hr />{' '}
          <table className="my-2 table text-center">
            <tr>
              <td className="pb-3">Mã hoá đơn</td>
              <td className="pb-3">Ngày đặt</td>
              <td className="pb-3">Thành tiền</td>
              <td className="pb-3">Trạng thái</td>
              <td className="pb-3">Vận chuyển</td>
              <td className="pb-3">Chi tiết</td>
            </tr>
            <tbody className="table-group-divider">
              {values.map((product, index) => (
                <tr style={{cursor: 'pointer'}} key={index}>
                  <td className="pt-3">{product.hoaDon.ma}</td>
                  <td className="pt-3">{formatDate(product.hoaDon.ngayTao)}</td>
                  <td className="pt-3">{convertToCurrency(product.hoaDon.tongTienKhiGiam)}</td>
                  <td className="pt-3">
                    {product.hoaDon.trangThai === 0 && 'Chờ xác nhận'}
                    {product.hoaDon.trangThai === 1 && 'Chờ vận chuyển'}
                    {product.hoaDon.trangThai === 2 && 'Đã huỷ'}
                    {product.hoaDon.trangThai === 3 && 'Đang giao'}
                    {product.hoaDon.trangThai === 4 && 'Đã hoàn thành'}
                  </td>
                  <td className="pt-3">
                    {product.hoaDon.trangThai === 0 && 'Chưa giao hàng'}
                    {product.hoaDon.trangThai === 1 && 'Chưa giao hàng'}
                    {product.hoaDon.trangThai === 2 && 'Chưa giao hàng'}
                    {product.hoaDon.trangThai === 3 && 'Đang giao hàng'}
                    {product.hoaDon.trangThai === 4 && 'Đã giao hàng'}
                  </td>
                  <td style={{textAlign: 'center'}} className="pt-3">
                        <button
                        style={{border: 'none'}}
                          // onClick={() => navigate(`/hoa-don/chi-tiet/${d.id}`)}
                          onClick={() => handleShowModalSP(product.hoaDon.id)}
                          className="fa-solid fa-circle-info fa-xl"
                        ></button>
                      </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>  

      <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ marginLeft: -8, paddingBottom: 150 }}
                show={show1}
                onHide={handleClose1}
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter" style={{ marginLeft: 300 }}>
                    Lịch Sử Hóa Đơn
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <section className="navbar-expand-lg navbar-light bg-light">
                    <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                      <Table id="myTable" className="table" style={{ textAlign: 'center' }}>
                        <thead>
                          <tr style={{ textAlign: 'center' }}>
                            <th>Trạng Thái</th>
                            <th>Thời gian</th>
                            <th>Người tạo</th>
                          </tr>
                        </thead>
                        <tbody className="table-group-divider">
                          {lichSuHoaDon.map((item, index) => (
                            <tr key={index}>
                              <td>
                                {item.trangThai === 0 && (
                                  <span
                                    style={{
                                      color: '#FF9900',
                                      fontWeight: 'bold',
                                      fontStyle: 'italic',
                                      fontFamily: 'revert',
                                      fontSize: 18,
                                    }}
                                  >
                                    Chờ xác nhận
                                  </span>
                                )}
                                {item.trangThai === 1 && (
                                  <span
                                    style={{
                                      color: '#666666',
                                      fontWeight: 'bold',
                                      fontStyle: 'italic',
                                      fontFamily: 'revert',
                                      fontSize: 18,
                                    }}
                                  >
                                    Chờ vận chuyển
                                  </span>
                                )}
                                {item.trangThai === 2 && (
                                  <span
                                    style={{
                                      color: 'orange',
                                      fontWeight: 'bold',
                                      fontStyle: 'italic',
                                      fontFamily: 'revert',
                                      fontSize: 18,
                                    }}
                                  >
                                    Đã hủy
                                  </span>
                                )}

                                {item.trangThai === 3 && (
                                  <span
                                    style={{
                                      color: '#FF6633',
                                      fontWeight: 'bold',
                                      fontStyle: 'italic',
                                      fontFamily: 'revert',
                                      fontSize: 18,
                                    }}
                                  >
                                    Đang giao
                                  </span>
                                )}
                                {item.trangThai === 4 && (
                                  <span
                                    style={{
                                      color: '#0066FF',
                                      fontWeight: 'bold',
                                      fontStyle: 'italic',
                                      fontFamily: 'revert',
                                      fontSize: 18,
                                    }}
                                  >
                                    Đã hoàn thành
                                  </span>
                                )}
                              </td>
                              <td>{formatDate(item.ngayTao)}</td>
                              <td>{item.nguoiTao}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  </section>
                </Modal.Body>
              </Modal>

      <Modal
      show={modalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Thông tin đơn hàng
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
<CRow>
     <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <div className="table-container">
              <Table striped className="my-4">
                <tr className="ps-5">
                  <th>#</th>
                  <th>Mã</th>
                  <th>Ảnh</th>
                  <th>Sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Đơn giá</th>
                  <th>Tổng tiền</th>
                </tr>
                <tbody className="table-group-divider">
                  {valuesSanPham.map((d, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{d.chiTietSanPham.sanPham.ma}</td>
                      <td>
                        <img
                          src={`http://localhost:8080/api/chi-tiet-san-pham/${d.chiTietSanPham.id}`}
                          className="product-image"
                          style={{ width: '70px', height: '100px' }}
                        />
                      </td>
                      <td>
                        {d.chiTietSanPham.sanPham.ten} <br />
                        {d.chiTietSanPham.kichCo.ten} -{' '}
                        <span
                          className="color-circle"
                          style={{
                            backgroundColor: d.chiTietSanPham.mauSac.ten,
                            display: 'inline-block',
                            verticalAlign: 'middle',
                            height: '15px',
                            width: '15px',
                          }}
                        ></span>
                      </td>
                      <td>
                          <div
                            className="input-spinner"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              width: 120,
                              justifyContent: 'center',
                            }}
                          >
                          <span style={{ fontWeight: 'bold' }}>{d.soLuong}</span>
                          </div>
                      </td>
                      <td>{convertToCurrency(d.donGia)}</td>
                      <td>{convertToCurrency(d.soLuong * d.donGia)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>

<div style={{display: 'flex', justifyContent: "right",justifyItems: "flex-end"}}>
<Button onClick={handleShow1} variant="primary" className="btn btn-dark">
                    <span style={{ fontWeight: 'bold' }}>Lịch sử hóa đơn</span>
                  </Button>
</div>
              
            </div>
          </CCardBody>
        </CCard>
      </CCol>
</CRow>
        

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleShowModalSPOFF}>Thoát</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default ContentHistory
