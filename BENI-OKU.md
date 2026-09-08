# Emre'nin Mutfağı — ortak sürüm kurulumu

İki aşama var: **Firebase** (tariflerin durduğu ücretsiz veri deposu) ve **GitHub Pages** (sitenin adresi).
Toplam 10-15 dakika. Kredi kartı istenmiyor, sunucu kurmuyorsun.

---

## AŞAMA 1 — Firebase  ✅ TAMAMLANDI

Proje açıldı, Firestore kuruldu, kurallar yazıldı ve `ayarlar.js` senin proje bilgilerinle dolduruldu.
Yapman gereken tek kontrol: Firestore → **Rules** sayfasındaki kod ile `ayarlar.js` içindeki
`mutfakKodu` birebir aynı mı? İkisi de şöyle olmalı:

```
mutfak-7kq2xz
```

Farklıysa birini diğerine uydur (kuralları değiştirdiysen **Publish**'e basmayı unutma).

## AŞAMA 2 — GitHub Pages (sitenin adresi)

1. github.com'da **New repository** de. Ad: `mutfak`. **Public** seç. Oluştur.
2. **Add file → Upload files** de ve bu klasördeki **bütün dosyaları** sürükle
   (`index.html`, `ayarlar.js`, `manifest.webmanifest`, `sw.js` ve dört ikon). **Commit changes**.
3. **Settings → Pages**.
4. *Source*: **Deploy from a branch**. *Branch*: **main**, klasör: **/ (root)**. **Save**.
5. Bir iki dakika sonra adresin hazır:
   `https://kullaniciadin.github.io/mutfak/`

Adresi aç. Sağ üstteki 👤 simgesine dokun — **"Ortak mutfak açık"** yazıyorsa her şey yolunda.
"Bu cihazda çalışıyor" yazıyorsa `ayarlar.js`'de bir yer eksik kalmış demektir.

---

## Emre'yi davet etme

Ona sadece adresi gönder. Açtığı anda senin tariflerini ve alışveriş listeni görür.
Hesap açmasına, bir şey kurmasına gerek yok.

Sen tarif eklediğinde onun ekranında **kendiliğinden** belirir; markette bir ürünü işaretlediğinde
sen de anında görürsün.

## Telefona kurma

- **iPhone (Safari):** adresi aç → paylaş simgesi → **Ana Ekrana Ekle**.
- **Android (Chrome):** adresi aç → üç nokta → **Uygulamayı yükle**.

Ana ekranda aşçı ikonu çıkar, tam ekran açılır. İnternet yokken de açılır; o sırada yazdıkların
bağlantı gelince kendiliğinden ortak listeye işlenir.

## Bilinmesi gerekenler

- **Kimlik doğrulama yok.** Adresi bilen herkes tarifleri görüp değiştirebilir. Aranızda kalsın diye
  adresi ve mutfak kodunu paylaşmayın. Gerçek bir şifre katmanı istersen sonradan eklenebilir.
- **Ücretsiz sınırlar** günde 50.000 okuma / 20.000 yazma. İkiniz için fazlasıyla yeterli.
- **Fotoğraflar** tarifin içinde saklanıyor ve otomatik küçültülüyor; bir tarif 1 MB'ı geçmemeli,
  normal bir fotoğraf 100-150 KB civarında kalıyor.
- **Yedek al.** 👤 → *Yedek dosyası indir* bütün tarifleri tek dosyaya çıkarır. Ara sıra yapıp bir yere
  kaydet.
- **Uygulamayı güncellemek** istersen sadece `index.html`'i repoda değiştir; `ayarlar.js`'e dokunma.

## Sorun olursa

| Belirti | Sebep |
|---|---|
| 👤'da "Bu cihazda çalışıyor" yazıyor | `ayarlar.js` eksik ya da bozuk. Tırnak/virgül kontrolü yap. |
| Tarif kaydedilmiyor | Firestore kuralındaki kod ile `ayarlar.js`'deki `mutfakKodu` birebir aynı değil. |
| Sayfa boş açılıyor | Dosyaların hepsi aynı klasörde mi, isimleri değişmiş mi? |
| Eski sürüm görünüyor | Sayfayı bir kez yenile; service worker yenisini alır. |
