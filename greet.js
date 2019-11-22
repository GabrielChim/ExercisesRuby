function getWelcome(name) { 
  return () => { 
    return `Hi! ${name}`; 
  } 
}

const greetHomie = getWelcome('Homie');
const greetFco = getWelcome('Fco');
console.log(greetHomie());
console.log(greetFco());