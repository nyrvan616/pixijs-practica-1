import { Container } from "pixi.js";
import { FairyAnimated } from "../classes/FairyAnimated";

export class SceneTwo extends Container {
    constructor() {
        super();

        const fairyAnimated: FairyAnimated = new FairyAnimated();
        this.addChild(fairyAnimated);
    }
};
