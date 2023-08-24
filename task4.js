// Родительская функция для электроприборов
function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
  }
  
// Методы родительской функции
ElectricalAppliance.prototype = {
plugIn: function() {
    this.pluggedIn = true;
    console.log(this.name + ' включен(а) в розетку');
},
unplug: function() {
    this.pluggedIn = false;
    console.log(this.name + ' выключен(а) из розетки');
    }
};
  
// Конкретный прибор - настольная лампа
function DeskLamp(name, power, brightness) {
ElectricalAppliance.call(this, name, power);
this.brightness = brightness;
}
  
// Наследование прототипа родительской функции
DeskLamp.prototype = Object.create(ElectricalAppliance.prototype);
DeskLamp.prototype.constructor = DeskLamp;
  
// Методы конкретного прибора
DeskLamp.prototype.adjustBrightness = function(newBrightness) {
this.brightness = newBrightness;
console.log(this.name + ' яркость установлена на ' + this.brightness);
};
  
// Конкретный прибор - компьютер
function Computer(name, power, brand) {
ElectricalAppliance.call(this, name, power);
this.brand = brand;
}
  
// Наследование прототипа родительской функции
Computer.prototype = Object.create(ElectricalAppliance.prototype);
Computer.prototype.constructor = Computer;
  
// Методы конкретного прибора
Computer.prototype.start = function() {
console.log(this.name + ' запущен');
};
Computer.prototype.shutdown = function() {
   console.log(this.name + ' выключен');
};
  
// Создание экземпляров приборов
var lamp = new DeskLamp('Настольная лампа', 60, 100);
var computer = new Computer('Компьютер', 500, 'Lenovo');
  
// Включение и выключение приборов
lamp.plugIn();
computer.plugIn();
  
// Изменение яркости лампы
lamp.adjustBrightness(50);
  
// Выключение приборов
lamp.unplug();
computer.shutdown();