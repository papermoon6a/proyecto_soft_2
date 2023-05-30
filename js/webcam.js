//Variables de clases Globales 
let chat_converse_class = document.querySelector('.chat_converse');
let prime_class = document.querySelector('.prime');
let prime_id = document.getElementById('prime');
let fab_class = document.querySelector('.fab');
let chat_class = document.querySelector('.chat');

//variables de Id especificos
let chatSend_id = document.getElementById('chatSend');
let chat_converse_id = document.getElementById('chat_converse');

chatSend_id.value = "";


function toggleFab() {
    prime_class.classList.toggle('zmdi-plus');
    prime_class.classList.toggle('zmdi-close');
    prime_class.classList.toggle('is-active');
    prime_id.classList.toggle('is-float');
    chat_class.classList.toggle('is-visible');
    fab_class.classList.toggle('is-visible');
}

let video_picture = document.getElementById('fab_listen');
let span = document.querySelector('chat_msg_item');

video_picture.addEventListener("click", iniciar_video);
prime_id.addEventListener("click", toggleFab);

function iniciar_video() {
    Webcam.set({
        width: 250,
        height: 250,
        image_format: 'jpeg',
        jpeg_quality: 100,
        force_flash: false
    });
    Webcam.attach('#camera');
    document.getElementById('converse-contain').style.display = 'none';
    document.getElementById('camBox').style.display = 'block';
}


function takeSnapShot()  {
    Webcam.snap(
        function(data_uri) {
            document.getElementById('snapShot').innerHTML =  '<img src=" ' +data_uri+' " width="100" height="100">';
            document.getElementById("campo-foto").style.opacity = "1";
        }
    )
}



document.getElementById('close').addEventListener("click", close_video);

function close_video() {
    document.getElementById('camBox').style.display = 'none';
    document.getElementById('converse-contain').style.display = 'block';
}