var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        this.classList.remove('active');
        content.style.display = "none";
    } else {
        for(var j = 0; j < coll.length; j++){
            //close all other details before showing the current one
            coll[j].classList.remove('active');
            coll[j].nextElementSibling.style.display = 'none';
        }
        this.classList.toggle("active");
        content.style.display = "block";
    }
  });
}