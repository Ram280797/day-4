
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        alert(xhr.name,regions,population);
    }
}
xhr.open('GET', 'https://restcountries.com/v2/all', true);
xhr.send(null);


$.get('https://restcountries.com/v2/all', function(name,regions,population) {
    alert(name,regions,population);
});