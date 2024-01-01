# Hava Durumu uygulaması (React)

React ile geliştirdiğim hava durumu uygulaması, [https://openweathermap.org/](OpenWeather)'dan aldığımız verileri kullanarak tasarlandı. Bu proje, hem React becerilerimi geliştirmek hem de API teknolojilerini daha derinlemesine öğrenmek amacıyla oluşturuldu. Uygulama, kullanıcıya hava durumu bilgilerini sunarken aynı zamanda görsel olarak da kullanıcı dostu bir arayüz sunmayı hedefliyor. Hava durumu verilerini çekmek için API teknolojilerini kullanmak, benim için hem pratik hem de öğretici bir deneyim sağladı. Programın şu anki görüntüsü aşağıdaki gibidir.

![Ekran görüntüsü 2024-01-01 160827](https://github.com/Yakuphsensoy/HavaDurumuApp/assets/89227314/31375a14-a49f-4263-abc7-c17b2fcedb8c)

npm test!

Proje terminalinde, aşağıdaki komutları çalıştırabilirsiniz:

npm start
Uygulamayı geliştirme modunda çalıştırır. Tarayıcınızda http://localhost:3000 adresini açarak uygulamayı görebilirsiniz.

Değişiklik yaptığınızda sayfa otomatik olarak yenilenecektir. Konsolda herhangi bir lint hatasını da görebilirsiniz.


Etkileşimli izleme modunda test çalıştırır. Daha fazla bilgi için test çalıştırma bölümüne bakabilirsiniz.

npm run build
Uygulamayı üretim için build klasörüne oluşturur. React'i üretim modunda doğru bir şekilde birleştirir ve performans için build optimizasyonu yapar.

Build işlemi minified (küçültülmüş) ve dosya adları hash'lerini içerir. Uygulamanız dağıtıma hazırdır!

npm run eject
Not: Bu tek yönlü bir işlemdir. Bir kez eject yaptıktan sonra geri dönemezsiniz!

Eğer build aracından veya yapılandırma seçeneklerinden memnun değilseniz, istediğiniz zaman eject yapabilirsiniz. Bu komut, projenizden tek bir yapılandırma bağımlılığını kaldırır.

Bunun yerine, tüm yapılandırma dosyalarını ve bağımlılıkları (webpack, Babel, ESLint, vs.) doğrudan projenize kopyalar, böylece tam kontrol sahibi olursunuz. Eject yaptıktan sonra, eject dışındaki tüm komutlar hala çalışır, ancak kopyalanan komutlara işaret eder, böylece bunları özelleştirebilirsiniz. Bu noktadan sonra tamamen kendi başınızasınız.

Eject'i kullanmak zorunda değilsiniz. Hazırlanan özellik seti küçük ve orta ölçekli dağıtımlar için uygundur ve bu özelliği kullanmak zorunda hissetmemelisiniz. Ancak, bu aracın özelleştirilemez olması durumunda faydalı olmayacağını anlıyoruz.
