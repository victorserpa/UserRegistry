-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: cadastrodeusuarios
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20230105041443-create-users.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `login` varchar(255) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `birthday` date NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  `password_hash` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `login` (`login`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin','(47) 98894-4940','admin@test.com','2020-01-01',1,'$2a$08$geUakYT25Pjr6TOMYQspz.pTQQ1WvJG7YuyF28xSruGmb1dHGtpBO','2023-01-05 04:22:40','2023-01-05 04:22:40'),(8,'karla_axt','Karla Axt Krummenauer','(47) 99762-4834','karlaaxt87@gmail.com','1987-05-03',0,'$2a$08$WbBfEoRJM4N8XHUPQC9E8u73PCGjaobAedBPPbUHVOh4CB62.9FYe','2023-01-09 18:02:37','2023-01-09 18:02:37'),(18,'carlos_rd','Carlos Eduardo','(84) 96846-4654','carlos@szsolucoes.com.br','2002-04-13',0,'$2a$08$4tQ3h95lIID4vyBdr0xGnO4qVC9Av.mZOBrWy/fj6oicl.5HO0Tly','2023-01-13 17:16:31','2023-01-13 17:16:31'),(19,'daniel_sz','Daniel Fernando Gonçalves','(84) 68468-7654','daniel@szsolucoes.com','1993-06-28',0,'$2a$08$OXT455fKZXi0mnfrXHwqi.uefS/GYgYAIqB40vGiBqWR0JG9Dni/e','2023-01-15 15:54:25','2023-01-15 15:54:25'),(20,'pedro','Pedro Duarte','(48) 76256-4894','pedro@gmail.com.br','2020-01-01',0,'$2a$08$0kZwj1Ib.AkY3hdby5oJa.vCWr2ypV2Mwx5Nhi7eXJSr2kakF.KvK','2023-01-20 01:17:55','2023-01-20 01:17:55'),(21,'airton','Airton Rocha','(48) 76256-4894','airton@gmail.com','1970-01-07',0,'$2a$08$6V8ftWFKGEjS2Mdn6k8Im.17.QuF36dCREg/77Fiu9JQKMYrM.uQ2','2023-01-20 01:21:16','2023-01-21 03:34:58'),(22,'cristiano','Cristiano','(47) 46518-4861','cristiano@szsolucoes.com.br','1990-01-01',0,'$2a$08$N8WfYGCKe94GGxLlDZfpSeeurAx03rDkfZTzUv51q.ciRzGZezD.a','2023-01-20 01:23:00','2023-01-20 01:23:00'),(23,'wagner','Wagner Ribas','(48) 97543-5487','wagner@szsolucoes.com.br','1990-01-01',0,'$2a$08$zmfkvzANrma2/EO0N8Wx9u6Y0O.D2O48kiJO6CBkL5vZWzGKBgEzK','2023-01-20 01:24:24','2023-01-20 01:24:24'),(24,'jmoraes','Jeferson Moraes','(47) 94651-5871','jmoraes@szsolucoes.com.br','1900-01-01',0,'$2a$08$UNvOM.rRtwmsAQfpdDwzdOJPba69d15Fu4VeSn18ovGJKdVwY2iky','2023-01-21 04:07:51','2023-01-21 04:07:51');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'cadastrodeusuarios'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-22 13:47:58
