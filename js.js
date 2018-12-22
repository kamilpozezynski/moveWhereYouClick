var circle = document.querySelector("#circle");
var container = document.querySelector("#container");

container.addEventListener("click", getClickPosition, false);

function getClickPosition(e){
	var parentPosition = getPosition(container);
	var xPosition = e.clientX - parentPosition.x - (circle.offsetWidth / 2);
	var yPosition = e.clientY - parentPosition.y - (circle.offsetHeight / 2);
	var translate3dValue = "translate3d(" + xPosition + "px," + yPosition + "px,0)";
	circle.classList.add("myStyle");
	circle.style.transform = translate3dValue;
}
function getPosition(el) {
  var xPosition = 0;
  var yPosition = 0;
 
  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScrollPos = el.scrollLeft || document.documentElement.scrollLeft;
      var yScrollPos = el.scrollTop || document.documentElement.scrollTop;
 
      xPosition += (el.offsetLeft - xScrollPos + el.clientLeft);
      yPosition += (el.offsetTop - yScrollPos + el.clientTop);
    } else {
      xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
    }
 
    el = el.offsetParent;
  }
  return {
    x: xPosition,
    y: yPosition
  };
}