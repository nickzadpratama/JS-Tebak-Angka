var tanya = true;

while (tanya) {
  // menangkap pilihan player

  var comp = Math.random();
  if (comp <= 0.1) {
      comp = '1';
  } else if (0.1 < comp <= 0.2) {
      comp = '2';
  } else if (0.2 < comp <= 0.3) {
      comp = '3';
  } else if (0.3 < comp <= 0.4) {
      comp = '4';
  } else if (0.4 < comp <= 0.5) {
      comp = '5';
  } else if (0.5 < comp <= 0.6) {
      comp = '6';
  } else if (0.6 < comp <= 0.7) {
      comp = '7';
  } else if (0.7 < comp <= 0.8) {
      comp = '8';
  } else if (0.8 < comp <= 0.9) {
      comp = '9';
  } else {
      comp = '10';
  }
  console.log(comp)

  var hasil = "";

  for (var tahap = 2; tahap >= 0; tahap--) {
    var p = prompt("Tebak angka dari 1-10, kamu punya 3 kesempatan");

      if ( tahap > 0) {
        if (p < comp && p <= 10) {
            hasil = 'Pilihan kamu terlalu rendah,\nAyo masih ada ' + tahap + ' kesempatan lagi!'
        }
        else if (p > comp && p <= 10) {
            hasil = 'Pilihan kamu terlalu besar,\nAyo masih ada ' + tahap + ' kesempatan lagi!'
        }
        else if (p == comp && p <= 10) {
            hasil = 'Anda BENAR..!\nangka yang dimaksud adalah ' + comp
            alert(hasil)
            break;
        } else {
            hasil = 'Kamu memasukan pilihan yang salah';
        }
    }

    if (tahap == 0) {
        if (p == comp && p <= 10) {
            hasil = 'Anda BENAR..!\nangka yang dimaksud adalah ' + comp
        } else if (p != comp && p <= 10) {
            hasil = 'Anda GAGAL!\nangka yang dimaksud adalah ' + comp
        } else {
            hasil1 = 'Kamu memasukan pilihan yang salah'
            hasil2 = 'Anda GAGAL!\nangka yang dimaksud adalah ' + comp
            alert(hasil)
            alert(hasil1)
        }
    }

    alert(hasil);
  }

  tanya = confirm("lagi?");
}

alert("Terimakasih sudah bermain");