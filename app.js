let field = document.querySelector("#field");
let cssTxt = document.querySelector("#cssTxt");
let br1 = document.querySelector("#br1");
let br2 = document.querySelector("#br2");
let br3 = document.querySelector("#br3");
let br4 = document.querySelector("#br4");
let br11 = document.querySelector("#br11");
let br22 = document.querySelector("#br22");
let br33 = document.querySelector("#br33");
let br44 = document.querySelector("#br44");
let brs = document.querySelectorAll("input[number]");
let fieldset = document.querySelector("fieldset");

br1.value =
  br1.value =
  br11.value =
  br2.value =
  br22.value =
  br3.value =
  br33.value =
  br4.value =
  br44.value =
    "";

let fnTxt = function () {
  let borderTopLeft;
  let borderTopRight;
  let borderBottomLeft;
  let borderBottomRight;

  if (br1.value && br11.value && br11.value !== br1.value) {
    borderTopLeft = `border-top-left-radius: ${br1.value}px ${br11.value}px<br>`;
  } else if (br1.value) {
    borderTopLeft = `border-top-left-radius: ${br1.value}px<br>`;
  } else {
    borderTopLeft = ``;
  }
  if (br2.value && br22.value && br22.value !== br2.value) {
    borderTopRight = `border-top-right-radius: ${br2.value}px ${br22.value}px<br>`;
  } else if (br2.value) {
    borderTopRight = `border-top-right-radius: ${br2.value}px<br>`;
  } else {
    borderTopRight = ``;
  }
  if (br3.value && br33.value && br33.value !== br3.value) {
    borderBottomLeft = `border-bottom-left-radius: ${br3.value}px ${br33.value}px<br>`;
  } else if (br3.value) {
    borderBottomLeft = `border-bottom-left-radius: ${br3.value}px<br>`;
  } else {
    borderBottomLeft = ``;
  }
  if (br4.value && br44.value && br44.value !== br4.value) {
    borderBottomRight = `border-bottom-right-radius: ${br4.value}px ${br44.value}px<br>`;
  } else if (br4.value) {
    borderBottomRight = `border-bottom-right-radius: ${br4.value}px<br>`;
  } else {
    borderBottomRight = ``;
  }

  cssTxt.innerHTML = `${borderTopLeft}
    ${borderTopRight}
    ${borderBottomLeft}
    ${borderBottomRight}`;
};
let fn1 = function (e) {
  if (br11.value) {
    field.style.borderTopLeftRadius =
      "" + br1.value + "px" + " " + br11.value + "px";
  } else {
    field.style.borderTopLeftRadius = e.target.value + "px";
  }

  fnTxt();
};
let fn11 = function (e) {
  if (br1.value) {
    field.style.borderTopLeftRadius =
      "" + br1.value + "px" + " " + br11.value + "px";
  }
  fnTxt();
};
let fn2 = function (e) {
  if (br22.value) {
    field.style.borderTopRightRadius =
      "" + br2.value + "px" + " " + br22.value + "px";
  } else {
    field.style.borderTopRightRadius = e.target.value + "px";
  }

  fnTxt();
};
let fn22 = function (e) {
  if (br2.value) {
    field.style.borderTopRightRadius = e.target.value + "px";
  }
  fnTxt();
};

let fn3 = function (e) {
  if (br33.value) {
    field.style.borderBottomLeftRadius =
      "" + br3.value + "px" + " " + br33.value + "px";
  } else {
    field.style.borderBottomLeftRadius = e.target.value + "px";
  }

  fnTxt();
};
let fn33 = function (e) {
  if (br3.value) {
    field.style.borderBottomLeftRadius = e.target.value + "px";
  }
  fnTxt();
};
let fn4 = function (e) {
  if (br44.value) {
    field.style.borderBottomRightRadius =
      "" + br4.value + "px" + " " + br44.value + "px";
  } else {
    field.style.borderBottomRightRadius = e.target.value + "px";
  }

  fnTxt();
};
let fn44 = function (e) {
  if (br4.value) {
    field.style.borderBottomRightRadius = e.target.value + "px";
  }
  fnTxt();
};

let fnField = function (e) {
  console.log(e.target.value);
  if (e.target.value == 8) {
    br11.hidden = false;
    br22.hidden = false;
    br33.hidden = false;
    br44.hidden = false;
  } else if (e.target.value == 4) {
    br11.hidden = true;
    br22.hidden = true;
    br33.hidden = true;
    br44.hidden = true;
  }
};

br1.addEventListener("input", fn1);
br11.addEventListener("input", fn11);
br2.addEventListener("input", fn2);
br22.addEventListener("input", fn22);
br3.addEventListener("input", fn3);
br33.addEventListener("input", fn33);
br4.addEventListener("input", fn4);
br44.addEventListener("input", fn44);

fieldset.addEventListener("click", fnField);
