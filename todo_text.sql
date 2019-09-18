/*
Navicat MySQL Data Transfer

Source Server         : link
Source Server Version : 80016
Source Host           : localhost:3306
Source Database       : db_todoapp

Target Server Type    : MYSQL
Target Server Version : 80016
File Encoding         : 65001

Date: 2019-09-19 00:56:34
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for todo_text
-- ----------------------------
DROP TABLE IF EXISTS `todo_text`;
CREATE TABLE `todo_text` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of todo_text
-- ----------------------------
INSERT INTO `todo_text` VALUES ('1', '高级程序设计啦啦啦啦');
INSERT INTO `todo_text` VALUES ('2', 'JavaScript设计模式');
INSERT INTO `todo_text` VALUES ('3', '高性能MySQL');
INSERT INTO `todo_text` VALUES ('8', '好好学习');
INSERT INTO `todo_text` VALUES ('9', '哈哈哈写完了我');
