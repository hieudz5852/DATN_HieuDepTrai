import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { postCreate } from 'service/ServiceChatLieu'
import { useNavigate } from 'react-router-dom'
//  React examples
import { Button } from 'react-bootstrap'

const AddChatLieu = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    ten: '',
    trangThai: 0,
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    if (values.ten === '') {
      toast.error('Vui lòng nhập thuộc tính !')
      return
    }
    post(values)
  }

  const post = async (value) => {
    const res = await postCreate(value)
    if (res) {
      toast.success('Add thành công')
      navigate('/quan-ly-san-pham/chat-lieu')
    }
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Thêm chất liệu</strong>
          </CCardHeader>
          <CCardBody>
            <div>
              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <span className="form-label" style={{ fontWeight: 'bold' }}>
                    Tên
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    value={values.ten}
                    onChange={(e) => setValues({ ...values, ten: e.target.value })}
                  />
                </div>
                <div className="col-6">
                  <span style={{ fontWeight: 'bold' }} className="form-label me-3">
                    Trạng thái:{' '}
                  </span>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="0"
                      checked={true}
                      onChange={() => setValues({ ...values, trangThai: 0 })}
                    />
                    <span className="form-check-label">Kích hoạt</span>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="1"
                      onChange={() => setValues({ ...values, trangThai: 1 })}
                    />
                    <span className="form-check-label">Ngừng kích hoạt</span>
                  </div>
                </div>
                <div className="col-12">
                  <Button type="submit" className="btn btn-primary">
                    Thêm
                  </Button>
                </div>
              </form>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AddChatLieu
