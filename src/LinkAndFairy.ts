import { Container, Point, Sprite } from "pixi.js";
import { app } from ".";

export class LinkAndFairy extends Container {
    constructor(){
        super();

        const link: Sprite = Sprite.from("Link");

        link.anchor.set(0.5);
        link.position.set(app.screen.width / 2,app.screen.height / 2);    
        link.scale.set(0.5,0.5);


        const fairy: Sprite = Sprite.from("Fairy");     
        fairy.position.set(700,70);
        fairy.angle = 45;    
        this.addChild(fairy);
        this.addChild(link);

        console.log(fairy.toGlobal(new Point()));
        console.log(fairy.parent.toGlobal(fairy.position));
    }
};