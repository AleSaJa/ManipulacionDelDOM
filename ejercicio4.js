// Exercise #4
//1. Select the section with a container id without using querySelector.
var seccion = document.getElementById("container");

//2. Select the section with a container id using querySelector.
var seccionQuery = document.querySelector("#container");

//3. Select all the items list with a class of "second".
var listasSecond = document.getElementsByClassName("second");

//4. Select a list item with a class of third, but only the list item inside of the ol tag.
var oltag = document.getElementsByTagName("ol")[0];
var olthird=oltag.getElementsByClassName("third")[0];
console.log(olthird.innerHTML);

//5. Give the text "Hello!" to the section with a container id.
seccion.innerHTML +=`<p style="text-align: center;">Hola</p>`;

var footer = document.getElementsByClassName("footer")[0];
//6. Add the main class to the div with a footer class.
footer.classList.add("main");

//7. Remove the main class on the div with a footer class.
footer.classList.remove("main");

//8. Create a new li element.
//9. Give the li the text "four".
//10. Append the li to the ul element.
let ul = seccion.getElementsByTagName("ul")[0]; 

ul.innerHTML+= `<li>Four</li>`;


// Challenge Yourself


//1. Loop over all the li inside the ol tag and give them a background "green" color.
oltag = document.getElementsByTagName("ol")[0];
for(element of oltag.children){
    element.style.background = "green";
}

//2. Remove the div with a footer class.
var body = document.getElementsByTagName("body")[0];
body.removeChild(document.getElementsByClassName("footer")[0]);