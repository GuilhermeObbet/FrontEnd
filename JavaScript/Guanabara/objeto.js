let amigo =  { nome:`José`,
sexo:`M`,
peso:85.5,
profissao:`programador`,
engordar(p=0){ 
  console.log(`engordou`)
  this.peso += p
}
}
// console.log(amigo)
// console.log(amigo.nome)
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}KG`) 