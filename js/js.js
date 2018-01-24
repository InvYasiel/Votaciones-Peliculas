var peliculas = [{
        id: 0,
        titulo: "DUNKERQUE",
        sinopsis: "Los soldados aliados de Bélgica, el Imperio Británico, Canada y Francia estaban rodeados por  el ejército Alemán y fueron evacuados en una batalla feroz durante la Segunda Guerra Mundial.",
        img: "barco.jpg",
        votos: 0
    },
    {
        id: 1,
        titulo: "EL BEBÉ JEFAZO",
        sinopsis: "Comedia familiar sobre la repercusión que tiene en el hogar la llegada de un nuevo hijo, contada desde el punto de vista de un narrador deliciosamente indigno de confianza.",
        img: "bebe.jpg",
        votos: 0
    },
    {
        id: 2,
        titulo: "COCO",
        sinopsis: "Pixar nos regala una historia de aventuras, ternura y fantasía, a través de su protagonista Miguel, un niño de doce años, que vive en un típico pueblo mágico mexicano.",
        img: "coco.jpg",
        votos: 0
    },
    {
        id: 3,
        titulo: "IT",
        sinopsis: "Son los años 80 en el pequeño pueblo de Derry, en el estado de Maine. En él vive una panda de siete niños conocidos como 'El club de los perdedores', que debe enfrentarse a sus problemas. ",
        img: "it.jpg",
        votos: 0
    },
    {
        id: 4,
        titulo: "LOGAN",
        sinopsis: "Es el año 2029. Los mutantes prácticamente han desparecido. Un cansado y abatido Logan (Hugh Jackman) vive retirado enla ciudad mexicana de El Paso. ",
        img: "logan.jpg",
        votos: 0
    },
    {
        id: 5,
        titulo: "KONG: LA ISLA CALAVERA ",
        sinopsis: "Kong: La Isla Calavera (originalmente en inglés, Kong: Skull Island) es una película estadounidense de acción, fantasía, monstruos y aventuras dirigida por Jordan Vogt-Roberts.",
        img: "kong.jpg",
        votos: 0
    },
    {
        id: 6,
        titulo: "LIGA DE LA JUSTICIA",
        sinopsis: "Después del sacrificio realizado por Superman (Henry Cavill), la perspectiva de Bruce Wayne (Ben Affleck), nombre tras el que se oculta la ideantidad secreta de Batman, cambia radicalmente.",
        img: "liga.jpg",
        votos: 0
    },
    {
        id: 7,
        titulo: "LA MOMIA",
        sinopsis: "Olvidada y enterrada dentro de una cripta en medio del desierto, una antigua reina (Sofia Boutella de Kingsman: El Servicio Secreto y Star Trek sin límites),a quien su destino le fue arrebatado injustamente.",
        img: "momia.jpg",
        votos: 0
    },
    {
        id: 8,
        titulo: "LA GUERRA DEL PLANETA DE LOS SIMIOS",
        sinopsis: "La guerra del planeta de los simios' es la tercera entrega del reinicio de la saga comenzado en 2011 con 'El origen del planeta de los simios'. Tras loshechos acontecidos en 'El amanecer del planeta de los simios'.",
        img: "mono.jpg",
        votos: 0
    },
    {
        id: 9,
        titulo: "TRANSFORMERS: EL ÚLTIMO CABALLERO",
        sinopsis: "Quinta entrega de la famosa saga 'Transformers'. Mark Wahlberg volverá a convertirse en el protagonista de la película, que vuelve a contar con Michael Bay como director. Cade Yeager (Wahlberg) vivirá bajo la protección de los Autobots.",
        img: "transformer.jpg",
        votos: 0
    }
];

var container = document.getElementById('contenedor-peliculas');

for (let i = 0; i < peliculas.length; i++) {
    /// primero crear tr
    var tr = document.createElement('tr');

    /// crear primer td
    var td = document.createElement('td');
    td.style = 'text-align: center';

    ///crear imagen de td y appendchild a td
    var imagen = document.createElement('img');
    imagen.setAttribute('src', 'img/' + peliculas[i].img);
    td.appendChild(imagen);

    /// crear p de td y appendchild a td
    var p = document.createElement('p');
    p.innerHTML = peliculas[i].titulo;
    td.appendChild(p);

    /// crear boton de td y appendchild a td
    var btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'btn btn-success');
    btn.setAttribute('data-toggle', 'modal');
    btn.setAttribute('data-target', '#exampleModal');
    btn.innerHTML = 'VOTAR';
    btn.addEventListener('click', function () {
        var input = document.getElementById('Pelicula');
        input.value = peliculas[i].titulo;

        var hidden = document.getElementById('IdPelicula');
        hidden.setAttribute('id-pelicula', peliculas[i].id);
    }, false)
    td.appendChild(btn);

    /// apendshild de td al tr
    tr.appendChild(td);

    /// crear segundo td
    var td2 = document.createElement('td');
    td2.setAttribute('class', 'sinopsis')
    td2.innerHTML = peliculas[i].sinopsis;

    /// appendchild del segundo td al tr
    tr.appendChild(td2);

    /// apendchild del tr al contenedor
    container.appendChild(tr);
}

function votar() {
    /// recoger el ID pelicula
    var idPelicula = document.getElementById('IdPelicula').getAttribute('id-pelicula');
    /// recoger el email
    var email = document.getElementById('email').value;
    /// recoger el nombre
    var nombre = document.getElementById('Nombre').value;
    /// recoger el telefono
    var telefono = document.getElementById('Telefono').value;
    /// Crear objeto usuario y asignarle los valores y asignarle el voto
    var Usuario = {
        email: email,
        nombre: nombre,
        telefono: telefono,
        voto: parseInt(idPelicula)
    }
    /// Buscar el array de usuarios en el localStorage
    var arr = JSON.parse(localStorage.getItem('usuarios'));
    /// Si no existe crearlor  arr = []
    if (arr == null) {
        arr = [];
    }
    /// Agregar usuario a el array
    arr.push(Usuario);
    /// Guardar el array en localStorage
    localStorage.setItem('usuarios', JSON.stringify(arr));
    /// ------------------

    /// Buscar el array de peliculas en el localStorage
    var localArr = JSON.parse(localStorage.getItem('peliculas'));

    /// Buscar la pelicula con el ID PELICULA
    if (localArr == null) {
        localArr = peliculas;
    }
    /// Sumarle un voto a la pelicula
    localArr.forEach(element => element.id == idPelicula ? element.votos++ : null);


    /// Guardar array en localStorage
    localStorage.setItem('peliculas', JSON.stringify(localArr));
}
