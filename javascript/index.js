// comment
<h1 id="demo"> hello </h1>

<script>
document.getElementById("demo").onmouseover = function() {mouseOver()};
document.getElementById("demo").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("demo").style.color = "rgb(255, 0, 167)";
}

function mouseOut() {
    document.getElementById("demo").style.color = "rgb(128, 0, 196)";
}
</script>
