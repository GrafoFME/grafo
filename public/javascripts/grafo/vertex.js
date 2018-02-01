class Vertex {
    constructor(sex, color, x, y) {
        this.sex = sex;
        this.c = color;
        this.pos = createVector(x, y);
    }

    setColor(color) {
        this.c = color;
    }

    show() {
        stroke(255);
        fill(this.c);

        ellipse(this.pos.x, this.pos.y, scale, scale);
        fill(255);
        switch (this.sex) {
            case 'b':
                drawBoy(this.pos);
                break;
            case 'g':
                drawGirl(this.pos);
                break;
            default:
                drawAlien(this.pos);
        }
    }
}

function drawBoy(pos) {
    ellipse(pos.x, pos.y, scale/2, scale/2);
}

function drawGirl(pos) {
    ellipse(pos.x, pos.y, scale/2, scale/2);
}

function drawAlien(pos) {
    ellipse(pos.x, pos.y, scale/2, scale/2);
}