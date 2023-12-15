import React from 'react'
import AddNV from 'views/nhanvien/addNV'
import NhanVien from 'views/nhanvien/nhanvien'
import UpdateNV from 'views/nhanvien/updateNV'
import AddChatLieu from 'views/sanpham/chatlieu/AddChatLieu'
import UpdateChatLieu from 'views/sanpham/chatlieu/UpdateChatLieu'
import AddKC from 'views/sanpham/kichco/addkc'
import KC from 'views/sanpham/kichco/kichco'
import UpdateKC from 'views/sanpham/kichco/updatekc'
import AddLSP from 'views/sanpham/loaisanpham/addlsp'
import LSP from 'views/sanpham/loaisanpham/loaisp'
import UpdateLSP from 'views/sanpham/loaisanpham/updatelsp'
import AddNSX from 'views/sanpham/nhasanxuat/addnsx'
import NSX from 'views/sanpham/nhasanxuat/nsx'
import UpdateNSX from 'views/sanpham/nhasanxuat/updatensx'
import KhachHang from './views/khachhang/khachhang'
import AddKH from 'views/khachhang/addKH'
import UpdateKH from 'views/khachhang/updateKH'
import KhuyenMai from 'views/khuyenmai/khuyenmai'
import AddKM from 'views/khuyenmai/addKM'
import UpdateKM from 'views/khuyenmai/updateKM'
import HoaDon from 'views/hoadon/hoadon'
import HDCT from 'views/hoadon/hoa-don-chi-tiet'
import ThongKe from 'views/thong-ke/thongke'
import Page404 from 'views/pages/page404/Page404'
// Buttons
const SanPham = React.lazy(() => import('./views/sanpham/sanpham/SanPham'))
const AddSanPham = React.lazy(() => import('./views/sanpham/sanpham/AddSanPham'))
const UpdateSanPham = React.lazy(() => import('./views/sanpham/sanpham/UpdateSanPham'))
const MauSac = React.lazy(() => import('./views/sanpham/mausac/MauSac'))
const AddMauSac = React.lazy(() => import('./views/sanpham/mausac/AddMS'))
const UpdateMauSac = React.lazy(() => import('./views/sanpham/mausac/UpdateMS'))
const ChatLieu = React.lazy(() => import('./views/sanpham/chatlieu/ChatLieu'))
// Bán hàng tại quầy
const BanHangTaiQuay = React.lazy(() => import('./views/ban-hang-tai-quay/BanHangTaiQuay'))
const dataLoginVip = JSON.parse(
  localStorage.getItem('dataLoginAD') || localStorage.getItem('dataLoginNV'),
)
const routes = [
  { path: '/', exact: true, name: 'Home' },

  {
    path: '/ban-hang-tai-quay',
    name: 'Bán hàng tại quầy',
    element: dataLoginVip ? BanHangTaiQuay : Page404,
    exact: true,
  },

  {
    path: '/quan-ly-san-pham/san-pham',
    name: 'Sản Phẩm',
    element: dataLoginVip ? SanPham : Page404,
  },
  { path: '/quan-ly-san-pham/san-pham/add', element: dataLoginVip ? AddSanPham : Page404 },
  {
    path: '/quan-ly-san-pham/san-pham/detail/:id/:idSP',
    element: dataLoginVip ? UpdateSanPham : Page404,
  },
  { path: '/quan-ly-san-pham/mau-sac', name: 'Màu Sắc', element: dataLoginVip ? MauSac : Page404 },
  { path: '/quan-ly-san-pham/mau-sac/add', element: dataLoginVip ? AddMauSac : Page404 },
  { path: '/quan-ly-san-pham/mau-sac/update', element: dataLoginVip ? UpdateMauSac : Page404 },
  {
    path: '/quan-ly-san-pham/mau-sac/detail/:id',
    element: dataLoginVip ? UpdateMauSac : Page404,
  },

  {
    path: '/quan-ly-san-pham/chat-lieu',
    name: 'Chất Liệu',
    element: dataLoginVip ? ChatLieu : Page404,
  },
  { path: '/quan-ly-san-pham/chat-lieu/add', element: dataLoginVip ? AddChatLieu : Page404 },
  { path: '/quan-ly-san-pham/chat-lieu/update', element: dataLoginVip ? UpdateChatLieu : Page404 },
  {
    path: '/quan-ly-san-pham/chat-lieu/detail/:id',
    element: dataLoginVip ? UpdateChatLieu : Page404,
  },

  { path: '/quan-ly-san-pham/nsx', name: 'Nhà sản xuất', element: dataLoginVip ? NSX : Page404 },
  { path: '/quan-ly-san-pham/nsx/add', element: dataLoginVip ? AddNSX : Page404 },
  { path: '/quan-ly-san-pham/nsx/update', element: dataLoginVip ? UpdateNSX : Page404 },
  {
    path: '/quan-ly-san-pham/nsx/detail/:id',
    element: dataLoginVip ? UpdateNSX : Page404,
  },

  { path: '/quan-ly-san-pham/kich-co', name: 'Kích cỡ', element: dataLoginVip ? KC : Page404 },
  { path: '/quan-ly-san-pham/kich-co/add', element: dataLoginVip ? AddKC : Page404 },
  { path: '/quan-ly-san-pham/kich-co/update', element: dataLoginVip ? UpdateKC : Page404 },
  {
    path: '/quan-ly-san-pham/kich-co/detail/:id',
    element: dataLoginVip ? UpdateKC : Page404,
  },

  { path: '/quan-ly-san-pham/lsp', name: 'Loại SP', element: dataLoginVip ? LSP : Page404 },
  { path: '/quan-ly-san-pham/lsp/add', element: dataLoginVip ? AddLSP : Page404 },
  { path: '/quan-ly-san-pham/lsp/update', element: dataLoginVip ? UpdateLSP : Page404 },
  {
    path: '/quan-ly-san-pham/lsp/detail/:id',
    element: dataLoginVip ? UpdateLSP : Page404,
  },

  { path: '/nhan-vien/hien-thi', name: 'Nhân viên', element: dataLoginVip ? NhanVien : Page404 },
  { path: '/nhan-vien/add', element: dataLoginVip ? AddNV : Page404 },
  { path: '/nhan-vien/update', element: dataLoginVip ? UpdateNV : Page404 },
  {
    path: '/nhan-vien/detail/:id',
    element: dataLoginVip ? UpdateNV : Page404,
  },

  { path: '/khach-hang/hien-thi', name: 'Khách hàng', element: dataLoginVip ? KhachHang : Page404 },
  { path: '/khach-hang/add', element: dataLoginVip ? AddKH : Page404 },
  { path: '/khach-hang/update', element: dataLoginVip ? UpdateKH : Page404 },
  {
    path: '/khach-hang/detail/:id',
    element: dataLoginVip ? UpdateKH : Page404,
  },

  { path: '/khuyen-mai/hien-thi', name: 'Khuyến Mãi', element: dataLoginVip ? KhuyenMai : Page404 },
  { path: '/khuyen-mai/add', element: dataLoginVip ? AddKM : Page404 },
  { path: '/khuyen-mai/update', element: dataLoginVip ? UpdateKM : Page404 },
  {
    path: '/khuyen-mai/detail/:id',
    element: dataLoginVip ? UpdateKM : Page404,
  },

  { path: '/hoa-don/hien-thi', name: 'Hóa Đơn', element: dataLoginVip ? HoaDon : Page404 },
  {
    path: '/hoa-don/chi-tiet/:id',
    name: 'Hóa Đơn Chi Tiết',
    element: dataLoginVip ? HDCT : Page404,
  },

  { path: '/thong-ke', name: 'Thống kê', element: dataLoginVip ? ThongKe : Page404 },
]

export default routes
