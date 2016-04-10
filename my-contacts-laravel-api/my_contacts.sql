-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 10, 2016 at 08:44 AM
-- Server version: 5.5.47-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `my_contacts`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_contacts`
--

CREATE TABLE IF NOT EXISTS `tbl_contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `contact_no` varchar(10) DEFAULT NULL,
  `address` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `tbl_contacts`
--

INSERT INTO `tbl_contacts` (`id`, `name`, `contact_no`, `address`, `email`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Sahan', '0711332607', 'Gampaha', 'csahanperera@gmail.com', 1, '2016-04-10 07:19:28', '2016-04-10 07:19:28'),
(3, 'Madhuranga', '0722247288', 'Kirulapone', 'lmaduranga@gmail.com', 1, '2016-04-09 06:05:06', '2016-04-09 06:05:06'),
(4, 'Pradeep', '0722247261', 'Monaragala', 'pradeep@gmail.com', 1, '2016-04-10 06:16:14', '2016-04-10 06:16:14'),
(5, 'Ashfan', '0722247254', 'Colombo', 'ashfan@gmail.com', 1, '2016-04-10 06:15:21', '2016-04-10 06:15:21'),
(6, 'Nadeesha', '0722247277', 'Kalaniya', 'nadeesha@gmail.com', 1, '2016-04-10 06:15:33', '2016-04-10 06:15:33');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
