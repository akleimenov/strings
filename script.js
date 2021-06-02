const str = "Я изучаю JavaScript";

/*Task 1  

Дана строка:
Я изучаю JavaScript
Как вывести 3-й символ? 1-й? Последний?

Приветствуется решение несколькими способами


*/
//3 символ
console.log(str[2]); //и
console.log(str.charAt(2)); //и

//1 символ
console.log(str[0]); //Я
console.log(str.charAt(0));

//последний символ
console.log(str[str.length - 1]); //t

/*Task 2  */

/*
Можем ли мы заменить в строке:
`Я изучаю JavaScipt`
символ `ю` на другой? Если да, то как?
Можем ли заменить слово `JavaScript` на 'Frontend`?

Приветствуется решение несколькими способами  */

//замена по индексу невозможна

const newStr = str.replace("ю", "л");
console.log(newStr); //Я изучал JavaScript

const front = str.replace("JavaScript", "Frontend");
console.log(front); //Я изучаю Frontend

const front2 = str.split(" ");
for (let i = 0; i < front2.length; i++) {
  if (front2[i] === "JavaScript") front2[i] = "Frontend";
}
console.log(front2.join(" ")); //Я изучаю Frontend
