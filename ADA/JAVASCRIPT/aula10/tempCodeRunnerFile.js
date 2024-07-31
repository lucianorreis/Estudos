function reversa(frase) {
  let split = frase.split();
  let array = split.reverse();
  let inverso = array.join();
  return inverso;
}

reversa("Carambola");