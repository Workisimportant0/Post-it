class Post_it {
    x;
    y;
    longueur;
    hauteur;
    couleur;
    texte;
    constructor(x, y, longueur, hauteur, couleur, texte) {
        this.x = x;
        this.y = y;
        this.longueur = longueur;
        this.hauteur = hauteur;
        this.couleur = couleur;
        this.texte = texte;
    }
    affiche() {
        let divPostIt = document.createElement('div');
        container.appendChild(divPostIt);
        divPostIt.style.backgroundColor = this.couleur;
        divPostIt.style.width = this.longueur + "px";
        divPostIt.style.height = this.hauteur + "px";
        divPostIt.textContent = this.texte;
        divPostIt.style.marginLeft = this.x + "px";
        divPostIt.style.marginTop = this.y + "px";
    }

    deplacer(x, y) {
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