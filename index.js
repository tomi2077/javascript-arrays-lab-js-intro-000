var kittens = ["Milo", "Otis", "Garfield"];

var destructivelyAppendKitten = (name) =>{
  kittens.push(name)
}

var destructivelyPrependKitten = (name) => {
  kittens.unshift(name)
}

var destructivelyRemoveLastKitten = () => {
  kittens.pop();
}

var destructivelyRemoveFirstKitten = () => {
  kittens.shift();
}

var appendKitten = (name) => {
  var kittenie = [...kittens,name]
  return kittenie;

}

