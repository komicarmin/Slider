class Slider {
    
    constructor(options) {
        this.id = Slider.getId();
        this.container = options.container || "body";
        this.color = options.color || "blue";
        this.max = options.max || 100;
        this.min = options.min || 0;
        this.step = options.step || 1;
        this.radius = options.radius || 100;
        this.value = 0;
    }

    static getId() {
        if (!this.count) this.count = 1
        else this.count++

        return this.count
    }

    addSlider() {
        var container = document.querySelector(this.container);
        var sliderValues = container.querySelector(".slider-values");
        var sliderSliders = container.querySelector(".slider-sliders");

        // TODO: Do something with this repetitive code
        if (!sliderValues) 
            container.innerHTML += `<div class="slider-values">
                <div class="value-wrap slider-${this.id}">
                    <div class="value">$${this.value}</div>
                    <div class="color" style="background-color: ${this.color}"></div>
                    <div class="title">Title</div>
                </div>
            </div>`;
        else
            sliderValues.innerHTML += `<div class="value-wrap slider-${this.id}">
                <div class="value">$${this.value}</div>
                <div class="color" style="background-color: ${this.color}"></div>
                <div class="title">Title</div>
            </div>`;

        if (!sliderSliders) 
            container.innerHTML += '<div class="slider-sliders"></div>';
    }
}

