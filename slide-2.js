function myFunction3() {
      var x = document.getElementsByClassName("testid2")[0];

    x.addEventListener("animationend", function(e) {
        e.preventDefault();

        if(x.style.animationName == "slide-left2") {
            x.style.display = "none";
        }
    });

    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.animation = "0.5s slide-right2";
        x.style.transform = "translateX(-40%)";
        }

}

function myFunction4() {
      var x = document.getElementsByClassName("testid2")[0];
            
      {
          x.style.animation = "0.5s slide-left2";
      }
}
