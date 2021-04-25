const body = document.querySelector("body");

const O = document.querySelector(".PlayerO");

const minibox = document.querySelectorAll(".mainbox");

const x = document.querySelector(".PlayerX");

const b1 = document.querySelector("#B1");
const b2 = document.querySelector("#B2");
const b3 = document.querySelector("#B3");
const b4 = document.querySelector("#B4");
const b5 = document.querySelector("#B5");
const b6 = document.querySelector("#B6");
const b7 = document.querySelector("#B7");
const b8 = document.querySelector("#B8");
const b9 = document.querySelector("#B9");

let jouzaTurn = true;
const pressXO = (id) => {
  if (jouzaTurn === true) {
    document.getElementById(id).innerHTML = "x"; //  by click on pressXO start by x and then make it oppsite'false'
    jouzaTurn = !jouzaTurn;
  } else {
    document.getElementById(id).innerHTML = "o";
    jouzaTurn = !jouzaTurn;
  }
};

const buttonx = (id) => {
  jouzaTurn = true;
};

const buttono = (id) => {
  jouzaTurn = false;
};
//   document.getElementById(id).innerHTML = "o";

const result = document.querySelector(".Result");

const rstbot = document.querySelector(".button");

const resetClick = () => {
  // itterate over boxs(1-9)
  // change every box value to ''
  //
  // rerer

  const a = [b1, b2, b3, b4, b5, b6, b7, b8, b9, result];
  re = a.map(function (e, i) {
    e.innerHTML = "";
    return;
  });
  return re;
};

// return b1.innerHTML = '',b2.innerHTML = '' ,b3.innerHTML = '',b4.innerHTML = '',b5.innerHTML = '',b6.innerHTML = '',b7.innerHTML = '',b8.innerHTML = '',b9.innerHTML = '',result.innerHTML=''
