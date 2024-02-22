function hesapla(event) {
    // Formun sayfayı yeniden yüklemesini engelle
    event.preventDefault();
    var name = document.querySelector('input[name="name"]').value;
    var surname = document.querySelector('input[name="surname"]').value;
    var gender = document.querySelector('select[name="degree"]').value;
    var age = document.querySelector('input[name="age"]').value;
    var height = document.querySelector('input[name="height"]').value;
    var weight = document.querySelector('input[name="weight"]').value;
    var waist = document.querySelector('input[name="waist"]').value;
    var hip = document.querySelector('input[name="hip"]').value;
    var neck = document.querySelector('input[name="neck"]').value;
    var lifestyle = document.querySelector('select[name="lifestyle"]').value;

    // Tüm inputların dolu olup olmadığını kontrol et
    if (name === '' || surname === ''|| gender === ''|| age === ''|| height === ''|| weight === ''|| waist === ''|| hip === ''|| neck === ''|| lifestyle === '') {
        alert('Lütfen Tüm Değerleri Doldurunuz!');
        return; // Eğer herhangi bir input boşsa, fonksiyondan çık
    }

    // Tabloları seç
    var table = document.getElementById("table-1");
    var table2 = document.getElementById("table-2");

    // İlk tablonun hücrelerini doldur
    table.tBodies[0].rows[0].cells[1].innerHTML = name;
    table.tBodies[0].rows[1].cells[1].innerHTML = gender;
    table.tBodies[0].rows[2].cells[1].innerHTML = height;
    table.tBodies[0].rows[3].cells[1].innerHTML = waist;
    table.tBodies[0].rows[4].cells[1].innerHTML = neck;

    // İkinci tablonun hücrelerini doldur
    table2.tBodies[0].rows[0].cells[1].innerHTML = surname;
    table2.tBodies[0].rows[1].cells[1].innerHTML = age;
    table2.tBodies[0].rows[2].cells[1].innerHTML = weight;
    table2.tBodies[0].rows[3].cells[1].innerHTML = hip;
    table2.tBodies[0].rows[4].cells[1].innerHTML = lifestyle;

    // Günlük su ihtiyacını hesapla ve tabloya ekle
    var gunlukSuIhtiyaci = weight * 0.035;
    table2.tBodies[0].rows[10].cells[1].innerHTML = gunlukSuIhtiyaci.toFixed(2) + " L";

    // Vücuttaki kan miktarını hesapla ve tabloya ekle
    var vucuttakiKanMiktari = weight * 0.08;
    table.tBodies[0].rows[9].cells[1].innerHTML = vucuttakiKanMiktari.toFixed(1) + " L";

    // Beden kitle indeksini hesapla ve tabloya ekle
    var bedenKitleIndeksi = weight / ((height / 100) ** 2);
    table2.tBodies[0].rows[7].cells[1].innerHTML = bedenKitleIndeksi.toFixed(2);

    // İdeal kiloyu ve vücut yağ oranını hesapla
    var idealkilo, yagOrani;
    if(gender=="Erkek"){
        idealkilo = height - 100;
        var bmi = weight / ((height / 100) ** 2);
        yagOrani = (1.20 * bmi) + (0.23 * age) - 16.2;
    } else {
        idealkilo = height - 110;
        var bmi = weight / ((height / 100) ** 2);
        yagOrani = (1.20 * bmi) + (0.23 * age) - 5.4;
    }

    // İdeal kiloyu ve vücut yağ oranını tabloya ekle
    table.tBodies[0].rows[5].cells[1].innerHTML = idealkilo;
    table.tBodies[0].rows[6].cells[1].innerHTML = yagOrani.toFixed(2);

    // Kilo farkını hesapla ve tabloya ekle
    var kilofarki = weight - idealkilo;
    table2.tBodies[0].rows[5].cells[1].innerHTML = Math.abs(kilofarki);

    // Yağsız vücut ağırlığını hesapla ve tabloya ekle
    var yagsizVucutAgirligi = weight * (1 - (yagOrani / 100));
    table.tBodies[0].rows[7].cells[1].innerHTML = yagsizVucutAgirligi.toFixed(2);

    // Toplam kemik ağırlığını hesapla ve tabloya ekle
    var toplamKemikAgirligi = weight * 0.14;
    table.tBodies[0].rows[8].cells[1].innerHTML = toplamKemikAgirligi.toFixed(2);


        // Aktivite katsayısını belirle
    var aktiviteKatsayisi;
    if (lifestyle == 'Hafif') {
        aktiviteKatsayisi = 1.2;
    } else if (lifestyle == 'Orta') {
        aktiviteKatsayisi = 1.55;
    } else if (lifestyle == 'Yüksek') {
        aktiviteKatsayisi = 1.9;
    }

    // Bazal Metabolizma Hızını (BMH) hesapla
    var bmr;
    if (gender == "Erkek") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender == "Kadın") {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161; 
    }

    // Günlük Kalori İhtiyacını hesapla ve tabloya ekle
    var gunlukKaloriIhtiyaci = bmr * aktiviteKatsayisi;
    table.tBodies[0].rows[10].cells[1].innerHTML = gunlukKaloriIhtiyaci.toFixed(2);

    // Vücuttaki Yağ Miktarını hesapla ve tabloya ekle
    var vucuttakiYagMiktari = weight * (yagOrani / 100);
    table2.tBodies[0].rows[6].cells[1].innerHTML = vucuttakiYagMiktari.toFixed(2);

    // Vücuttaki Kas Miktarını hesapla ve tabloya ekle
    var vucuttakiKasMiktari = weight - vucuttakiYagMiktari - toplamKemikAgirligi;
    table2.tBodies[0].rows[8].cells[1].innerHTML = vucuttakiKasMiktari.toFixed(2);

    // Formu sıfırla
    document.getElementById("myform").reset();
}

