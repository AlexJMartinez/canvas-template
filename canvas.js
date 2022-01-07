window.addEventListener('load', function() {


        let canvas = document.getElementById('canvas');
        let c = canvas.getContext('2d');
        
        
                
        canvas.addEventListener('click', function(e) {
            
                let target = e.target;

                let rect = target.getBoundingClientRect();

                let x = e.clientX - rect.left;
                let y = e.clientY - rect.top;

                function generateColor() {
                  let hexSet = "0123456789ABCDEF";

                  let finalHexString = "#";
                  for (let i = 0; i < 6; i++) {
                    finalHexString += hexSet[Math.ceil(Math.random() * 15)];
                  }
                  return finalHexString;
                }

                function draw() {

                  let radius = Math.floor(Math.random() * 180) 

                  let circle = new Path2D();
                  circle.arc(x, y, radius, 0, 2 * Math.PI);
                  c.fillStyle = generateColor();
                  c.fill(circle)
                

                }

                draw(); 
                

                let img = canvas.toDataURL("image/png", 1);

                // fix this so that the download comes out correctly
                // currently png only shows first draw instance rather than
                // the entire contents/state of the canvas.

                let download = document.getElementById('download')

                download.addEventListener('click', function() {
                document.write('<img src="'+img+'"/>')
        })

                
        })
     
        function clear() {
          c.clearRect(0, 0, canvas.width, canvas.height)
        }

        let button = document.getElementById('button')
        button.addEventListener('click', clear)

        



});
        
    


  

 

 

  