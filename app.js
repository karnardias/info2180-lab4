document.getElementById('searchbutton').addEventListener('click',function(){
    alert('Button clicked!');
    fetch('superheroes.php')
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => alert("Error:" + error))
});
