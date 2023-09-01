function cetakNama(nama){
    return `Halo, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
    nama : 'Doddy',
    umur : 23,
    cetakMhs (){
        return `Hallo, nama saya ${this.nama} dan saya umur saya ${this.umur} tahun`;
    }
};

class Orang {
    constructor(){
        console.log('Object orang telah dibuat');
    }
};

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

module.exports = { cetakNama, PI, mahasiswa, Orang };