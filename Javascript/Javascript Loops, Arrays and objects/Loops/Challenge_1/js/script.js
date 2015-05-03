
var html = '';
var red;
var green;
var blue;
var rgbColor;

function rgb(){
red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
}	

for(var i=1; i<=32; i+=1){
rgb();
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';
}


document.write(html);

setTimeout(function () {
       window.location.href = "index.html"; //Will reload index page
    }, 500); //will call the function after 2 secs.
































