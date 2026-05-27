function myFunction5() {
      var x = document.getElementsByClassName("testid3")[0];

    x.addEventListener("animationend", function(e) {
        e.preventDefault();

        if(x.style.animationName == "slide-down") {
            x.style.display = "none";
        }
    });

    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.animation = "0.5s slide-up";
        x.style.transform = "translateY(10%)";
        }

}

function myFunction6() {
      var x = document.getElementsByClassName("testid3")[0];
            
    if (x.style.transform = "translateY(10%)") {
        x.style.animation = "0.5s slide-down"
        }      
      
      {
          ;
      }
}
