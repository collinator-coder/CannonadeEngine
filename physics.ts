/**
 * Provides access to basic micro:bit functionality.
 */
//% color=190 weight=100 icon="\uf1ec" block="Basic Blocks"
namespace physics {
    //#region class definitions
    export class Vector {
        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
        x: number;
        y: number;
    }
    export class PointMass {
        constructor(x: number, y: number, mass: number) {
            this.pos = new Vector(x, y);
            this.vel = new Vector(0, 0);
            this.mass = mass;
        }
        pos: Vector = new Vector(0, 0);
        vel: Vector = new Vector(0, 0);
        mass: number;
    }
    //#endregion

    //#region c-like class maker functions
    //% blockId=physics_createPointMass block="create point mass at x %x|y %y|with mass %mass"
    export function createPointMass(x: number, y: number, mass: number): PointMass {
        return new PointMass(x, y, mass);
    }
    //% blockId=physics_createVector block="create vector at x %x|y %y"
    export function createVector(x: number, y: number): Vector {
        return new Vector(x, y);
    }
    //#endregion
    
    //#region vector operations
    //% blockId=physics_vector_add block="add vector %a|to vector %b"
    export function vectorAdd(a: Vector, b: Vector): Vector {
        return new Vector(a.x + b.x, a.y + b.y);
    }
    
}