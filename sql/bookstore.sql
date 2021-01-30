-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th1 30, 2021 lúc 04:05 AM
-- Phiên bản máy phục vụ: 10.4.13-MariaDB
-- Phiên bản PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `bookstore`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `idProducts` int(11) NOT NULL COMMENT 'id Sản Phẩm',
  `nameProducts` varchar(50) NOT NULL COMMENT 'Name Sản Phẩm',
  `cost` float NOT NULL COMMENT 'Giảm giá',
  `price` float NOT NULL COMMENT 'Giá gốc',
  `description` varchar(255) NOT NULL COMMENT 'Miêu Tả Sản Phẩm',
  `images` varchar(255) NOT NULL COMMENT 'Hình Sản Phẩm'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`idProducts`, `nameProducts`, `cost`, `price`, `description`, `images`) VALUES
(1, 'Freefall', 9.99, 9.31, 'Red Thread (special edition) coming soon; Special Edition - 12/12 random lucky money, coming soon postcard, Pharm bookmark - freshman, member of Thai dessert club. Under his hand, any simple ingredient can turn into a delicious dish. Dean - the third year', 's1.jpg'),
(2, 'Darknet', 19.99, 18.23, 'In the fantasy future world, to avoid the danger of being destroyed, a group of robots together flee, running to a forbidden area called the Tomb of the Dead Sea Emperor. In the last minutes of the robot\'s life, Muc Can - the only person on the planet, ex', 's2.jpg'),
(3, 'Holy Ghosts', 14.99, 13.37, 'Other things I have, but most likely you won\'t be bothered to keep an eye on it, just a little bit of sincerity ... If you don\'t accept it, that\'s fine. I receive. I got it, this whole life of you, samsara, samsara, and i won\'t let go again. Even if one d', 's3.jpg'),
(4, 'After', 21.99, 20.31, 'Priest is one of the authors of the great rank of Tan Giang. Each of her works is invested in research into meticulous background, reasonable details, attractive opening, and humorous storytelling. Priest has never repeated a subject for two works, showin', 's4.jpg'),
(5, 'Clever Lands', 19.99, 18.31, 'Over the years, my nephew miss you so much  is a book written from the perspective of Puma - a dog who has been friends for 14 years with Jiu Bao, tells about the author\'s childhood: from a man who is scared of dogs to the self-proclaimed second brother o', 's5.jpg'),
(6, 'Red Queen', 29.99, 28.26, 'In addition to the humorous situations between the second brother and Puma, the book also contains memories full of laughter, happiness, and grief about the 6-year relationship with the Little Dragon Girl - who has been attached to Cuu Ba Dao during the p', 's6.jpg'),
(7, 'Bash and Lucy', 27.99, 26.49, 'Behind each person lies a secret. No matter how hard you try to hide it, those deeply hidden things will be exposed to light one day. After all, who is most deeply hurt? Are we or whom we try to hide the secret? If you are wondering and have yet to find t', 's7.jpg'),
(8, 'Be Well Be', 15.99, 14.31, 'Hiromasa Hida used to be one of the top skiers in Japan, representing the country in many international tournaments; His daughter Kazami is also a snowboarder. When Kazami was two years old, his wife, Kazami\'s mother, committed suicide. Hida was in the in', 's8.jpg'),
(9, 'Carbonel', 39.99, 29.72, 'Some time later, with the desire to find a link between the genetics and the skills gained by the skiers during a training session, Kazami\'s team looked forward to studying the genome of both the father. Both girls should have offered to invite the father', 's9.jpg'),
(10, 'Nightshade', 19.99, 18.31, 'Hida does his own investigation to answer these questions, and he finds out Kazami\'s biological father. But revealing this horrifying truth to Kazami was always something he pondered over. Between the lines of telling the truth or continuing to conceal Ka', 's10.jpg'),
(11, 'Kenjo', 39.99, 38.71, 'With a sharp ghostly voice, a rushing rhythm like living in thrilling detective movies, Higashino Keigo has led readers from surprise to surprise, step by step removing important bottlenecks. and pushed the storyline to the climax.', 's11.jpg'),
(12, 'Les Des Animaux', 19.99, 18.31, 'Attractive, haunting, and full of humanity, this book deserves to be the novel most devoted by the author Higashino Keigo in his literary career that will surely satisfy readers. Do not hesitate any longer without immediately owning the top book of the be', 's12.jpg'),
(13, 'The Body Finder', 69.99, 68.54, 'To get rid of a debt, Masaya took advantage of the terrible earthquake to kill his uncle and then staged an accident. But all cannot pass the eyes of Mifuyu, the mysterious girl in the neighborhood. Carrying Masaya\'s secret, Mifuyu traveled with him to To', 's13.jpg'),
(14, 'Red Thread', 49.99, 48.39, 'But in the meeting place is a series of tragedies, where the shadow of past crimes is like a pool of oil, forever never wiped out, more and more widespread. Mystery connects mysteries, everyone who approaches Mifuyu is unfortunate, everyone who touches he', 's14.jpg'),
(15, 'The Great Boss', 39.99, 38.47, 'Writer Keigo Higashino returns with a work on social psychology and medicine full of anxiety and reflection. There is still curiosity and suspense but adds to the profound psychosocial happenings about the boundary between life and death.', 's15.jpg'),
(16, 'Over The Years', 79.99, 78.12, 'The story revolves around a couple planning to divorce after their daughter Mizuko enters primary school, but bad news comes, an unfortunate accident hits her at the swimming pool. But the truth is even more painful when their only daughter is brain dead ', 's16.jpg'),
(17, 'Order A Premium Love', 29.99, 28.31, 'Her heart was still beating and her own legal constraints prevented any doctor from asserting that she was dead. Do they force the choice of continuing to care for the daughter who has fallen into a vegetative state or letting go of, accepting organ donat', 's17.jpg'),
(18, 'Amidst Snow Storm', 49.99, 48.39, 'The book is also like a reminder of family affection, about the hearts of parents for their children. Family is a place that never ceases to love and never gives up. Obviously, only love can make people worry so much, wanting to do their best to save the ', 's18.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_cmt`
--

CREATE TABLE `product_cmt` (
  `idProd_cmt` int(11) NOT NULL COMMENT 'id Sản Phẩm Bình Luận',
  `idProduct` int(11) NOT NULL COMMENT 'id Sản Phẩm',
  `idUser` int(11) NOT NULL COMMENT 'id Khách Hàng',
  `content` varchar(255) NOT NULL COMMENT 'Nội Dung',
  `created` datetime NOT NULL COMMENT 'Thời Gian Bình Luận',
  `star` int(5) NOT NULL COMMENT 'Số Sao Đánh Giá'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `idUser` int(11) NOT NULL COMMENT 'id Khách Hàng',
  `username` varchar(50) NOT NULL COMMENT 'Tên Khách Hàng',
  `password` varchar(50) NOT NULL COMMENT 'Mật Khẩu',
  `email` varchar(50) NOT NULL COMMENT 'Email',
  `phone` int(11) NOT NULL COMMENT 'Số Điện Thoại',
  `birthday` date NOT NULL COMMENT 'Ngày Sinh',
  `fullname` varchar(255) NOT NULL COMMENT 'Tên Đầy Đủ',
  `address` varchar(255) NOT NULL COMMENT 'Địa CHỉ'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`idProducts`);

--
-- Chỉ mục cho bảng `product_cmt`
--
ALTER TABLE `product_cmt`
  ADD PRIMARY KEY (`idProd_cmt`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `idProducts` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id Sản Phẩm', AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT cho bảng `product_cmt`
--
ALTER TABLE `product_cmt`
  MODIFY `idProd_cmt` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id Sản Phẩm Bình Luận';

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id Khách Hàng';
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
