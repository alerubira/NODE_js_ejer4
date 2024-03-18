//4.- Considere el código que lista las películas de la API del sitio Studio Ghibli 
const request = require('request'); 
request('https://ghibliapi.herokuapp.com/films', (error, response, body) => { 
 if (error) { 
 console.error(`No se pudo enviar la solicitud a la API: ${error.message}`); 
 return; 
 } 
 /*if (response.statusCode != 200) { 
 console.error(`Espectativa de codigo 200 , pero recivida codigo: ${response.statusCode}.`); 
 return; 
 }:*/
 if(error){
    console.error(`codigo de error :${error.statusCode}
    mensaje de error: ${error.statusMessage}`);
    return;
 }
 if(response.statusCode===503){
    console.error(`Servidor fuera de servicio temporelmente ${response.statusMessage}`);
    return;
 } 
 
 console.log('Procesando su lista de peliculas'); 
 let peliculas = JSON.parse(body); 
 peliculas.forEach(pelicula => { 
 console.log(`${pelicula['title']}, ${pelicula['release_date']}`); 
 }); 
}); 
/*Ejecute el programa (recuerde instalar previamente el paquete request via NPM) 
Contestar: 
¿Cuáles són los párametros del callback? error , respuesta ,y un cuerpo con las peliculas
¿Cual es el contenido de error y body si el request falla? error trae el status y el mensaje de error,body viene undefiend
¿Dónde se encuentran almacenados los datos si el request es exitoso?en el body 
¿En que formato vienen los datos recuperados? JSON
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
