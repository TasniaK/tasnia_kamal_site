function myMove() {
    var elem = document.getElementById("myAnimation"); 
    var pos = 0;
    var id = setInterval(frame, 50);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.top = pos + 'px'; 
            elem.style.left = pos + 'px'; 
        }
    }
}

window.onload = function() {
    myMove();
};

function TrackMouse() {
	var id = setInterval(showCoords(event), 5000);
	function showCoords(event) {
    	var x = event.clientX;
    	var y = event.clientY;
    	var coords = "X coords: " + x + ", Y coords: " + y;
    	document.getElementById("demo").innerHTML = coords;
    }

}