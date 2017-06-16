/*
	Objet graphique generique
*/
p5.prototype.Graphisme = function(x,y,a) {
	this.position = createVector(x||0,y||0);
	this.angle=a||0;
	this.couleur=color(0);
	this.bordure=color(255);
	this.echelle=1;

	this.deplace = function(dx,dy) {
		this.position.x += dx;
		this.position.y += dy;
	}

	this.positionne = function(x,y) {
		this.position.x=x;
		this.position.y=y;
	}

	this.tourne = function(da) {
		this.angle += da;
	}

	this.fixeAngle = function(a) {
		this.angle=a;
	}

	this.zoom = function(z) {
		this.echelle *= z;
	}

	this.fixeEchelle = function(e) {
		this.echelle = e;
	}

}


p5.prototype.Typographie = function(texte,x,y,t,a) {
	this.texte=texte||"";
	this.base = p5.prototype.Graphisme;
	this.base(x,y,a);
	this.taille=t||10;

	this.dessine = function() {
		push();
		translate(this.position.x,this.position.y);
		rotate(this.angle);
		scale(this.echelle);
		textSize(this.taille);
		fill(this.couleur);
		stroke(this.bordure);
		text(this.texte,0,0);
		pop();
	}

}

p5.prototype.Rectangle = function(l,h,x,y,a) {

	this.largeur = l || 10;
	this.hauteur = h || 10;
	this.base = p5.prototype.Graphisme;
	this.base(x,y,a);


	this.dessine = function() {
		push();
		translate(this.position.x,this.position.y);
		rotate(this.angle);
		scale(this.echelle);
		textSize(this.taille);
		fill(this.couleur);
		stroke(this.bordure);
		rect(this.position.x,this.position.y,this.largeur,this.hauteur);
		pop();
	}
}

p5.prototype.Carre = function(c,x,y,a) {

	this.cote = c || 10;
	this.base = p5.prototype.Graphisme;
	this.base(x,y,a);

}

p5.prototype.Losange = function(l,h,x,y,a) {

}

p5.prototype.Ellipse = function(l,h,x,y,a) {

}

p5.prototype.Cercle = function(r,x,y,a) {

}

p5.prototype.Etoile = function(n,ri,re,x,y,a) {

}

