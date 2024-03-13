import { AnimatedSprite, Container, Texture } from "pixi.js";
import { LinkAndFairy } from "./LinkAndFairy";

export class Scene extends Container {
    constructor(){
        super();

        const linkAndFairy: LinkAndFairy = new LinkAndFairy();
        linkAndFairy.scale.set(0.5);
        linkAndFairy.x = 300;
        linkAndFairy.y = 150;
        this.addChild(linkAndFairy);

        const linkAndFairy2: LinkAndFairy = new LinkAndFairy();
        linkAndFairy.y = 0;
        this.addChild(linkAndFairy2);

        const fairyAnimated: AnimatedSprite = new AnimatedSprite(
            [
                Texture.from("FairyFlaying1"),
                Texture.from("FairyFlaying2"),
                Texture.from("FairyFlaying3"),
                Texture.from("FairyFlaying4"),
                Texture.from("FairyFlaying5"),
                Texture.from("FairyFlaying6"),
                Texture.from("FairyFlaying7"),
                Texture.from("FairyFlaying8"),
            ],
            true
        );
        fairyAnimated.play();
        fairyAnimated.animationSpeed = 0.4;
        this.addChild(fairyAnimated);


    }
};