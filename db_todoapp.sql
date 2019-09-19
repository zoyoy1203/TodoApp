/*
Navicat MySQL Data Transfer

Source Server         : link
Source Server Version : 80016
Source Host           : localhost:3306
Source Database       : db_todoapp

Target Server Type    : MYSQL
Target Server Version : 80016
File Encoding         : 65001

Date: 2019-09-19 16:43:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for todo_text
-- ----------------------------
DROP TABLE IF EXISTS `todo_text`;
CREATE TABLE `todo_text` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(255) NOT NULL,
  `check` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of todo_text
-- ----------------------------
INSERT INTO `todo_text` VALUES ('2', 'JavaScript设计模式', '0');
INSERT INTO `todo_text` VALUES ('8', '好好学习', '0');
INSERT INTO `todo_text` VALUES ('10', '呵呵呵', '1');
INSERT INTO `todo_text` VALUES ('11', '高性能MySQL', '1');
INSERT INTO `todo_text` VALUES ('12', '大功告成！！！啦啦啦啦', '0');
