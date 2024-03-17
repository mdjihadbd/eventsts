const btn = document.getElementById("btn");

const sms = document.getElementById("sms");

const msg =
  "Ei Meye Ami tomake balatechi ? Ami tomake Bhalobasi...💕💘💖 ৷ Tumi Ki Amar Sathe Rilesana  Karaba?😊😊";

btn.addEventListener("click", () => {
  sms.textContent = msg;
});

const light = document.getElementById("light");
const yes = document.getElementById("yes");
const no = document.getElementById("no");

const lights = {
  yes: "./photo/pic_bulbon.gif",
  no: "./photo/pic_bulboff.gif",
};

yes.addEventListener("click", () => {
  light.src = lights.yes;
});

no.addEventListener("click", () => {
  light.src = lights.no;
});
