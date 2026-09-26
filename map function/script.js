const nums = [1, 2, 4, 3, 5, 6, 7, 8];
console.log("The original array is " + nums);
const squares_array = nums.map(function (a) {
  return a ^ 2;
});
console.log("The square array is " + squares_array);


const names=["anish","bikash","binod","arun","krishna","santosh"];
console.log(names);
const capitalized=names.map((name)=>{
    return name[0].toUpperCase()+name.slice(1);
});
console.log(capitalized);

const pokemons=["Bulbasaur","Charmander","Squirtle"]
console.log(pokemons);
const paras=pokemons.map(function(pokemon){
    return `<p>${pokemon}</p>`
});
console.log(paras);