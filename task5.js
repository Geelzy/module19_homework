class Appliance {
    constructor(name, power) {
      this.name = name;
      this.power = power;
      this.pluggedIn = false;
    }
  
    togglePower() {
      this.pluggedIn = !this.pluggedIn;
      if (this.pluggedIn) {
        console.log(`${this.name} включен в розетку.`);
      } else {
        console.log(`${this.name} выключен из розетки.`);
      }
    }
  }
  
class Lamp extends Appliance {
constructor(name, power, brightness) {
    super(name, power);
    this.brightness = brightness;
}
  
adjustBrightness(newBrightness) {
    this.brightness = newBrightness;
    console.log(`${this.name} яркость изменена на ${this.brightness}.`);
}
}
  
class Computer extends Appliance {
constructor(name, power, brand) {
    super(name, power);
    this.brand = brand;
}
  
playGame(game) {
    console.log(`${this.brand} компьютер играет в ${game}.`);
}
}
  
// Создаем экземпляры приборов
const deskLamp = new Lamp("Настольная лампа", 50, 100);
const desktopComputer = new Computer("Стационарный компьютер", 500, "Dell");
  
// Включаем и выключаем приборы
deskLamp.togglePower();
desktopComputer.togglePower();
  
// Изменяем яркость настольной лампы
deskLamp.adjustBrightness(75);
  
// Играем на компьютере
desktopComputer.playGame("Minecraft");