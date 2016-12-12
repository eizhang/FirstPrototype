class TextBlock {
    constructor(text, cv) {
        this.text = text;
        this.cref = cv;
        this.highlight = false;
    }
    draw(w, h) {
        var ctxt = this.cref.getContext("2d");
        if (this.highlight)
        {
            ctxt.fillStyle = "blue";
        }
        ctxt.font = "30px arial";
        ctxt.fillText(this.text, w, h);
    }
}

class Sentence {
}
