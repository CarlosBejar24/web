// Declarar variables
// let porque su contenido cambiará a medida que el juego avance (cada nivel añade un nuevo color a la secuencia).
// const porque la lista de colores ("red", "blue", "green", "yellow") no cambiará a lo largo del programa.
const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

// Función para generar la siguiente secuencia
function nextSequence() {
  // Resetear el patron de los cliks de el usuario  
  userClickedPattern = [];
  //para pasar de nivel
  level++;
  //Titulo "Nivel " con el nivel actual
  $("#level-title").text("Level " + level);
  

  //Aca es para los números randoms entre el 0 y el 3
  const randomNumber = Math.floor(Math.random() * 4);
  //Asignar el color
  const randomChosenColor = buttonColors[randomNumber];
  //Poner el color al patron
  gamePattern.push(randomChosenColor);
  
  //Animar el boton
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  //sonido
  playSound(randomChosenColor);
}

// Función para reproducir los sonidos
function playSound(name) {
  const audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Función para animar cuando el botón es presionado
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

// Detección de clicks en los botones
$(".btn").click(function () {
  //Obtenemos el color
  const userChosenColor = $(this).attr("id");
  //Hacemos un pus a nuestro userClickedPattern
  userClickedPattern.push(userChosenColor);
  
  //Reproducimos el sonido
  playSound(userChosenColor);
  //Animamos el color
  animatePress(userChosenColor);
  
  //Checamos si es el correcto mandando a llamar a nuestra otra funcion checkAnswer
  checkAnswer(userClickedPattern.length - 1);
});

// Función para verificar la respuesta del usuario
function checkAnswer(currentLevel) {
  //si esta bien
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
    //Si esta mal
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

// Detección de tecla para comenzar el juego
$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// Función para reiniciar el juego
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}