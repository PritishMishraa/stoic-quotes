function myFunction() {
    fetch(`https://stoic-quotes-pritish.herokuapp.com/quote`)
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