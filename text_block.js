class TextBlock {
    constructor(text, cv) {
        this.text = text;
        this.cref = cv;
    }
    draw(w, h) {
        this.cref.font = "30px arial";
        this.cref.fillText(this.text, w, h);
    }
}
