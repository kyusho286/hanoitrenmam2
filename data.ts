import { Dish, MapPoint, Story } from './types';

// Helper to generate consistent, high-quality images based on prompts
// Added parameters for aspect ratio and seeds for consistency
const getDishImage = (prompt: string, seed: number) => 
  `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt + ", photorealistic, 8k, food photography, soft lighting, hanoi style")}?width=600&height=600&nologo=true&seed=${seed}`;

const getStoryImage = (prompt: string) => 
  `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt + ", tone nhẹ, có sương mờ, ánh sáng tự nhiên, phong cách Hà Nội hoài cổ")}?width=800&height=450&nologo=true`;

export const dishes: Dish[] = [
  {
    id: 1,
    name: "Phở Bò",
    shortDesc: "Quốc hồn quốc túy, hương vị thanh tao.",
    fullDesc: "Phở bò Hà Nội nổi tiếng với nước dùng trong và ngọt thanh, được ninh từ xương bò cùng các loại gia vị như quế, hồi, gừng nướng. Bánh phở mềm dai, thịt bò thái mỏng chần tái hoặc chín, thêm chút hành lá và rau thơm tạo nên hương vị khó quên.",
    history: "Xuất hiện từ đầu thế kỷ 20, Phở đã trở thành biểu tượng ẩm thực Việt Nam, bắt nguồn từ những gánh hàng rong phố cổ.",
    location: "Phở Lý Quốc Sư, Phở Thìn Lò Đúc, Phở Bát Đàn.",
    image: "https://i.pinimg.com/736x/4a/67/e2/4a67e2d1c0e6be4f089647d40ced73ed.jpg"
  },
  {
    id: 2,
    name: "Bún Chả",
    shortDesc: "Thịt nướng than hoa thơm lừng góc phố.",
    fullDesc: "Bún chả hấp dẫn bởi những miếng chả thịt lợn nướng cháy cạnh trên than hoa, thả trong bát nước chấm chua ngọt có đu đủ xanh giòn sần sật. Ăn kèm bún rối và rổ rau sống tươi mát.",
    history: "Món ăn dân dã có từ lâu đời của người Hà Nội, từng được Tổng thống Obama thưởng thức khi ghé thăm Việt Nam.",
    location: "Bún chả Hương Liên, Bún chả Đắc Kim, Bún chả Cửa Đông.",
    image: "https://i.pinimg.com/1200x/0e/2f/dd/0e2fdd26cd255e80de81188654df607f.jpg"
  },
  {
    id: 3,
    name: "Bún Thang",
    shortDesc: "Bức tranh ẩm thực cầu kỳ và tinh tế.",
    fullDesc: "Được ví như 'bông hoa ngũ sắc' của ẩm thực Hà Thành. Bún thang đòi hỏi sự tỉ mỉ với nguyên liệu thái chỉ: giò lụa, trứng tráng, thịt gà, tôm khô... Nước dùng phải thật trong và ngọt đậm đà.",
    history: "Món ăn thường được làm vào dịp Tết để tận dụng các nguyên liệu còn dư, thể hiện sự khéo léo của phụ nữ Tràng An.",
    location: "Bún thang Cầu Gỗ, Bún thang Hàng Hòm.",
    image: "https://i.pinimg.com/736x/94/ab/06/94ab06d0132d8733bd309512ba0807f2.jpg"
  },
  {
    id: 4,
    name: "Bún Ốc",
    shortDesc: "Vị chua thanh, giòn sần sật đậm đà.",
    fullDesc: "Bún ốc Hà Nội mê hoặc thực khách bởi nước dùng chua thanh từ dấm bỗng, vị cay của ớt chưng và những con ốc béo ngậy, giòn sần sật. Có thể ăn bún ốc nóng hoặc bún ốc nguội.",
    history: "Món quà vặt dân dã xuất hiện khắp các ngõ ngách Hà Nội, gắn liền với những gánh hàng rong xưa.",
    location: "Bún ốc cô Huệ, Bún ốc sườn Hai Bà Trưng.",
    image: "https://i.pinimg.com/736x/89/52/5b/89525b295a5189fba31ad14e1e6cc6f7.jpg"
  },
  {
    id: 5,
    name: "Chả Cá Lã Vọng",
    shortDesc: "Đặc sản nức tiếng đất Kinh Kỳ.",
    fullDesc: "Cá lăng tươi được tẩm ướp gia vị, nướng sơ rồi đảo trên chảo mỡ nóng cùng thì là, hành hoa ngay tại bàn. Ăn kèm bún, bánh đa nướng, lạc rang và mắm tôm pha chanh ớt.",
    history: "Ra đời từ thời Pháp thuộc do gia đình họ Đoàn sáng tạo tại phố Chả Cá, trở thành niềm tự hào của ẩm thực Hà Nội.",
    location: "Chả cá Lã Vọng (phố Chả Cá), Chả cá Thăng Long.",
    image: "https://i.pinimg.com/736x/e9/63/3d/e9633dd1ad0151cada0b798019dce362.jpg"
  },
  {
    id: 6,
    name: "Nem Rán",
    shortDesc: "Giòn rụm, vàng ươm, đậm đà hương vị.",
    fullDesc: "Nem rán (chả giò) với lớp vỏ bánh đa nem giòn tan, nhân bên trong là sự hòa quyện của thịt lợn xay, mộc nhĩ, miến, trứng, cà rốt... Chấm cùng nước mắm chua ngọt.",
    history: "Món ăn không thể thiếu trong mâm cỗ truyền thống của người miền Bắc, tượng trưng cho sự sum vầy.",
    location: "Quán Nem (Giảng Võ), Các quán bún chả thường có nem rán ngon.",
    image: "https://i.pinimg.com/736x/50/b0/12/50b012c9e5fe9782681b1d2b37e1d95b.jpg"
  },
  {
    id: 7,
    name: "Bánh Cốm",
    shortDesc: "Hương cốm mới gói trọn mùa thu.",
    fullDesc: "Bánh cốm dẻo thơm màu xanh ngọc, nhân đậu xanh ngọt bùi, vỏ ngoài thơm hương cốm nếp cái hoa vàng. Thường được dùng trong các dịp cưới hỏi.",
    history: "Đặc sản phố Hàng Than, gắn liền với làng Vòng - nơi sản xuất cốm nổi tiếng nhất Hà Nội.",
    location: "Bánh cốm Nguyên Ninh (Hàng Than).",
    image: "https://i.pinimg.com/736x/10/32/2b/10322b5cdd8b563956a3b668e5e81f52.jpg"
  },
  {
    id: 8,
    name: "Bánh Tôm Hồ Tây",
    shortDesc: "Vàng giòn bên sóng nước Hồ Tây.",
    fullDesc: "Tôm nước ngọt bọc bột chiên vàng rộm, ăn kèm rau sống và nước chấm chua ngọt. Vừa thưởng thức bánh tôm vừa ngắm cảnh Hồ Tây là trải nghiệm thú vị.",
    history: "Phổ biến từ những năm 1930, món ăn gắn liền với ký ức của nhiều thế hệ người Hà Nội khi đi chơi Hồ Tây.",
    location: "Nhà hàng Bánh Tôm Hồ Tây (đường Thanh Niên).",
    image: "https://i.pinimg.com/736x/1a/e1/2a/1ae12ac309e379c61b351d30068c3c74.jpg"
  },
  {
    id: 9,
    name: "Bún Riêu Cua",
    shortDesc: "Vị chua dịu, gạch cua béo ngậy.",
    fullDesc: "Bát bún riêu đầy đặn với gạch cua đồng đóng tảng, đậu phụ rán, cà chua đỏ au và nước dùng chua dịu từ dấm bỗng. Thường ăn kèm rau sống thái nhỏ.",
    history: "Món ăn bình dân giải nhiệt mùa hè, nay đã được nâng tầm với thêm thịt bò, giò tai.",
    location: "Bún riêu Hàng Bạc, Bún riêu Nguyễn Siêu.",
    image: "https://i.pinimg.com/736x/ae/23/71/ae2371a5cf3c62eab957291d5b4aa98f.jpg"
  },
  {
    id: 10,
    name: "Xôi Xéo",
    shortDesc: "Gói xôi vàng ươm, hành phi thơm nức.",
    fullDesc: "Xôi nếp cái hoa vàng nấu với nước nghệ, bên trên phủ lớp đậu xanh thái lát mỏng và hành phi vàng ruộm, rưới thêm chút mỡ gà béo ngậy.",
    history: "Món ăn sáng quen thuộc gói trong lá sen hoặc lá chuối, mang đậm hồn quê giữa phố thị.",
    location: "Xôi Yến, Xôi xéo Hàng Gai.",
    image: "https://i.pinimg.com/736x/9a/da/33/9ada33892b17c64f4a4dd8870262ab5d.jpg"
  },
  {
    id: 11,
    name: "Bánh Mì Pate",
    shortDesc: "Giòn tan, béo ngậy vị pate gan.",
    fullDesc: "Bánh mì nướng giòn, phết lớp pate gan heo béo ngậy, thêm chút ruốc, chả lụa, dưa chuột và tương ớt. Đơn giản nhưng gây nghiện.",
    history: "Sự giao thoa ẩm thực Pháp - Việt, biến tấu thành món ăn đường phố tiện lợi trứ danh.",
    location: "Bánh mì Lãn Ông, Bánh mì Phố Huế.",
    image: "https://i.pinimg.com/736x/1d/8b/58/1d8b588b8a1c4e01b51e39fdab701ce9.jpg"
  },
  {
    id: 12,
    name: "Bún Mọc",
    shortDesc: "Thanh đạm, nhẹ nhàng cho bữa sáng.",
    fullDesc: "Bát bún với những viên mọc giòn dai làm từ giò sống và nấm hương, nước dùng ninh từ xương ngọt lịm, thêm vài lát dọc mùng xanh mướt.",
    history: "Có nguồn gốc từ làng Mọc (Nhân Chính), nay đã phổ biến khắp các phố phường Hà Nội.",
    location: "Bún mọc Hàng Lược, Bún mọc Chân Cầm.",
    image: "https://i.pinimg.com/1200x/a0/29/37/a02937bff421d1f46d74c737de3aacd7.jpg"
  }
];

