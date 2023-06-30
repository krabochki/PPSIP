window.onload = function() {
    setTimeout(showStatus, 5000);
    setTimeout(openNewWindow,5000);
};

function showStatus() {
    var status = document.readyState;
    var newNode = document.createElement("p");
    newNode.innerHTML = "Статус загрузки документа: " +  status;
    newNode.id = "node2";
    var node1 = document.getElementById("node1");
    node1.parentNode.insertBefore(newNode, node1.nextSibling);
    
}

function insertNode(button) {
    var newNode = document.createElement("p");
    newNode.innerHTML = "Место рождения - город Гродно";
    var node2 = document.getElementById("node2");
    node2.parentNode.insertBefore(newNode, node2.nextSibling);
    button.disabled = true;

}

function changeStyles(button) {
    var body = document.body;
    body.style.backgroundColor = "lightblue";

    var paragraphs = document.getElementsByTagName("p");
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.fontFamily = "Verdana";
        paragraphs[i].style.fontSize = "14px";
        paragraphs[i].style.color = "green";
    }

    var images = document.getElementsByTagName("img");
    for (var j = 0; j < images.length; j++) {
        images[j].style.border = "1px solid red";
    }
    button.disabled = true;

}

var insertNewNode = document.getElementsByTagName("button")[0];
insertNewNode.addEventListener('click', function(){insertNode(this)})
var changeStyleButton = document.getElementsByTagName("button")[1];
changeStyleButton.addEventListener('click', function(){changeStyles(this)})

window.addEventListener('beforeunload', function(event) {
    event.preventDefault();
    setTimeout(openNewWindow, 5000);
});

function openNewWindow() {
    var url = window.location.href;
    window.open('', '_blank').document.write('<h1>Полный адрес URL документа:</h1><p>' + url + '</p>');
}