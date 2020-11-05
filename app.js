
let div = document.createElement("DIV");
let image1 = document.createElement("IMG");
document.body.appendChild(div);
div.appendChild(image1);
div.setAttribute("class", "center-div");
image1.setAttribute("src","201369-84-1.jpg")
function on() {

image1.className= `rotate_fan`
}
function of() {
    image1.className= `rotate_fans`

}
