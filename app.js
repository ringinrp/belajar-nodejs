const fs = require('fs');
const validator = require('validator');
const chalk = require('chalk');
// console.log(validator.isEmail('ringinrp@gmailm'));
// console.log(validator.isMobilePhone('0812345678','id-ID'));
const nama = 'Ringin Restu Pati';
const pesan = chalk`dsaddassadsa {bgGreen sdaadadasd} asdsadsa sadsadas saddas {bgCyan asdasdsadsad} sadsadsad {bgYellow sadasd} dsasada. Nama : ${nama}`;
console.log(pesan);


//menuliskan string ke file (synchronous)
// try{
// fs.writeFileSync('data/test.text', 'Hello World secara synchronous!');
// }catch(e){
//     console.log(e);
// }

//menulisakn string ke file asyn
// fs.writeFile('data/test.txt', 'Hello word secara asynchronous', (e)=>{
//     console.log(e);
// });

//membaca file secara synch
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

//membaca file secara asyn
// fs.readFile('data/test.txt', 'utf-8', (err, data)=>{
//     if(err)throw err;
//     console.log(data);
// });

//readline
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question('Masukkan nama anda : ', (nama) => {
//     rl.question('Masukkan nomer HP anda : ', (noHP)=>{
//         const contact = {nama,noHP};
//         const file = fs.readFileSync('data/contacts.json', 'utf-8');
//         const contacts = JSON.parse(file); 

//         contacts.push(contact);

//         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2));

//         console.log(`Terima kasih ${nama} telah memasukkan nomer HP ${noHP}`);
//         rl.close();
//     });
// });
