

function getLinkInfo(){
    var links = document.getElementsByTagName("a");

    alert('Numero de links: '+ links.length);
    alert('Primer link es: '+ links[0].innerHTML);
    alert('ultimo link es: '+ links[links.length - 1].innerHTML);
}
