import { Container } from "pixi.js";
import { UIPuseMenu } from "../classes/UIPuseMenu";

export class Scene extends Container {
    constructor() {
        super();

        const UIPauseMenu: UIPuseMenu = new UIPuseMenu();
        this.addChild(UIPauseMenu)
    }
};