/**
 * Provides access to Cannonade physics.
 */
//% color=190 weight=100 icon="\uf1ec" block="Cannonade Physics"
namespace physics {
    //#region class definitions
    export class Vector {
        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
        x: number;
        y: number;
        vectorAdd(b: Vector): Vector {
            return new Vector(this.x + b.x, this.y + b.y);
        }
        vectorSubtract(b: Vector): Vector {
            return new Vector(this.x - b.x, this.y - b.y);
        }
        vectorMultiply(b: Vector | number): Vector {
            if (typeof b === "number") {
                return new Vector(this.x * b, this.y * b);
            } else {
                return new Vector(this.x * b.x, this.y * b.y);
            }
        }
        vectorDivide(b: Vector | number): Vector {
            if (typeof b === "number") {
                return new Vector(this.x / b, this.y / b);
            } else {
                return new Vector(this.x / b.x, this.y / b.y);
            }
        }
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
        applyForce(force: Vector): void {
            // F = m * a => a = F / m
            const acceleration = force.vectorDivide(this.mass);
            this.vel = this.vel.vectorAdd(acceleration);
            this.pos = this.pos.vectorAdd(this.vel);
        }
        applyImpulse(impulse: Vector): void {
            // Impulse changes velocity directly
            this.vel = this.vel.vectorAdd(impulse.vectorDivide(this.mass));
            this.pos = this.pos.vectorAdd(this.vel);
        }
        setPosition(x: number, y: number): void {
            this.pos = new Vector(x, y);
        }
        setVelocity(x: number, y: number): void {
            this.vel = new Vector(x, y);
        }
        getPosition(): Vector {
            return this.pos;
        }
        getVelocity(): Vector {
            return this.vel;
        }
        getMass(): number {
            return this.mass;
        }
    }
    //#endregion

    //#region functional class definition functions
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
        return a.vectorAdd(b);
    }
    //% blockId=physics_vector_subtract block="subtract vector %b|from vector %a"
    export function vectorSubtract(a: Vector, b: Vector): Vector {
        return a.vectorSubtract(b);
    }
    //% blockId=physics_vector_multiply block="multiply vector %a|by vector or number %b"
    export function vectorMultiply(a: Vector, b: Vector | number): Vector {
        return a.vectorMultiply(b);
    }
    //% blockId=physics_vector_divide block="divide vector %a|by vector or number %b"
    export function vectorDivide(a: Vector, b: Vector | number): Vector {
        return a.vectorDivide(b);
    }
    //#endregion
    
    //#region point mass operations
    //% blockId=physics_point_mass_apply_force block="apply force %force|to point mass %pm"
    export function applyForceToPointMass(pm: PointMass, force: Vector): void {
        pm.applyForce(force);
    }
    //% blockId=physics_point_mass_apply_impulse block="apply impulse %impulse|to point mass %pm"
    export function applyImpulseToPointMass(pm: PointMass, impulse: Vector): void {
        pm.applyImpulse(impulse);
    }
    //% blockId=physics_point_mass_set_position block="set position of point mass %pm|to x %x|y %y"
    export function setPointMassPosition(pm: PointMass, x: number, y: number): void {
        pm.setPosition(x, y);
    }
    //% blockId=physics_point_mass_set_velocity block="set velocity of point mass %pm|to x %x|y %y"
    export function setPointMassVelocity(pm: PointMass, x: number, y: number): void {
        pm.setVelocity(x, y);
    }
    //% blockId=physics_point_mass_get_position block="get position of point mass %pm"
    export function getPointMassPosition(pm: PointMass): Vector {
        return pm.getPosition();
    }
    //% blockId=physics_point_mass_get_velocity block="get velocity of point mass %pm"
    export function getPointMassVelocity(pm: PointMass): Vector {
        return pm.getVelocity();
    }
    //% blockId=physics_point_mass_get_mass block="get mass of point mass %pm"
    export function getPointMassMass(pm: PointMass): number {
        return pm.getMass();
    }
    //#endregion
}