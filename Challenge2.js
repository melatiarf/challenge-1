let barang = [
  {nama: "Beras", harga:10000, jumlah:5},
  {nama: "Gula", harga:14000, jumlah:5},
  {nama: "Telur", harga:20000, jumlah:2},
  {nama: "Minyak Goreng", harga:9000, jumlah:10}
];
let result = [];
let jumlah = 0;
barang.map(function(item, key) {
  let bayar = item;
  jumlah = jumlah + bayar.harga*bayar.jumlah;
});
console.log(jumlah);