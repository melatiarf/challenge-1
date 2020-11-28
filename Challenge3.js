
let tinggi = 1.70; //menggunakan satuan meter
let berat = 90;

let bmi = berat/Math.pow(tinggi,2);

console.log(bmi);;
if(bmi < 18.5){
    console.log("Kekurangan Berat Badan");
}else if (bmi >= 18.5, bmi <= 24.9){
    console.log("Normal (Ideal)");
}else if (bmi >= 25.0, bmi <= 29.0){
    console.log("Kelebihan Berat Badan");
}else{
    console.log("Kegemukan (Obesitas)");
}
