
function draw() {
    var canvas = document.getElementById('canvas');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (canvas.getContext) {
      var c = canvas.getContext('2d');

      
     c.beginPath();
     c.quadraticCurveTo(50, 50 , 100, 75);
     c.quadraticCurveTo(25, 100 , 65, 75);
     c.closePath();   
     c.stroke();

     c.beginPath();
     c.quadraticCurveTo(10, 50 , 100, 75);
     c.quadraticCurveTo(25, 100 , 65, 75);
     c.closePath();
     c.strokeStyle = "red"   
     c.stroke();

     c.beginPath();
     c.quadraticCurveTo(10, 50 , 90, 75);
     c.quadraticCurveTo(25, 125 , 65, 75);
     c.closePath();   
     c.fill();
    }
  }