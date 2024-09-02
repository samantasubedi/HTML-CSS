/*document.getElementsByClassName("text")[0].textContent = "hello";
let x;
let message="hello";
x=30;
console.log(typeof x);
console.log(x);
console.log("the value of x is",x);

console.log(`the value of x is ${x}`);
console.log(`the message is`,message);*/

/*let x=prompt('enter any number');
x=Number(x);
console.log('the type of x is' ,typeof x);
console.log('the value of x is ',x);*/
// document.getElementById("sub").onclick = function (e) {
//   let Age = document.getElementById("num").value;
//   let Name = document.getElementsById("nam").value;
//   document.getElementById("output").textContent =
//     "your name is " + Name + " and your age is " + Age;
// };

// ;document.addEventListener("keydown", (e) => {
//   //   console.log(e.key);
//   if (e.key == "Enter") {
//     let Age = document.getElementById("num").value;
//     let Name = document.getElementById("nam").value;
//     document.getElementById("output").innerHTML =
//       "your name is " + Name + " and your age is " + Age;
//   }
// })
// let username = "  saMaNta  ";
// username = username.trim();
// let a = username.charAt(0);
// a = a.toUpperCase();
// let b = username.slice(1);
// b = b.toLowerCase();
// username = a + b;
// console.log(username);

let username = prompt("enter your name");
username =
  username.trim().charAt(0).toUpperCase() +
  username.trim().slice(1).toLocaleLowerCase();
console.log(username);
