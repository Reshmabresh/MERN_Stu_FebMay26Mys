
const container = document.getElementById("container")
//position:
// afterbegin
// beforebegin
//beforeend
//afterend
document.getElementById("btn").addEventListener("click",
    function(){
    container.insertAdjacentHTML("beforebegin",
        "<p>Dynamically inserted</p>");
}
);