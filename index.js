// Your code here

class Polygon {
    constructor(arrayOfSides) {
        this.sides = arrayOfSides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        const perimeter = this.sides.reduce((accumulator, side) => {
            return accumulator + side;
            }, 0);
        return perimeter;
    }
}

class Triangle extends Polygon {
    get isValid() {
        if(this.sides[0] > (this.sides[1] + this.sides[2])) { 
            return false;
        }
        else if (this.sides[1] > (this.sides[0] + this.sides[2])) { 
            return false;
        }
        else if (this.sides[2] > (this.sides[0] + this.sides[1])) { 
            return false;
        }
        else {
            return true;
        }
    }
} 

class Square extends Polygon {
    get area() {
        return this.sides[0] * this.sides[0];
    }

    get isValid(){
        const testLength = this.sides[0];
        for(let i = 1; i < 4; i++) {
            if(this.sides[i] !== testLength) {
                return false;
            }
        return true;
        }
    }
}
