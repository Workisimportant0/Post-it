let container = document.querySelector('.container');
let listPostIt = [];
let numPostIt = -1;
let action = "";


let btn_ajout_vert = document.querySelector('#ajout_postit_vert');
let btn_ajout_rouge = document.querySelector('#ajout_postit_rouge');
let btn_ajout_rose = document.querySelector('#ajout_postit_pink');

function ajouterPostItRouge() {
    container.innerHTML = "";
    listPostIt.push(new Post_it(listPostIt.length, 50, 50, 200, 200, "red", "Mon premier post it"));
    for (let i in listPostIt) {
        listPostIt[i].affiche();
    }
}
function ajouterPostItVert() {
    container.innerHTML = "";
    listPostIt.push(new Post_it(listPostIt.length, 50, 50, 200, 200, "green", "Mon deuxieme post it"));
    for (let i in listPostIt) {
        listPostIt[i].affiche();
    }
}
function ajouterPostItRose() {
    container.innerHTML = "";
    listPostIt.push(new Post_it(listPostIt.length, 50, 50, 200, 200, "pink", "Mon troisième post it"));
    for (let i in listPostIt) {
        listPostIt[i].affiche();
    }
}


window.addEventListener("load", () => {

    btn_ajout_vert.addEventListener("click", () => {
        ajouterPostItVert();
    });
    btn_ajout_rose.addEventListener("click", () => {
        ajouterPostItRose();
    });
    btn_ajout_rouge.addEventListener("click", () => {
        ajouterPostItRouge();
    });
    document.body.addEventListener('mousemove', (event) => {
        console.log(event);
        if (action === "deplace" && numPostIt !== -1) {
            listPostIt[numPostIt].deplace(event.clientX - 50, event.clientY - 50)
            listPostIt[numPostIt].affiche()
        }
    })

});
