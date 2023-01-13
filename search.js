

import pic from "./img/12312313.jpg";
console.log(pic);

var img = new Image();
img.src = pic;
var root = document.querySelector("#root");
root.append(img);

function a() {
  console.log("hello everyone1!")
};
a();