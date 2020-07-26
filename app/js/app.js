function Hola(){
	document.getElementById('a').innerHTML = "Has dado click!";
}

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });