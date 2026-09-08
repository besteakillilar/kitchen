/*  Emre'nin Mutfağı — ortak mutfak ayarları
 *  Bu dosya senin Firebase projene göre dolduruldu, dokunmana gerek yok.
 *
 *  TEK KONTROL: aşağıdaki mutfakKodu, Firestore → Rules sayfasındaki
 *  satırda yazan kodun BİREBİR AYNISI olmalı:
 *      allow read, write: if mutfak == 'mutfak-7kq2xz';
 *  Kurallara farklı bir kod yazdıysan buradaki satırı ona göre değiştir
 *  (ya da kurallardaki kodu bununla değiştirip Publish de).
 */
window.MUTFAK_AYARLARI = {

  mutfakKodu: "mutfak-7kq2xz",

  firebase: {
    apiKey:            "AIzaSyBRRhPpc8f5noMLRpVCx2KSdJvYhYkBaEY",
    authDomain:        "emrenin-mutfagi.firebaseapp.com",
    projectId:         "emrenin-mutfagi",
    storageBucket:     "emrenin-mutfagi.firebasestorage.app",
    messagingSenderId: "100996353457",
    appId:             "1:100996353457:web:d12d02017193c90dad4190"
  }
};
