function printOwnProperties(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(key + ": " + obj[key]);
      }
    }
  }
  
let person = {
    name: "John",
    age: 30,
    city: "New York"
  }; 
  
printOwnProperties(person);