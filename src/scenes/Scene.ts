import { Container } from "pixi.js";
import { UIPuseMenu } from "../classes/UIPuseMenu";

export class Scene extends Container {
    constructor() {
        super();

        const UIPauseMenu = new UIPuseMenu();
        this.addChild(UIPauseMenu)
    }
};