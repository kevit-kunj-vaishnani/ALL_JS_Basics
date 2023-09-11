// (+"2")=>2   (+"2")(it is casted as an integer as 2)     (1 + +"2") = 3 ~~~~~~~ ("h" + "2") = h2 ~~~~~  ("2" + "2") = 22     (2 + "2")= 22(single + and one thing written in "" is concatenation)
// (-"2")=>-2  (-"2")(it is casted as an integer as 2 and - sign before makes -2)    ("1" - "2") = -1  ~~~~~~~ ("h" - "2") = nan   ~~~~~~      "1" - -"2" = 3 (1- -2 = 1+2 = 3)

//-----------------------------------------------------------------------------------

let obj = {
  name: "kunj",
  age: 22,
  mob: { a4: 123, a2: 567, a5: "kunj pate" },
};

for (let key in obj) {
  if (typeof obj[key] === "object") {
    console.log(obj[key]);
  } else {
    console.log(key + " " + obj[key]);
  }
}

console.log(obj);

// -----------------------------------------------------------------------------------------------------------
