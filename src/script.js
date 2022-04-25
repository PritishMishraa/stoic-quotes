function myFunction() {
    fetch(`http://localhost:8080/quote`)
        .then(response => response.json())
        .then(data => update(data));
}

myFunction();

function update(data) {
    document.querySelector(".quote").innerHTML = data.text
    document.querySelector(".author").innerHTML = data.author
    document.querySelector(".source").innerHTML = data.source
}

document.addEventListener("click", myFunction);