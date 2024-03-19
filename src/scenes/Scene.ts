import { Container } from "pixi.js";
import { UIPauseMenu } from "../game/UIPauseMenu";

export class Scene extends Container {
    constructor() {
        super();

        const PauseMenu = new UIPauseMenu();
        this.addChild(PauseMenu)
    }
};

