import { Container } from "pixi.js";
import { UIPauseMenu } from "../classes/UIPauseMenu";

export class Scene extends Container {
    constructor() {
        super();

        const PauseMenu = new UIPauseMenu();
        this.addChild(PauseMenu)
    }
};

