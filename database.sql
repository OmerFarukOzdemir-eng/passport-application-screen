-- Veritabanını oluştur
CREATE DATABASE IF NOT EXISTS passport_db;
USE passport_db;

-- Başvurular tablosu
CREATE TABLE IF NOT EXISTS applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    passport_type VARCHAR(50) NOT NULL,
    tc_no VARCHAR(11) NOT NULL,
    name VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    title VARCHAR(100) NOT NULL,
    position VARCHAR(100) NOT NULL,
    institution_id VARCHAR(50) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL,
    registry_office VARCHAR(200) NOT NULL,
    child_count INT DEFAULT 0,
    status VARCHAR(20) DEFAULT 'Beklemede',
    application_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY unique_tc (tc_no)
); 