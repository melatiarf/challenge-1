class Lingkaran {
  constructor(r, phi){
      this.jari_jari = r
      this.phi = phi
  }

  luas = () => {
      return this.phi*(this.jari_jari**2)
  }
  keliling = () => {
      return 2*this.phi*this.jari_jari
  }
}

class Tabung extends Lingkaran{
  constructor(r, phi, t){
  super(r,phi)
  this.tinggi = t
  }
  volume = () => {
      return this.phi * (this.jari_jari**2)*this.tinggi
  }
  luasPermukaan = () => {
      return this.phi*this.jari_jari*(this.jari_jari*2*this.tinggi)
  }
  luasSelimut = () => {
      return 2*this.phi*this.jari_jari*this.tinggi
  }
}

class Kerucut extends Lingkaran {
  constructor(r,phi,t){
      super(r,phi)
      this.tinggi = t
  }
  
  volume = () => {
      return (1/3)*this.phi*(this.jari_jari**2)*this.tinggi
  }
  luasPermukaan = () => {
      return this.phi*this.jari_jari*(this.jari_jari + (Math.sqrt((this.jari_jari**2)+(this.tinggi**2))))
  }
  luasSelimut = () => {
      return this.phi*this.jari_jari*(Math.sqrt((this.jari_jari**2)+(this.tinggi**2)))
  }
}

class Bola extends Lingkaran{
  constructor(r,phi){
      super(r,phi)
  }
  volume = () => {
      return (4/3)*this.phi*(this.jari_jari**3)
  }
  luasPermukaan = () => {
      return 4*this.phi*(this.jari_jari**2)
  }
}

let gelas = new Tabung(7.5, 3.14, 50)
console.log ("Volume gelas = " + gelas.volume() + "cm3");
console.log ("Luas permukaan gelas = " + gelas.luasPermukaan() + "cm2");
console.log ("Luas selimut gelas = " + gelas.luasSelimut() + "cm2");
console.log ("-----------------------");

let traffic_cone = new Kerucut (10,3.14,40)
console.log ("Volume traffic cone = " + traffic_cone.volume() + "cm3");
console.log ("Luas permukaan traffic cone = " + traffic_cone.luasPermukaan() + "cm2");
console.log ("Luas selimut = " + traffic_cone.luasSelimut() + "cm2");
console.log ("-----------------------");

let bola = new Bola (15, 3.14)
console.log ("Volume bola = " + bola.volume() + "cm3");
console.log ("Luas permukaan bola = " + bola.luasPermukaan() + "cm2");
console.log ("-----------------------");