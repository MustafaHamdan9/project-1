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

const result = document.querySelector(".Result");

let myTurn = true;
const pressXO = (id) => {
  if (myTurn === true) {
    document.getElementById(id).textContent = "X"; //  by click on pressXO  you will start  even by x or o and then make it oppsite'false'
    myTurn = !myTurn;
  } else {
    document.getElementById(id).textContent = "O";
    myTurn = !myTurn;
  }
  theResult();
};

const buttonx = (id) => {
  myTurn = true;
};

const buttono = (id) => {
  myTurn = false;
};

const theResult = () => {
  if (b1.textContent === b2.textContent && b1.textContent === b3.textContent) {
    result.textContent = `Player ${b1.textContent} is the Winner `;
    document.getElementById("B1").style.background = "blue";
    document.getElementById("B2").style.background = "blue";
    document.getElementById("B3").style.background = "blue";
  } else if (
    b4.textContent === b5.textContent &&
    b5.textContent === b6.textContent
  ) {
    result.textContent = `Player ${b5.textContent} is the Winner `;
    document.getElementById("B4").style.background = "blue";
    document.getElementById("B5").style.background = "blue";
    document.getElementById("B6").style.background = "blue";
  } else if (
    b7.textContent === b8.textContent &&
    b8.textContent === b9.textContent
  ) {
    result.textContent = `Player ${b7.textContent} is the Winner `;
    document.getElementById("B7").style.background = "blue";
    document.getElementById("B8").style.background = "blue";
    document.getElementById("B9").style.background = "blue";
    //setTimeout(resetClick, 10000);
  } else if (
    b1.textContent === b4.textContent &&
    b4.textContent === b7.textContent
  ) {
    result.textContent = `Player ${b7.textContent} is the Winner `;
    document.getElementById("B1").style.background = "blue";
    document.getElementById("B4").style.background = "blue";
    document.getElementById("B7").style.background = "blue";
    //setTimeout(resetClick, 10000);
  } else if (
    b2.textContent === b5.textContent &&
    b5.textContent === b8.textContent
  ) {
    result.textContent = `Player ${b5.textContent} is the Winner `;
    document.getElementById("B2").style.background = "blue";
    document.getElementById("B5").style.background = "blue";
    document.getElementById("B8").style.background = "blue";
  } else if (
    b3.textContent === b6.textContent &&
    b6.textContent === b9.textContent
  ) {
    result.textContent = `Player ${b9.textContent} is the Winner `;
    document.getElementById("B3").style.background = "blue";
    document.getElementById("B6").style.background = "blue";
    document.getElementById("B9").style.background = "blue";
  } else if (
    b1.textContent === b5.textContent &&
    b5.textContent === b9.textContent
  ) {
    result.textContent = `Player ${b5.textContent} is the Winner `;
    document.getElementById("B1").style.background = "blue";
    document.getElementById("B5").style.background = "blue";
    document.getElementById("B9").style.background = "blue";
  } else if (
    b3.textContent === b5.textContent &&
    b5.textContent === b7.textContent
  ) {
    result.textContent = `Player ${b7.textContent} is the Winner `;
    document.getElementById("B3").style.background = "blue";
    document.getElementById("B5").style.background = "blue";
    document.getElementById("B7").style.background = "blue";
  } else {
    result.textContent = "Draw";
  }

  //setTimeout(resetClick, 10000);
};

const rstbot = document.querySelector(".button");

const resetClick = () => {
  // itterate over boxs(1-9)
  // change every box value to ''

  const a = [b1, b2, b3, b4, b5, b6, b7, b8, b9, result];
  reset = a.map(function (e, i) {
    e.innerHTML = "";
    e.style.background = "blanchedalmond";
    return;
  });
  return reset;
};
