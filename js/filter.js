const filterBox = document.querySelectorAll(".setting_filter");

document.querySelector("nav").addEventListener("click", event => {
    if (event.target.tagName !== "LI"){ return false;}

    let filterClass = event.target.dataset["f"];

    filterBox.forEach(elem => {
        elem.classList.remove("hide");
        if (!elem.classList.contains(filterClass) && filterClass !== "all") {
            elem.classList.add("hide");
        }
    });
});



function filterBurger() {
    document.getElementById("filter_burger").classList.toggle("show");
}
  
window.onclick = function(event) {
    if (!event.target.matches('.filter_btn')) {
        var dropdowns = document.getElementsByClassName("dropdown_filter");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
        }
    }
};