document.getElementById('searchbutton').addEventListener('click', function() {
    const input = document.getElementById('searchtxt').value.trim();
    const result = document.getElementById('result');

    const url = input ? 'superheroes.php?query=' + encodeURIComponent(input) : 'superheroes.php';

    fetch(url)
        .then(res => res.text())
        .then(data => result.innerHTML = data)
        .catch(err => result.innerHTML = "<p>Error loading superheroes.</p>");
});


