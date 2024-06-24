let first_name = prompt('Inserisci il tuo nome')
let last_name = prompt('Inserisci il tuo cognome')
let favorite_color = prompt('Inserisci il tuo colore preferito')

let password_generated = `${first_name}${last_name}${favorite_color}23`

console.log(password_generated)
document.getElementById('password_generated').innerHTML = password_generated