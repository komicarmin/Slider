class Slider {

    constructor(options) {
        this.container = options.container || "body";
        this.color = options.color || "blue";
        this.max = options.max || 100;
        this.min = options.min || 0;
        this.step = options.step || 1;
        this.radius = options.radius || 100;
        this.value = 0;
    }

    addSlider() {
        var container = document.querySelector(this.container);

        container.innerHTML += '<p style="color:' + this.color + '">Slider</p>';
    }
}

