function myFunction() {
      var x = document.getElementById("testdiv");

    x.addEventListener("animationend", function(e) {
        e.preventDefault();

        if(x.style.animationName == "slide-left") {
            x.style.display = "none";
        }
    });

    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.animation = "1s slide-right";
        x.style.transform = "translateX(40%)";
        }

}

function myFunction2() {
      var x = document.getElementById("testdiv");
            
      {
          x.style.animation = "1s slide-left";
      }
}
