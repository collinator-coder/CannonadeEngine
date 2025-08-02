/**
 * Provides access to basic micro:bit functionality.
 */
//% color=190 weight=100 icon="\uf1ec" block="Basic Blocks"
namespace physics
{
    export class Vector {
        constructor(public x: number, public y: number) { }

        // Adds another vector to this vector
        add(other: Vector): Vector {
            return new Vector(this.x + other.x, this.y + other.y);
        }

        // Subtracts another vector from this vector
        subtract(other: Vector): Vector {
            return new Vector(this.x - other.x, this.y - other.y);
        }

        // Multiplies this vector by a scalar
        multiply(scalar: number): Vector {
            return new Vector(this.x * scalar, this.y * scalar);
        }

        // Calculates the magnitude of the vector
        magnitude(): number {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }
}

}