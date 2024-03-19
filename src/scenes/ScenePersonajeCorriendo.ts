import { Container, Graphics } from "pixi.js";
import { PersonajeCorriendo } from "../game/PersonajeCorriendo";
import { IUpdateable } from "../utils/IUpdateable";
import { PhysicsContainer } from "../game/PhysicsContainer";
import { app } from "..";


export class ScenePersonajeCorriendo extends Container implements IUpdateable {
    private personajeCorriendo: PersonajeCorriendo;
    private physPersonajeCorriendo: PhysicsContainer;
        constructor() {
        super();

        this.personajeCorriendo = new PersonajeCorriendo();

        this.physPersonajeCorriendo = new PhysicsContainer();
        this.physPersonajeCorriendo.speed.x = 0;
        this.physPersonajeCorriendo.speed.y = 0;
        this.physPersonajeCorriendo.acceleration.set(0,0);

        this.addChild(this.physPersonajeCorriendo);

        const auxZero = new Graphics();
        auxZero.beginFill(0xFF00FF);
        auxZero.drawCircle(0,0,10);
        auxZero.endFill();

        this.physPersonajeCorriendo.addChild(this.personajeCorriendo);
        this.physPersonajeCorriendo.addChild(auxZero);
        
    }

    public update(deltaTime: number, deltaFrame: number): void {
        this.personajeCorriendo.update(deltaFrame);
        const dt = deltaTime / 1000;
        this.physPersonajeCorriendo.update(dt);
        
        if(this.physPersonajeCorriendo.x +this.physPersonajeCorriendo.width > app.screen.width){
            this.physPersonajeCorriendo.x = app.screen.width - this.physPersonajeCorriendo.width;
            this.physPersonajeCorriendo.speed.x = this.physPersonajeCorriendo.speed.x * -1;
        } else if (this.physPersonajeCorriendo.x + this.physPersonajeCorriendo.width < 0){
            this.physPersonajeCorriendo.speed.x = this.physPersonajeCorriendo.speed.x * -1;
        };
        
        if(this.physPersonajeCorriendo.y +this.physPersonajeCorriendo.height > app.screen.height){
            this.physPersonajeCorriendo.speed.y = this.physPersonajeCorriendo.speed.y * -1;
        } else if(this.physPersonajeCorriendo.y +this.physPersonajeCorriendo.height < 0){
            this.physPersonajeCorriendo.speed.y = this.physPersonajeCorriendo.speed.y * -1;
        }

        console.log("Velocidad: ", this.physPersonajeCorriendo.speed, this);
        console.log("Aceleración: ", this.physPersonajeCorriendo.acceleration, this);
        
    }

};
