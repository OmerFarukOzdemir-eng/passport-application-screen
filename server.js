const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// MySQL Bağlantısı
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'passport_db'
});

db.connect((err) => {
    if (err) {
        console.error('MySQL bağlantı hatası:', err);
        return;
    }
    console.log('MySQL bağlantısı başarılı');
});

// Pasaport başvurusu oluşturma
app.post('/api/applications', (req, res) => {
    const {
        passportType,
        tcNo,
        name,
        surname,
        title,
        position,
        institutionId,
        phone,
        email,
        registryOffice,
        childCount
    } = req.body;

    const query = `INSERT INTO applications 
        (passport_type, tc_no, name, surname, title, position, institution_id, 
        phone, email, registry_office, child_count, status, application_date) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'Beklemede', NOW())`;

    db.query(
        query,
        [passportType, tcNo, name, surname, title, position, institutionId,
        phone, email, registryOffice, childCount],
        (err, result) => {
            if (err) {
                console.error('Başvuru kayıt hatası:', err);
                res.status(500).json({ error: 'Başvuru kaydedilemedi' });
                return;
            }
            res.status(201).json({ 
                message: 'Başvuru başarıyla kaydedildi',
                applicationId: result.insertId 
            });
        }
    );
});

// Tüm başvuruları getirme
app.get('/api/applications', (req, res) => {
    const query = 'SELECT * FROM applications ORDER BY application_date DESC';
    
    db.query(query, (err, results) => {
        if (err) {
            console.error('Başvuru listesi hatası:', err);
            res.status(500).json({ error: 'Başvurular alınamadı' });
            return;
        }
        res.json(results);
    });
});

// Başvuru durumunu güncelleme
app.put('/api/applications/:id/status', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const query = 'UPDATE applications SET status = ? WHERE id = ?';
    
    db.query(query, [status, id], (err, result) => {
        if (err) {
            console.error('Durum güncelleme hatası:', err);
            res.status(500).json({ error: 'Durum güncellenemedi' });
            return;
        }
        res.json({ message: 'Başvuru durumu güncellendi' });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor`);
}); 