import { Container } from "pixi.js";
import { FairyAnimated } from "../game/FairyAnimated";
import { IUpdateable } from "../utils/IUpdateable";


export class SceneTwo extends Container implements IUpdateable {
    private fairyAnimated: FairyAnimated;
    constructor() {
        super();

        this.fairyAnimated = new FairyAnimated();
        this.addChild(this.fairyAnimated);
        
    }

    public update(_deltaTime: number, deltaFrame: number): void {
        this.fairyAnimated.update(deltaFrame);
    }

};
