fx_version 'cerulean'
game 'gta5'

author 'Zein'
description 'Vision Roleplay Loading Screen'
version '3.0.0'

-- Yükleme Ekranı Ayarları
loadscreen 'index.html'
loadscreen_cursor 'yes'          -- Mouse'u açar
loadscreen_manual_shutdown 'yes' -- Ekranın ne zaman kapanacağını biz belirleriz

-- Dosyalar (Yıldız (*) koyarak klasördeki her şeyi dahil ettik)
files {
    'index.html',
    'style.css',
    'script.js',
    'config.js',
    'assets/**/*' -- Assets klasörü içindeki her şeyi (müzik, resim, video) otomatik alır
}

-- Kapanma Mantığını Çalıştıran Dosya
client_script 'client.lua'