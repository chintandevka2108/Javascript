function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  function createPerson() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const eyeColor = document.getElementById("eyeColor").value;
  
    const newPerson = new Person(firstName, lastName, age, eyeColor);
  
    document.getElementById("demo").innerHTML = 
      "You created a person: " + 
      newPerson.firstName + " " + 
      newPerson.lastName + 
      ", Age: " + newPerson.age + 
      ", Eye Color: " + newPerson.eyeColor;
  }