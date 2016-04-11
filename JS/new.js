
var myAge = 25

// How many hours are in this year
var hours = (24 * 365);

// How many minutes are in a decade without leap years
var minutes = ((hours * 10) * 60);

// How many seconds old I am
var seconds = (((hours * myAge) * 60) * 60)

// If I am older than some arbitrary number, alert "I'm old", else "I'm young"



if(myAge >= 30) {
  alert("I'm Old!");
} else {
  alert("I'm young!");
}

console.log(hours);
console.log(minutes);
console.log(seconds);