let container = document.querySelector('.container');
let listPostIt = [];
// let mouvement = new Post_it(50, 50);

let btn_ajout = document.querySelector('#ajout_postit');
function ajouterPostIt() {
    container.innerHTML = "";
    listPostIt.push(new Post_it(50, 50, 300, 300, "red", "Mon premier post it"));
    for (let i in listPostIt) {
        listPostIt[i].affiche();
    }
}


// let postit1 = new Post_it(50, 50, 300, 300, "red", "Mon premier post it");
// postit1.affiche();

window.addEventListener("load", () => {

    btn_ajout.addEventListener("click", () => {
        ajouterPostIt();
    });
    // mouvement.deplacer();


});