export const mapPoints: MapPoint[] = [
  { 
    id: 1, 
    name: "Hoàn Kiếm", 
    top: "50%", 
    left: "55%", 
    description: "Trái tim của Hà Nội, nơi hội tụ tinh hoa ẩm thực Tràng An với những con phố cổ ngàn năm.",
    specialties: ["Phở Bò", "Nộm Bò Khô", "Kem Tràng Tiền", "Bún Đậu"], 
    famousShops: ["Phở Bát Đàn", "Nộm Hồ Gươm"],
    iframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.096472252199!2d105.85017631533215!3d21.028825085998313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zUXXhuq1uIEhvw6BuIEtp4bq_bSwgSMOgIE7huqFpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1652758123123!5m2!1svi!2s"
  },
  { 
    id: 2, 
    name: "Ba Đình", 
    top: "40%", 
    left: "35%", 
    description: "Khu vực trung tâm chính trị với không gian thoáng đãng, nhiều món ngon gia truyền lâu đời.",
    specialties: ["Phở Cuốn", "Bánh Tôm", "Bún Chả"], 
    famousShops: ["Phở Cuốn Ngũ Xã", "Bún Chả Ngọc Khánh"],
    iframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.924278635848!2d105.8194541153322!3d21.033221985995874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0d6e603741%3A0x208a848932ac2109!2zQmEgxJDDrG5oLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1652758123123!5m2!1svi!2s"
  },
  { 
    id: 3, 
    name: "Tây Hồ", 
    top: "20%", 
    left: "40%", 
    description: "Vùng đất lãng mạn ven hồ với các món ăn chơi nổi tiếng, không gian rộng mở đón gió.",
    specialties: ["Bánh Tôm Hồ Tây", "Ốc Nóng", "Bún Ốc Phủ Tây Hồ"], 
    famousShops: ["Bánh Tôm Phủ Tây Hồ", "Ốc Bà Già"],
    iframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.014264387569!2d105.80287751533288!3d21.056455585983412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aaf0e591786f%3A0x633517173e6d110!2zVMOheSBI4buTLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1652758123123!5m2!1svi!2s"
  },
  { 
    id: 4, 
    name: "Đống Đa - Hai Bà Trưng", 
    top: "65%", 
    left: "50%", 
    description: "Khu vực sầm uất, nơi giao thoa của ẩm thực đường phố hiện đại và truyền thống.",
    specialties: ["Bún Dọc Mùng", "Cháo Sườn", "Miến Lươn", "Bánh Cuốn"], 
    famousShops: ["Miến Lươn Đông Thịnh", "Bánh Cuốn Bà Hoành"],
    iframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6366810230235!2d105.84126351533165!3d21.015036186005726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab8a92025779%3A0x46b73528615b306e!2zSGFpIELDoCBUcsawbmcsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1652758123123!5m2!1svi!2s"
  },
];

