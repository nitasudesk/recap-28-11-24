// Memunculkan Pop Up
function showPopup() {
    alert('Popupnya Muncul');
}

// Memunculkan Alert dan Value di Form Input
function peringatan(){
    let namaDepan = document.getElementById("nama depan").value
    let namaBelakang = document.getElementById("nama belakang").value

    // PENGGABUNGAN NAMA DEPAN + NAMA BELAKANG
    // cara 1
    // console.log (namaDepan, namaBelakang);
    // cara 2
    // console.log(namaDepan + " " + namaBelakang)
    // cara 3
    console.log (`${namaDepan} ${namaBelakang}`)
}

