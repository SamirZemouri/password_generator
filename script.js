// Couleur pour la barre de progression.

document.getElementById("length").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #c9abfc 0%, #401486 ' + value + '%, #3D3A49 ' + value + '%, #3D3A49 100%)'
    // console.log(value);
  };