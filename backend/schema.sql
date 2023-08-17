-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema platform
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema platform
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `platform` DEFAULT CHARACTER SET utf8mb3 ;
USE `platform` ;

-- -----------------------------------------------------
-- Table `platform`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `platform`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `imageUrl` LONGTEXT NULL DEFAULT NULL,
  `CHAR` LONGTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`idusers`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `platform`.`projects`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `platform`.`projects` (
  `idprojects` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` LONGTEXT NULL DEFAULT NULL,
  `viewlink` LONGTEXT NOT NULL,
  `githubLinkRepo` LONGTEXT NOT NULL,
  `sreenshotLink` LONGTEXT NOT NULL,
  `owner` INT NOT NULL,
  PRIMARY KEY (`idprojects`, `owner`),
  INDEX `fk_projects_users_idx` (`owner` ASC) VISIBLE,
  CONSTRAINT `fk_projects_users`
    FOREIGN KEY (`owner`)
    REFERENCES `platform`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
