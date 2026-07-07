const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const image = document.getElementById("image");
const textShow = document.getElementById("textShow");
let count = 0;

yesBtn.addEventListener("click", () => {
  count = 0;
  textShow.innerHTML = "Yeaaaaaaaaaaaa!!!!!!!";
  image.src = "https://media.tenor.com/QbsVdi4RPTUAAAAi/cat-cute.gif";
  if (count === 0) {
    noBtn.style.position = "relative";
    noBtn.style.left = "0px";
    noBtn.style.top = "0px";
  }
  yesBtn.innerHTML = "";
  yesBtn.style.background = "none";
});
noBtn.addEventListener("click", () => {
  let random = Math.random() * 70;
  count++;
  textShow.innerHTML = "Think again , are you sure?🥹";
  image.src =
    "https://gifdb.com/images/thumbnail/cat-sad-sticker-xhycjhca1i4g7ok4.gif";
  if (count === 1) {
    noBtn.style.position = "relative";
    noBtn.style.left = -random * 10 + "px";
    noBtn.style.top = random * 5 + "px";
  }
  if (count === 2) {
    noBtn.style.position = "relative";
    noBtn.style.left = random * 7 + "px";
    noBtn.style.top = -random * 3 + "px";
  }
  if (count === 3) {
    noBtn.innerHTML = "";
    noBtn.style.background = "none";
    // make the yes button full width and keep its label
    yesBtn.className =
      "w-150 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded m-auto text-center m-10";
    yesBtn.innerHTML = "Yes";
  }
});
