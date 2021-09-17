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

function createCookie(pourBouffer,listPostIt,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = pourBouffer+"="+"listPostIt"+expires+"; path=/";
}

function readCookie(pourBouffer) {
	var nameEQ = pourBouffer + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(pourBouffer) {
	createCookie(pourBouffer,"",-1);
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
