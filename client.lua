CreateThread(function()
    -- 1. Oyuncunun karakteri oluşana kadar bekle
    while not DoesEntityExist(PlayerPedId()) do
        Wait(200)
    end

    -- 2. Harita ve binaların yüklenmesi için güvenli bekleme süresi (2-3 saniye idealdir)
    Wait(2500)

    -- 3. HTML tarafına (script.js) "Kapan" sinyali gönder (Müziği susturmak için)
    SendNUIMessage({
        eventName = 'shutdown'
    })

    -- 4. FiveM'in kendi yükleme ekranını zorla kapat
    ShutdownLoadingScreen()
    ShutdownLoadingScreenNui()
end)