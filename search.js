function search(term){
  const names = ["Pedro", "Maria", "Rosa"];
  const animals = ["Caballo", "Oso", "Perro"];
  const things = ["Petroleo", "Carne", "Rosca"];
  const words = [...names, ...animals, ...things];
  return words.filter(word => word.toLowerCase().includes(term));
}
console.log(search('ros'));