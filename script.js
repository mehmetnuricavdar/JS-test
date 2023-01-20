/* 1. Programming Basics
'Spaghetti', 'Lasagne', 'Beans on toast', 'Porridge', 'Tomato soup', 'Salmon'
Create an array of the dishes listed above. Loop through the array using a for loop.*/

const dishesArray = [
  "Spaghetti",
  "Lasagne",
  "Beans on toast",
  "Porridge",
  "Tomato soup",
  "Salmon",
];

// 1.Log out all the dishes.

dishesArray.forEach((dish) => console.log(dish));

//2.Log out a randomly chosen dish (randomly generated  index).
const randomNumber = Math.floor(Math.random() * dishesArray.length);

console.log(dishesArray[randomNumber]);

/* 2. DOM manipulation
Using JavaScript, create a button and add it to the html (the document)
When the button is clicked: */

// Insert an h1 tag below the button with the text “Javascript test”.
// Change the background color of the document body

const button = document.createElement("button");
document.body.append(button);
button.innerHTML = "Click me!";
button.addEventListener("click", () => {
  const h1Tag = document.createElement("h1");
  h1Tag.textContent = "JavaScript Test";
  document.body.append(h1Tag);
  document.body.style.backgroundColor = "gray";
});

/* 
3. Async API calls
Make an API call using the Fetch API. Make use of the following API:
https://reqres.in/api/users
Display the first_name of the first three users in the DOM, using a loop or .map().
*/
const base_URL = "https://reqres.in/api/users";
const apiCall = async () => {
  const response = await fetch(base_URL);
  const data = await response.json();
  const users = data.data.slice(0, 3); // get the first three users
  const names = users.map((user) => user.first_name); // get the first_name of each user

  const list = document.createElement("ul");
  names.forEach((name) => {
    const listItem = document.createElement("li");
    listItem.textContent = name;
    list.appendChild(listItem);
  });

  document.body.appendChild(list);
};

apiCall();

/*
4. Class (optional)
Create a class called “Person”. The constructor should have 1 parameter called
firstname. It should have 1 method called sayHello that should log: 'Hello my name is
<firstname>’.
Here is an example:
const peter = new Person('peter');
peter.sayHello(); // 'Hello my name is Peter' */

class Person {
  constructor(firstName) {
    this.firstName = firstName;
  }

  sayHello() {
    console.log(`Hello! My name is ${this.firstName}`);
  }
}

const peter = new Person("Peter")
peter.sayHello()
