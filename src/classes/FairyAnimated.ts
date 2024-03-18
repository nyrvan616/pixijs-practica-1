import { AnimatedSprite, Container, Texture } from "pixi.js";

export class FairyAnimated extends Container {

    constructor(){
        super();

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
        fairyAnimated.position.set(700,200);
        fairyAnimated.play();
        fairyAnimated.animationSpeed = 0.4;
        this.addChild(fairyAnimated);
    }  
};