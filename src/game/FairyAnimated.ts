import { AnimatedSprite, Container, Texture, Ticker } from "pixi.js";
import { Keyboard } from "../utils/Keyboard";
import { app } from "..";

export class FairyAnimated extends Container {
    private fairyAnimated: AnimatedSprite;

    constructor(){
        super();

        this.fairyAnimated = new AnimatedSprite(
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
            false
        );
        this.fairyAnimated.position.set(700,200);
        this.fairyAnimated.width = 150;
        this.fairyAnimated.height = 150;
        this.fairyAnimated.play();
        this.fairyAnimated.animationSpeed = 0.4;
        this.addChild(this.fairyAnimated);

        Ticker.shared.add(this.update, this);
    }

    public update(deltaFrame:number){
        this.fairyAnimated.update(deltaFrame);

        if (Keyboard.state.get("KeyD")){
            this.fairyAnimated.x++;
        };

        if (Keyboard.state.get("KeyA")){
            this.fairyAnimated.x--;
        };

        if (Keyboard.state.get("KeyW")){
            this.fairyAnimated.y--;
        };

        if (Keyboard.state.get("KeyS")){
            this.fairyAnimated.y++;
        };

        if(this.fairyAnimated.x > app.screen.width){
            this.fairyAnimated.x = 0;
        };

        if(this.fairyAnimated.x < 0){
            this.fairyAnimated.x = app.screen.width;
        };

        if(this.fairyAnimated.y > app.screen.height){
            this.fairyAnimated.y = 0;
        };

        if(this.fairyAnimated.y < 0){
            this.fairyAnimated.y = app.screen.height;
        };
    }
};