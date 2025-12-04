const config = {
    // --- LOGO ve İSİM AYARLARI ---
    serverName: " ", // Boş bırakıldı
    brandLogo: "assets/logo.png", // Sol üstteki logo

    // ARKA PLAN
    background: {
        type: "image", // "video" veya "image"
        videoFile: "assets/bg.webm",
        interval: 3500, // Resim geçiş hızı
        images: [
            "assets/images/bg1.png",
            "assets/images/bg2.png",
            "assets/images/bg3.png"
        ]
    },

    // MÜZİK ÇALAR
    musicVolume: 0.15, // Varsayılan ses
    musicList: [
        { 
            title: "Mayın Tarlası", 
            artist: "Şebnem Ferah", 
            file: "assets/music/song1.mp3", 
            cover: "assets/images/cover1.jpg" 
        },
        { 
            title: "Farzet", 
            artist: "Sertab Erener", 
            file: "assets/music/song2.mp3", 
            cover: "assets/images/cover2.jpg" 
        }
    ],

    // GALERİ (Sol Üst)
    galleryImages: [
        "assets/images/gal1.png",
        "assets/images/gal2.png",
        "assets/images/gal3.png",
        "assets/images/gal4.png",
        "assets/images/gal5.png",
        "assets/images/gal6.png"
    ],

    // GÜNCELLEMELER (Sol Alt)
    changelog: [
        { title: "v1.0", desc: "SUNUCU HAKKINDA GÜNCELLEŞTİRMELER/BİLGİLENDİRMELER" },
        { title: "v1.1", desc: "SUNUCU HAKKINDA GÜNCELLEŞTİRMELER/BİLGİLENDİRMELER" },
        { title: "v1.2", desc: "SUNUCU HAKKINDA GÜNCELLEŞTİRMELER/BİLGİLENDİRMELER" }
    ],

    // YETKİLİ EKİBİ (Sağ)
    staff: [
        { name: "Zein", role: "Kurucu", avatar: "assets/images/staff1.png" },
        { name: "Zein", role: "Developer", avatar: "assets/images/staff2.png" },
        { name: "Burko", role: "Tasarımcı", avatar: "assets/images/staff3.png" },
        { name: "Burko", role: "Tasarımcı", avatar: "assets/images/staff3.png" },
        { name: "Burko", role: "Tasarımcı", avatar: "assets/images/staff3.png" },
        { name: "Burko", role: "Tasarımcı", avatar: "assets/images/staff3.png" },
        { name: "Burko", role: "Tasarımcı", avatar: "assets/images/staff3.png" },
        { name: "Burko", role: "Tasarımcı", avatar: "assets/images/staff3.png" }
    ]
};