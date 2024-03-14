import { Container, NineSlicePlane, Point, Texture } from "pixi.js";
import { app } from "..";

export class UIPuseMenu extends Container {
    constructor(){
        super();

        const panelBackground: NineSlicePlane = new NineSlicePlane(
            Texture.from("boxOrangeRounded"),
            35,35,35,35
        );

        this.addChild(panelBackground);

        panelBackground.width = app.screen.width / 1.3;
        panelBackground.height = app.screen.height / 1.2;
        panelBackground.pivot = new Point((panelBackground.width / 2),((panelBackground.height / 2)));
        panelBackground.position.x = app.screen.width / 2;
        panelBackground.position.y = app.screen.height / 2;

        const buttonContinueBackground: NineSlicePlane = new NineSlicePlane(
            Texture.from("iconButtonLargeGreenRounded"),
            35,35,35,35
        );
        this.addChild(buttonContinueBackground);
        buttonContinueBackground.width = panelBackground.width / 4;
        buttonContinueBackground.height = panelBackground.height / 4;
        buttonContinueBackground.pivot = new Point((buttonContinueBackground.width / 2),((buttonContinueBackground.height / 2)));
        buttonContinueBackground.position.x = panelBackground.width / 3;
        buttonContinueBackground.position.y = panelBackground.height / 1.2 ;

        const buttonContinue: NineSlicePlane = new NineSlicePlane(
            Texture.from("whiteOutlineArrow"),
            35,35,35,35
        );
        this.addChild(buttonContinue);

        buttonContinue.width = buttonContinueBackground.width / 1.3;
        buttonContinue.height = buttonContinueBackground.height / 1.3;
        buttonContinue.pivot = new Point((buttonContinue.width / 2),((buttonContinue.height / 2)));
        buttonContinue.position.x = buttonContinueBackground.position.x;
        buttonContinue.position.y = buttonContinueBackground.position.y;

    }
};