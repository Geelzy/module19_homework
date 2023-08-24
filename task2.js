let person = {
    name: "John",
    age: 30,
    city: "New York"
  }; 

function checkProperty(propertyName, object) {
    return object.hasOwnProperty(propertyName);
  }
  
console.log(checkProperty("name", person)); 
console.log(checkProperty("gender", person)); 