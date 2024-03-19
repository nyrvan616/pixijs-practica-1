import { AnimatedSprite, Container, Texture, Ticker } from "pixi.js";
import { Keyboard } from "../utils/Keyboard";
import { app } from "..";

export class PersonajeCorriendo extends Container {
    private personajeCorriendo: AnimatedSprite;

    constructor() {
        super();

        this.personajeCorriendo = new AnimatedSprite(
            [
                Texture.from("PersonajeCorriendo-1"),
                Texture.from("PersonajeCorriendo-2"),
                Texture.from("PersonajeCorriendo-3"),
                Texture.from("PersonajeCorriendo-4"),
                Texture.from("PersonajeCorriendo-5"),
                Texture.from("PersonajeCorriendo-6"),
                Texture.from("PersonajeCorriendo-7"),
                Texture.from("PersonajeCorriendo-8"),
                Texture.from("PersonajeCorriendo-9"),
                Texture.from("PersonajeCorriendo-10"),
                Texture.from("PersonajeCorriendo-11"),
                Texture.from("PersonajeCorriendo-12")
            ],
            false
        );
        this.personajeCorriendo.position.set(app.screen.width / 2, app.screen.height / 2);
        this.personajeCorriendo.width = 150;
        this.personajeCorriendo.height = 150;
        this.personajeCorriendo.anchor.set(0.5);
        this.personajeCorriendo.play();
        this.personajeCorriendo.animationSpeed = 0.1;
        this.addChild(this.personajeCorriendo);

        Ticker.shared.add(this.update, this);
    }

    public update(deltaFrame: number) {
        this.personajeCorriendo.update(deltaFrame);

        if (Keyboard.state.get("KeyD")) {
            this.personajeCorriendo.x++;
        };

        if (Keyboard.state.get("KeyA")) {
            this.personajeCorriendo.x--;
        };

        if (Keyboard.state.get("KeyW")) {
            this.personajeCorriendo.y--;
        };

        if (Keyboard.state.get("KeyS")) {
            this.personajeCorriendo.y++;
        };

        if (this.personajeCorriendo.x > app.screen.width) {
            this.personajeCorriendo.x = 0;
        };

        if (this.personajeCorriendo.x < 0) {
            this.personajeCorriendo.x = app.screen.width;
        };

        if (this.personajeCorriendo.y > app.screen.height) {
            this.personajeCorriendo.y = 0;
        };

        if (this.personajeCorriendo.y < 0) {
            this.personajeCorriendo.y = app.screen.height;
        };
    }
};