export const stories: Story[] = [
  {
    id: 1,
    title: "Lịch sử ẩm thực Hà Nội",
    excerpt: "Hơn 1000 năm văn hiến đã hun đúc nên một nền ẩm thực tinh tế...",
    content: "Ẩm thực Hà Nội không chỉ là chuyện ăn uống, mà là nghệ thuật. Từ thời Lý, Trần, Lê, các món ăn cung đình đã ảnh hưởng đến cách chế biến của người dân. Người Hà Nội sành ăn, ăn hương ăn hoa, chú trọng vào sự thanh cảnh, gia vị vừa vặn, không quá cay, không quá ngọt, giữ được cái hồn nguyên bản của nguyên liệu.",
    image: "https://pasgo.vn/Upload/anh-chi-tiet/tiem-an-ha-noi-xua-de-la-thanh-10-normal-612593321555.webp"
  },
  {
    id: 2,
    title: "Những người giữ nghề",
    excerpt: "Giữa phố thị ồn ào, vẫn còn những nghệ nhân âm thầm giữ lửa...",
    content: "Có những gánh hàng rong đã tồn tại 3 đời người. Bà cụ bán xôi xéo góc phố cổ, ông cụ bán tào phớ bằng xe đạp cũ... Họ không chỉ bán đồ ăn, họ bán cả ký ức. Sự kiên trì giữ gìn công thức gia truyền chính là bí mật khiến ẩm thực Hà Nội sống mãi với thời gian.",
    image: "https://resource.kinhtedothi.vn/2021/12/25/02-pho-hang-chinh.jpg"
  },
  {
    id: 3,
    title: "Câu chuyện bát Phở",
    excerpt: "Phở không chỉ là món ăn, phở là nỗi nhớ của người đi xa...",
    content: "Nhà văn Thạch Lam từng viết rất hay về Phở trong 'Hà Nội băm sáu phố phường'. Phở gánh ngày xưa, tiếng rao đêm, mùi hồi quế lan tỏa trong sương sớm. Phở bò chín, nạm gầu, tái lăn... mỗi loại một vẻ nhưng đều chung một linh hồn là nước dùng xương ninh kỹ.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8a21at4pNYlRTthq6nloucCE5OX1AxwJbBg&s"
  },
  {
    id: 4,
    title: "Mùa nào thức nấy",
    excerpt: "Tháng ba ăn bánh trôi, mùa thu ăn cốm, đông về ăn ngô nướng...",
    content: "Người Hà Nội ăn theo mùa. Mùa xuân có bún thang, mùa hè có sấu dầm, canh rau muống, mùa thu có cốm làng Vòng, hồng ngâm, mùa đông có ngô khoai nướng, bánh trôi tàu nóng hổi. Sự nhạy cảm với thời tiết tạo nên nét duyên dáng trong ẩm thực nơi đây.",
    image: "https://cdnv2.tgdd.vn/bhx-static/bhx/News/Images/2024/09/17/1570179/image-55_202409171401265551.jpg"
  },
  {
    id: 5,
    title: "Văn hoá ngồi vỉa hè",
    excerpt: "Cái thú ngồi ghế nhựa thấp, ngắm dòng người qua lại...",
    content: "Không cần bàn ghế sang trọng, chỉ cần vài chiếc ghế nhựa xanh đỏ nơi góc phố, vỉa hè là đủ cho một bữa ngon. Văn hóa vỉa hè tạo nên sự gần gũi, xoá nhòa khoảng cách giàu nghèo. Tiếng cười nói, tiếng xe cộ, tiếng bát đũa lanh canh tạo nên bản giao hưởng phố phường.",
    image: "https://grandworld.vinhomes.vn/wp-content/uploads/2023/12/pho-ta-hien-1.jpg"
  },
  {
    id: 6,
    title: "Vị thanh của Hà Nội",
    excerpt: "Tại sao đồ ăn Hà Nội lại có vị thanh nhẹ nhàng đến thế?",
    content: "Khác với miền Trung cay nồng hay miền Nam ngọt đậm, vị Hà Nội là sự cân bằng. Nước dùng trong, vị ngọt từ xương chứ không phải mì chính. Sự thanh nhã ấy đến từ tính cách người Tràng An: nhẹ nhàng, ý nhị và tinh tế.",
    image: "https://i.pinimg.com/1200x/a0/29/37/a02937bff421d1f46d74c737de3aacd7.jpg"
  }
];