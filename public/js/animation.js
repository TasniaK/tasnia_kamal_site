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

function Attract() {
    var heart = element.getBoundingClientRect();
    console.log(heart.top, heart.left);
    var x = document.onmousemove(event.pageX);
    var y = document.onmousemove(event.pageY);
    var id = setInterval(frame, 50);
    function frame() {
        if (x == heart.top and y == heart.left) {
            clearInterval(id);
        } else {
            p++;
            elem.style.top = heart.top + 'px';
            elem.style.left = heart.left + 'px';
        }
    }
}
