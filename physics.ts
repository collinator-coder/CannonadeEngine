/**
 * Provides access to basic micro:bit functionality.
 */
//% color=190 weight=100 icon="\uf1ec" block="Basic Blocks"
namespace physics {
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
            this.x = x;
            this.y = y;
            this.mass = mass;
        }
        x: number;
        y: number;
        vx: number;
        vy: number;
        mass: number;
    }
}