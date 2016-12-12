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
        } else
        {
            ctxt.fillStyle = "black";
        }
        ctxt.font = "30px arial";
        ctxt.fillText(this.text, w, h);
    }
}

class DocumentAnno {
    constructor(words, cv) {
        this.blocks = words.split(" ").map(function(word){
            return new TextBlock(word, cv);
        });
        this.cref = cv;
        this.words_per_line = 6;
        this.lines_per_scr = 6;
    }
    clear() {
        this.cref.width = this.cref.width 
    }
    draw() {
        for (var i = 0; i < this.blocks.length; i++)
        {
            var x = i % this.words_per_line;
            var y = Math.floor(i / this.words_per_line);

            var w = (x + 0.5) * this.cref.width / (this.words_per_line + 1);
            var h = (y + 1) * this.cref.height / (this.lines_per_scr + 1);
            this.blocks[i].draw(w, h);
        }
    }
    handle_button(i) {
        this.blocks[i].highlight = !this.blocks[i].highlight
    }
    handle_next() {
        this.blocks.splice(0, this.words_per_line);
    }
}
