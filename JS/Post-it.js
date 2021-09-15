
class Post_it {
    num;
    x;
    y;
    longueur;
    hauteur;
    couleur;
    texte;
    constructor(num, x, y, longueur, hauteur, couleur, texte) {
        this.num = num;
        this.x = x;
        this.y = y;
        this.longueur = longueur;
        this.hauteur = hauteur;
        this.couleur = couleur;
        this.texte = texte;
    }

    deplace(x, y) {
        this.x = x
        this.y = y

    }

    agrandir(largeur, hauteur) {
        this.largeur = largeur
        this.hauteur = hauteur
    }

    change_texte(texte) {
        this.texte = texte
    }

    affiche() {
        let newElem = false;
        let divPostIt = document.getElementById("PostIt" + this.num);
        if (divPostIt === null) {
            newElem = true;
            divPostIt = document.createElement('div');
            divPostIt.id = "PostIt" + this.num;
        }
        divPostIt.style.backgroundColor = this.couleur;
        divPostIt.style.width = this.longueur + "px";
        divPostIt.style.height = this.hauteur + "px";
        divPostIt.textContent = this.texte;
        divPostIt.style.left = this.x + "px";
        divPostIt.style.top = this.y + "px";
        divPostIt.style.position = "fixed";
        if (newElem) {
            divPostIt.addEventListener('click', () => {
                if (numPostIt !== this.num) {
                    numPostIt = this.num;
                    action = "deplace";
                }
                else{
                    numPostIt = -1;
                    action = "";
                }
            });
            container.appendChild(divPostIt);
        }
    }

}

/*class PostIt {
    x
    y
    largeur
    hauteur
    couleur
    texte
    constructor(num, x = 100, y = 100, largeur = 200, hauteur = 200, couleur = "pink", texte = "") {
        this.num = num
        this.x = x
        this.y = y
        this.largeur = largeur
        this.hauteur = hauteur
        this.couleur = couleur
        this.texte = texte
    }
    deplace(x, y) {
        this.x = x
        this.y = y
    }
    agrandi(largeur, hauteur) {
        this.largeur = largeur
        this.hauteur = hauteur
    }
    chgTexte(texte) {
        this.texte = texte
    }
    affiche() {
        let newElem = false
        //On essaye d'attraper le postIt par son id
        let monElem = document.getElementById("PostIt" + this.num)
        if (monElem === null) {
            //si le post it n'existe pas on le crée
            newElem = true
            monElem = document.createElement("div")
            monElem.id = "PostIt" + this.num
        }
        monElem.style.top = this.y + "px"
        monElem.style.left = this.x + "px"
        monElem.style.width = this.largeur + "px"
        monElem.style.height = this.hauteur + "px"
        monElem.style.position = "fixed"
        monElem.style.backgroundColor = this.couleur
        monElem.innerHTML = this.texte
        if (newElem) {
            //si le post it n'existe pas on l'ajoute au document HTML
            document.body.appendChild(monElem)
        }

    }
}*/
