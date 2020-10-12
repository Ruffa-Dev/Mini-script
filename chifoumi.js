const buttons = document.querySelectorAll("button");
// const resultat = document.querySelector(".resultat");
let scorej = 0;
let scoreo = 0;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const joueur = buttons[i].innerHTML;
    const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
    let resultat = "";
    // resultat.innerHTML = joueur + "       " + robot;
    if (joueur === robot) {
      resultat = "Egalité";
    } else if (
      (joueur === "Pierre" && robot === "Ciseaux") ||
      (joueur === "Ciseaux" && robot === "Feuille") ||
      (joueur === "Feuille" && robot === "Pierre")
    ) {
      resultat = "Gagné";
      scorej++;
    } else {
      resultat = "Perdu";
      scoreo++;
    }
    document.querySelector("#ordi").innerHTML = `
  Robot : ${robot} <br/>
`;
    document.querySelector("#joueur").innerHTML = `
  Joueur : ${joueur}
`;
    document.querySelector("#resultat").innerHTML = `
  Résultat : ${resultat}
`;

    document.querySelector("#scoreJoueur").innerHTML = `
  Score Joueur : ${scorej}
`;

    document.querySelector("#scoreOrdi").innerHTML = `
  Score Robot : ${scoreo}
`;
  });
}
