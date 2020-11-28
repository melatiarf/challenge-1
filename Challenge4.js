var deret = prompt('Masukkan Jumlah Deret : ',' ');
var jml = 0.0;
var angka = 1;
while (angka<=deret)
{
  jml= jml + 4*Math.pow(3,angka-1);
  angka++
}
console.log(`Jumlah deret dari 1 sampai ${deret} adalah = ${jml}`);