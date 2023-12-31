USE [DATN]
GO
/****** Object:  Table [dbo].[Anh]    Script Date: 11/21/2023 12:41:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Anh](
	[id] [uniqueidentifier] NOT NULL,
	[ma] [nvarchar](50) NULL,
	[ten] [varbinary](max) NULL,
	[trang_thai] [int] NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
	[id_ctsp] [uniqueidentifier] NULL,
 CONSTRAINT [PK_Anh] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ChatLieu]    Script Date: 11/21/2023 12:41:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChatLieu](
	[id] [uniqueidentifier] NOT NULL,
	[ma] [nvarchar](50) NULL,
	[ten] [nvarchar](50) NULL,
	[trang_thai] [int] NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
 CONSTRAINT [PK_ChatLieu] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ChiTietSanPham]    Script Date: 11/21/2023 12:41:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChiTietSanPham](
	[id] [uniqueidentifier] NOT NULL,
	[id_cl] [uniqueidentifier] NULL,
	[id_sp] [uniqueidentifier] NULL,
	[id_lsp] [uniqueidentifier] NULL,
	[id_nsx] [uniqueidentifier] NULL,
	[id_kc] [uniqueidentifier] NULL,
	[id_ms] [uniqueidentifier] NULL,
	[id_ca] [uniqueidentifier] NULL,
	[ma] [nvarchar](50) NULL,
	[so_luong] [int] NULL,
	[gia_ban] [money] NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
	[nguoi_tao] [nvarchar](50) NULL,
	[nguoi_sua] [nvarchar](50) NULL,
	[trang_thai] [int] NULL,
 CONSTRAINT [PK_ChiTietSanPham] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GioHang]    Script Date: 11/21/2023 12:41:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GioHang](
	[id] [uniqueidentifier] NOT NULL,
	[id_tk] [uniqueidentifier] NULL,
	[ma] [nvarchar](50) NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_thanh_toan] [datetime] NULL,
	[trang_thai] [int] NULL,
	[ten_nguoi_nhan] [nvarchar](50) NULL,
	[dia_chi] [nvarchar](50) NULL,
	[sdt] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GioHangChiTiet]    Script Date: 11/21/2023 12:41:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GioHangChiTiet](
	[id] [uniqueidentifier] NOT NULL,
	[id_gh] [uniqueidentifier] NULL,
	[id_ctsp] [uniqueidentifier] NULL,
	[so_luong] [int] NULL,
	[tong_tien] [money] NULL,
 CONSTRAINT [PK_GioHangChiTiet] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HinhThucThanhToan]    Script Date: 11/21/2023 12:41:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HinhThucThanhToan](
	[id] [uniqueidentifier] NOT NULL,
	[ma] [nvarchar](50) NULL,
	[ten] [nvarchar](50) NULL,
	[trang_thai] [int] NULL,
	[tien] [money] NULL,
	[ghi_chu] [nvarchar](max) NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HoaDon]    Script Date: 11/21/2023 12:41:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HoaDon](
	[id] [uniqueidentifier] NOT NULL,
	[id_kh] [uniqueidentifier] NULL,
	[id_tk] [uniqueidentifier] NULL,
	[dia_chi] [nvarchar](255) NULL,
	[tinh] [nvarchar](50) NULL,
	[huyen] [nvarchar](50) NULL,
	[xa] [nvarchar](50) NULL,
	[ma] [nvarchar](50) NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_thanh_toan] [datetime] NULL,
	[tong_tien] [money] NULL,
	[tong_tien_sau_khi_giam] [money] NULL,
	[trang_thai] [int] NULL,
	[ten_nguoi_nhan] [nvarchar](50) NULL,
	[sdt] [nvarchar](50) NULL,
	[ngay_du_kien_nhan] [datetime] NULL,
	[ngay_ship] [datetime] NULL,
	[tien_ship] [money] NULL,
	[ngay_sua] [datetime] NULL,
	[ngay_nhan] [datetime] NULL,
	[ghi_chu] [nvarchar](max) NULL,
	[loai_don] [int] NULL,
	[id_httt] [uniqueidentifier] NULL,
	[nguoi_tao] [nvarchar](50) NULL,
 CONSTRAINT [PK__HoaDon__3213E83F62062958] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HoaDon_KhuyenMai]    Script Date: 11/21/2023 12:41:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HoaDon_KhuyenMai](
	[id] [uniqueidentifier] NOT NULL,
	[id_hd] [uniqueidentifier] NULL,
	[id_km] [uniqueidentifier] NULL,
	[tien_giam] [money] NULL,
 CONSTRAINT [PK_HoaDon_KhuyenMai] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HoaDonChiTiet]    Script Date: 11/21/2023 12:41:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HoaDonChiTiet](
	[id] [uniqueidentifier] NOT NULL,
	[id_th] [uniqueidentifier] NULL,
	[id_hd] [uniqueidentifier] NULL,
	[id_hl] [uniqueidentifier] NULL,
	[id_ctsp] [uniqueidentifier] NULL,
	[don_gia] [money] NULL,
	[so_luong] [int] NULL,
	[so_luong_hang_doi] [int] NULL,
	[so_luong_hang_loi] [int] NULL,
	[so_luong_yeu_cau_doi] [int] NULL,
 CONSTRAINT [PK__HoaDonCh__3213E83FC480223A] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[KhachHang]    Script Date: 11/21/2023 12:41:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[KhachHang](
	[id] [uniqueidentifier] NOT NULL,
	[ma] [nvarchar](50) NULL,
	[ten] [nvarchar](50) NULL,
	[sdt] [nvarchar](50) NULL,
	[email] [nvarchar](50) NULL,
	[ngay_sinh] [datetime] NULL,
	[nguoi_tao] [nvarchar](50) NULL,
	[mat_khau] [nvarchar](50) NULL,
	[trang_thai] [int] NULL,
	[gioi_tinh] [bit] NULL,
	[anh] [varbinary](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[KhuyenMai]    Script Date: 11/21/2023 12:41:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[KhuyenMai](
	[id] [uniqueidentifier] NOT NULL,
	[ma] [nvarchar](50) NULL,
	[ten] [nvarchar](50) NULL,
	[muc_giam] [money] NULL,
	[so_tien_toi_thieu_giam] [money] NULL,
	[thoi_gian_bat_dau] [datetime] NULL,
	[thoi_gian_ket_thuc] [datetime] NULL,
	[mo_ta] [nvarchar](255) NULL,
	[trang_thai] [int] NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
	[nguoi_sua] [nvarchar](50) NULL,
	[nguoi_tao] [nvarchar](50) NULL,
	[loai_giam] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[KichCo]    Script Date: 11/21/2023 12:41:44 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[KichCo](
	[id] [uniqueidentifier] NOT NULL,
	[ma] [nvarchar](50) NULL,
	[ten] [nvarchar](50) NULL,
	[trang_thai] [int] NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
 CONSTRAINT [PK_KichCo] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LichSuHoaDon]    Script Date: 11/21/2023 12:41:44 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LichSuHoaDon](
	[id] [uniqueidentifier] NOT NULL,
	[ma] [nvarchar](50) NULL,
	[ten] [nvarchar](50) NULL,
	[nguoi_tao] [nvarchar](50) NULL,
	[trang_thai] [int] NULL,
	[ngay_tao] [datetime] NULL,
	[ghi_chu] [nvarchar](max) NULL,
	[id_hd] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LoaiSanPham]    Script Date: 11/21/2023 12:41:44 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LoaiSanPham](
	[id] [uniqueidentifier] NOT NULL,
	[ma] [nvarchar](50) NULL,
	[ten] [nvarchar](50) NULL,
	[trang_thai] [int] NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
 CONSTRAINT [PK_LoaiSanPham] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MauSac]    Script Date: 11/21/2023 12:41:44 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MauSac](
	[id] [uniqueidentifier] NOT NULL,
	[ma] [nvarchar](50) NULL,
	[ten] [nvarchar](50) NULL,
	[trang_thai] [int] NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
 CONSTRAINT [PK_MauSac] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[NhanVien]    Script Date: 11/21/2023 12:41:44 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[NhanVien](
	[id] [uniqueidentifier] NOT NULL,
	[ma] [nvarchar](50) NULL,
	[ten] [nvarchar](50) NULL,
	[sdt] [nvarchar](50) NULL,
	[email] [nvarchar](50) NULL,
	[dia_chi] [nvarchar](255) NULL,
	[ngay_sinh] [datetime] NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
	[nguoi_tao] [nvarchar](50) NULL,
	[nguoi_sua] [nvarchar](50) NULL,
	[mat_khau] [nvarchar](50) NULL,
	[vai_tro] [int] NULL,
	[trang_thai] [int] NULL,
	[anh] [varbinary](max) NULL,
	[gioi_tinh] [bit] NULL,
 CONSTRAINT [PK__NhanVien__3213E83F5548CC47] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[NhaSanXuat]    Script Date: 11/21/2023 12:41:44 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[NhaSanXuat](
	[id] [uniqueidentifier] NOT NULL,
	[ma] [nvarchar](50) NULL,
	[ten] [nvarchar](50) NULL,
	[trang_thai] [int] NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
	[dia_chi] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SanPham]    Script Date: 11/21/2023 12:41:44 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SanPham](
	[id] [uniqueidentifier] NOT NULL,
	[ma] [nvarchar](50) NULL,
	[ten] [nvarchar](50) NULL,
	[trang_thai] [int] NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
	[mo_ta] [nvarchar](max) NULL,
 CONSTRAINT [PK_SanPham] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[Anh] ADD  CONSTRAINT [DF_Anh_id]  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[ChatLieu] ADD  CONSTRAINT [DF_ChatLieu_id]  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[ChiTietSanPham] ADD  CONSTRAINT [DF_ChiTietSanPham_id]  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[GioHang] ADD  CONSTRAINT [DF_GioHang_id]  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[GioHangChiTiet] ADD  CONSTRAINT [DF_GioHangChiTiet_id]  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[HinhThucThanhToan] ADD  CONSTRAINT [DF_HinhThucThanhToan_id]  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[HoaDon] ADD  CONSTRAINT [DF_HoaDon_id]  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[HoaDon_KhuyenMai] ADD  CONSTRAINT [DF_HoaDon_KhuyenMai_id]  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[HoaDonChiTiet] ADD  CONSTRAINT [DF_HoaDonChiTiet_id]  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[KhachHang] ADD  CONSTRAINT [DF_KhachHang_id]  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[KhuyenMai] ADD  CONSTRAINT [DF_KhuyenMai_id]  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[KichCo] ADD  CONSTRAINT [DF_KichCo_id]  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[LichSuHoaDon] ADD  CONSTRAINT [DF_LichSuHoaDon_id]  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[LoaiSanPham] ADD  CONSTRAINT [DF_LoaiSanPham_id]  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[MauSac] ADD  CONSTRAINT [DF_MauSac_id]  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[NhanVien] ADD  CONSTRAINT [DF_NhanVien_id]  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[NhaSanXuat] ADD  CONSTRAINT [DF_NhaSanXuat_id]  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[SanPham] ADD  CONSTRAINT [DF_SanPham_id]  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[Anh]  WITH CHECK ADD  CONSTRAINT [FK_Anh_ChiTietSanPham] FOREIGN KEY([id_ctsp])
REFERENCES [dbo].[ChiTietSanPham] ([id])
GO
ALTER TABLE [dbo].[Anh] CHECK CONSTRAINT [FK_Anh_ChiTietSanPham]
GO
ALTER TABLE [dbo].[ChiTietSanPham]  WITH CHECK ADD  CONSTRAINT [FK_ChiTietSanPham_ChatLieu] FOREIGN KEY([id_cl])
REFERENCES [dbo].[ChatLieu] ([id])
GO
ALTER TABLE [dbo].[ChiTietSanPham] CHECK CONSTRAINT [FK_ChiTietSanPham_ChatLieu]
GO
ALTER TABLE [dbo].[ChiTietSanPham]  WITH CHECK ADD  CONSTRAINT [FK_ChiTietSanPham_KichCo] FOREIGN KEY([id_kc])
REFERENCES [dbo].[KichCo] ([id])
GO
ALTER TABLE [dbo].[ChiTietSanPham] CHECK CONSTRAINT [FK_ChiTietSanPham_KichCo]
GO
ALTER TABLE [dbo].[ChiTietSanPham]  WITH CHECK ADD  CONSTRAINT [FK_ChiTietSanPham_LoaiSanPham] FOREIGN KEY([id_lsp])
REFERENCES [dbo].[LoaiSanPham] ([id])
GO
ALTER TABLE [dbo].[ChiTietSanPham] CHECK CONSTRAINT [FK_ChiTietSanPham_LoaiSanPham]
GO
ALTER TABLE [dbo].[ChiTietSanPham]  WITH CHECK ADD  CONSTRAINT [FK_ChiTietSanPham_MauSac] FOREIGN KEY([id_ms])
REFERENCES [dbo].[MauSac] ([id])
GO
ALTER TABLE [dbo].[ChiTietSanPham] CHECK CONSTRAINT [FK_ChiTietSanPham_MauSac]
GO
ALTER TABLE [dbo].[ChiTietSanPham]  WITH CHECK ADD  CONSTRAINT [FK_ChiTietSanPham_NhaSanXuat] FOREIGN KEY([id_nsx])
REFERENCES [dbo].[NhaSanXuat] ([id])
GO
ALTER TABLE [dbo].[ChiTietSanPham] CHECK CONSTRAINT [FK_ChiTietSanPham_NhaSanXuat]
GO
ALTER TABLE [dbo].[ChiTietSanPham]  WITH CHECK ADD  CONSTRAINT [FK_ChiTietSanPham_SanPham] FOREIGN KEY([id_sp])
REFERENCES [dbo].[SanPham] ([id])
GO
ALTER TABLE [dbo].[ChiTietSanPham] CHECK CONSTRAINT [FK_ChiTietSanPham_SanPham]
GO
ALTER TABLE [dbo].[GioHang]  WITH CHECK ADD  CONSTRAINT [FK_GioHang_KhachHang] FOREIGN KEY([id_tk])
REFERENCES [dbo].[KhachHang] ([id])
GO
ALTER TABLE [dbo].[GioHang] CHECK CONSTRAINT [FK_GioHang_KhachHang]
GO
ALTER TABLE [dbo].[GioHangChiTiet]  WITH CHECK ADD  CONSTRAINT [FK_GioHangChiTiet_ChiTietSanPham] FOREIGN KEY([id_ctsp])
REFERENCES [dbo].[ChiTietSanPham] ([id])
GO
ALTER TABLE [dbo].[GioHangChiTiet] CHECK CONSTRAINT [FK_GioHangChiTiet_ChiTietSanPham]
GO
ALTER TABLE [dbo].[GioHangChiTiet]  WITH CHECK ADD  CONSTRAINT [FK_GioHangChiTiet_GioHang] FOREIGN KEY([id_gh])
REFERENCES [dbo].[GioHang] ([id])
GO
ALTER TABLE [dbo].[GioHangChiTiet] CHECK CONSTRAINT [FK_GioHangChiTiet_GioHang]
GO
ALTER TABLE [dbo].[HoaDon]  WITH CHECK ADD  CONSTRAINT [FK_HoaDon_HinhThucThanhToan] FOREIGN KEY([id_httt])
REFERENCES [dbo].[HinhThucThanhToan] ([id])
GO
ALTER TABLE [dbo].[HoaDon] CHECK CONSTRAINT [FK_HoaDon_HinhThucThanhToan]
GO
ALTER TABLE [dbo].[HoaDon]  WITH CHECK ADD  CONSTRAINT [FK_HoaDon_NhanVien] FOREIGN KEY([id_tk])
REFERENCES [dbo].[NhanVien] ([id])
GO
ALTER TABLE [dbo].[HoaDon] CHECK CONSTRAINT [FK_HoaDon_NhanVien]
GO
ALTER TABLE [dbo].[HoaDon_KhuyenMai]  WITH CHECK ADD  CONSTRAINT [FK_HoaDon_KhuyenMai_HoaDon] FOREIGN KEY([id_hd])
REFERENCES [dbo].[HoaDon] ([id])
GO
ALTER TABLE [dbo].[HoaDon_KhuyenMai] CHECK CONSTRAINT [FK_HoaDon_KhuyenMai_HoaDon]
GO
ALTER TABLE [dbo].[HoaDon_KhuyenMai]  WITH CHECK ADD  CONSTRAINT [FK_HoaDon_KhuyenMai_KhuyenMai] FOREIGN KEY([id_km])
REFERENCES [dbo].[KhuyenMai] ([id])
GO
ALTER TABLE [dbo].[HoaDon_KhuyenMai] CHECK CONSTRAINT [FK_HoaDon_KhuyenMai_KhuyenMai]
GO
ALTER TABLE [dbo].[HoaDonChiTiet]  WITH CHECK ADD  CONSTRAINT [FK_HoaDonChiTiet_ChiTietSanPham] FOREIGN KEY([id_ctsp])
REFERENCES [dbo].[ChiTietSanPham] ([id])
GO
ALTER TABLE [dbo].[HoaDonChiTiet] CHECK CONSTRAINT [FK_HoaDonChiTiet_ChiTietSanPham]
GO
ALTER TABLE [dbo].[HoaDonChiTiet]  WITH CHECK ADD  CONSTRAINT [FK_HoaDonChiTiet_HoaDon] FOREIGN KEY([id_hd])
REFERENCES [dbo].[HoaDon] ([id])
GO
ALTER TABLE [dbo].[HoaDonChiTiet] CHECK CONSTRAINT [FK_HoaDonChiTiet_HoaDon]
GO
ALTER TABLE [dbo].[LichSuHoaDon]  WITH CHECK ADD  CONSTRAINT [FK_LichSuHoaDon_HoaDon] FOREIGN KEY([id_hd])
REFERENCES [dbo].[HoaDon] ([id])
GO
ALTER TABLE [dbo].[LichSuHoaDon] CHECK CONSTRAINT [FK_LichSuHoaDon_HoaDon]
GO
