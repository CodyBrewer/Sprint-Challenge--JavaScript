// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMakerV2 {
    constructor(attrs) {
        this.length = attrs.length;
        this.width = attrs.width;
        this.height = attrs.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
//Find out the formulas for volume and surface area for cubes and create those 
//methods using the dimension properties from CuboidMaker.  
//Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerV2 {
    volume(){
        return Math.pow(this.length, 3);
    }
    surfaceArea(){
        return 6 * (Math.pow(this.length, 2))
    }
}
const cube = new CubeMaker({
    length: 2,
    width: 2,
    height: 2
})
console.log(cube.volume()); // 8
console.log(cube.surfaceArea()); //24  