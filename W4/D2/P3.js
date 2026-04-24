
const container = document.getElementById("container")
//position:
// afterbegin
// beforebegin
//beforeend
//afterend
//insertAdjacentHTML() method of the resulting nodes into the DOM tree at a specified position 
document.getElementById("btn").addEventListener("click",
    function(){
    container.insertAdjacentHTML("beforebegin",
        "<p>Dynamically inserted</p>");
}
);