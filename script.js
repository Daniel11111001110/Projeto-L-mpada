(function () {
  let on = document.querySelector("#acesa");
  let off = document.querySelector("#desligar");

  let acesa = document.querySelector(".lampada-acesa");
  let desligada = document.querySelector(".lampada-desligada");
  let quebrada = document.querySelector(".lampada-quebrada");

  let lampada = document.querySelector(".img");

  on.style.display = "block";
  off.style.display = "none";

  const isLampBroken = () => {
    return quebrada.style.display === "block";
  };

  on.addEventListener("click", () => {
    if (!isLampBroken()) {
      acesa.style.display = "block";
      desligada.style.display = "none";
      quebrada.style.display = "none";

      on.style.display = "none";
      off.style.display = "block";
    }
  });
  off.addEventListener("click", () => {
    if (!isLampBroken()) {
      acesa.style.display = "none";
      desligada.style.display = "block";
      quebrada.style.display = "none";

      on.style.display = "block";
      off.style.display = "none";
    }
  });

  lampada.addEventListener("mouseover", () => {
    if (!isLampBroken()) {
      acesa.style.display = "block";
      desligada.style.display = "none";
      quebrada.style.display = "none";
    }
  });
  lampada.addEventListener("mouseleave", () => {
    if (!isLampBroken()) {
      acesa.style.display = "none";
      desligada.style.display = "block";
      quebrada.style.display = "none";
    }
  });
  lampada.addEventListener("dblclick", () => {
    acesa.style.display = "none";
    desligada.style.display = "none";
    quebrada.style.display = "block";
  });
})();
