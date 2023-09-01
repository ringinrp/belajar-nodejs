// const nama = "Ringin Restu Pati";
// const cetakNama = (nama) => `Hai, nama saya ${nama}`
// console.log(cetakNama(nama));

// const fs = require('fs'); //core module
// const cetakNama = require('./coba'); //local module
// const PI = require('./coba');

const coba = require('./coba');


// console.log('Hallo Ringin');

console.log(coba.cetakNama('Ringin Restu Pati'), coba.PI, coba.mahasiswa.cetakMhs(), new coba.Orang());