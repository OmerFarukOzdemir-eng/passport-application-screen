# Hususi Pasaport Başvuru Sistemi

Bu proje, hususi (yeşil) pasaport başvurularının online olarak yapılmasını ve yönetilmesini sağlayan bir web uygulamasıdır.

## Özellikler

- Hususi pasaport başvuru formu
- Başvuru durumu takibi
- Yetkili admin paneli
- Başvuru onaylama/reddetme sistemi

## Teknolojiler

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Veritabanı: MySQL

## Kurulum

1. Projeyi klonlayın:
```bash
git clone [repo-url]
cd [proje-klasörü]
```

2. Gerekli paketleri yükleyin:
```bash
npm install
```

3. MySQL veritabanını oluşturun:
- MySQL sunucunuzu başlatın
- `database.sql` dosyasındaki komutları MySQL'de çalıştırın

4. `.env` dosyası oluşturun:
```
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=passport_db
```

5. Uygulamayı başlatın:
```bash
npm start
```

## Kullanım

- Başvuru formu: `http://localhost:3000`
- Admin paneli: `http://localhost:3000/admin.html`

## Geliştirme

Projeyi geliştirmek için:

1. Yeni bir branch oluşturun
2. Değişikliklerinizi yapın
3. Test edin
4. Pull request gönderin

## Lisans

Projeyi çalıştırmak için:
MySQL'i yükleyin ve çalıştırın
database.sql dosyasındaki komutları MySQL'de çalıştırın
3. Proje klasöründe terminal açın
npm install komutu ile bağımlılıkları yükleyin
npm start komutu ile uygulamayı başlatın
Uygulama başladıktan sonra:
Başvuru formu için: http://localhost:3000
Admin paneli için: http://localhost:3000/admin.html adresini ziyaret edebilirsiniz.