<script>
// script to add class to the  databases so they get tracked as outlinks in matomo
  
function delayedFunction() {
// Select the div by its ID for trials and new databases
const databaseDiv = document.getElementById('s-lg-widget-1650654776093');

// Select all a elements within the div
const links = databaseDiv.getElementsByTagName('a');

// Loop through each a element and add the class
    for (let i = 0; i < links.length; i++) {
        links[i].classList.add('matomo_link'); 
    }
}
// add a delay because the widgets load after the initial page load
window.onload = function() {
            setTimeout(delayedFunction, 4000);
        };
</script>
