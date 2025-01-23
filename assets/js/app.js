const baseEndpoint = "https://api.github.com";
const usersEndpoint = `${baseEndpoint}/users`;
/*Se modificaron los nombres de las constantes $n (nameElement), $b (blogElement) y $l (locationElement) para mayor legibilidad.*/
const nameElement = document.querySelector(".name"); //Punto faltante en '.name'.
const blogElement = document.querySelector(".blog"); //Marcador equivocado en '#blog'; debe ser '.blog'.
const locationElement = document.querySelector(".location");

async function displayUser(username) { //Se agregó la palabra reservada 'async' para permitir el funcionamiento de la función asíncrona.
  nameElement.textContent = "cargando...";
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); //Expresión faltante; no se convirtió la respuesta de la API en un objeto JSON.
  /* Se modificaron los operadores "" en las siguientes tres líneas por `` para permitir la interpolación de strings.*/
  nameElement.textContent = `${data.name}`;
  blogElement.textContent = `${data.blog}`;
  locationElement.textContent = `${data.location}`;
}

function handleError(err) {
  console.log("OH NO!");
  console.log(err);
  nameElement.textContent = `Algo salió mal: ${err}`; //Se corrigió el nombre de la constante $n (ahora nameElement); se había llamado con el nombre 'n', sin el prefijo '$'.
}

displayUser("stolinski").catch(handleError);
