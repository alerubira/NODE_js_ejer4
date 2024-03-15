//4.- Considere el código que lista las películas de la API del sitio Studio Ghibli 
const request = require('request'); 
request('https://ghibliapi.herokuapp.com/films', (error, response, body) => { 
 if (error) { 
 console.error(`No se pudo enviar la solicitud a API: ${error.message}`); 
 return; 
 } 
 if (response.statusCode != 200) { 
 console.error(`Espectativa de codigo 200 , pero recivida codigo: ${response.statusCode}.`); 
 return; 
 } 
 
 console.log('Procesando su lista de peliculas'); 
 movies = JSON.parse(body); 
 movies.forEach(movie => { 
 console.log(`${movie['title']}, ${movie['release_date']}`); 
 }); 
}); 
/*Ejecute el programa (recuerde instalar previamente el paquete request via NPM) 
Contestar: 
¿Cuáles són los párametros del callback? 
¿Cual es el contenido de error y body si el request falla? 
¿Dónde se encuentran almacenados los datos si el request es exitoso? 
¿En que formato vienen los datos recuperados? 
Tarea 
a.- Modifique el programa para guardar las películas recuperadas en un archivo 
callbackMovies.csv. 
b.- Modifique el programa para que este guarde en un archivo callbackMovies2011.cvs 
las películas del año 2011 (Nota: no elimine la operatoria de guardar todas las 
películas) 
c.- Modifique el programa para que este guarde en un archivo 
callbackMoviesLocations.json los datos de las películas liberadas después del 
2000 junto con los lugares donde fueron grababas las diferentes escenas. (Solo 
nombre de las películas y nombres de los lugares). 
d.- Modifique el programa para que este sea realizado usando promesas. 
e.- Modifique el programa para que este sea realizado utilizando async/await */
