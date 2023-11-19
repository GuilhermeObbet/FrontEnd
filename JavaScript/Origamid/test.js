var lista = [];
var btn = document.getElementById(`btn`);
var text = document.getElementById(`text`);
var res = document.getElementById(`p`)
btn.addEventListener(`click`, function(){
  lista.push(text.value);
  for ( var item = 0; item < lista.length; item++) {
    var result = result + ` , ` + lista[item]
    res.innerText = result
  }
})
