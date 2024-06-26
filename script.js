document.addEventListener('DOMContentLoaded', function() {
    // Запускаем музыку
    var audio = document.querySelector('audio');
    audio.play();

    // Скрываем плеер
    audio.style.display = 'none';
});

document.getElementById('jokeButton').addEventListener('click', generateJoke);

function generateJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            document.getElementById('joke').innerText = `${data.setup} - ${data.punchline}`;
        })
        .catch(error => {
            document.getElementById('joke').innerText = 'Не удалось загрузить анекдот. Попробуйте снова.';
        });
}
