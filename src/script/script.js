document.addEventListener("DOMContentLoaded", function(event) {
    var slider1 = new Slider({
        container: "#slider",
        color: "#0055FF"
    });

    var slider2 = new Slider({
        container: "#slider",
        color: "#FF5500"
    });

    var slider3 = new Slider({
        container: "#slider",
        color: "#22FF33"
    });

    slider1.addSlider();
    slider2.addSlider();
    slider3.addSlider();
});