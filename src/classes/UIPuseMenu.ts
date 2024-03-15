import { Container, Sprite, Point, Text } from "pixi.js";
import { app } from "..";

export class UIPuseMenu extends Container {
    constructor(){
        super();

        const panelPausa = new Container();
        this.addChild(panelPausa);
        panelPausa.pivot = new Point((app.screen.width / 2),((app.screen.height / 2)));
        panelPausa.x = app.screen.width / 2;
        panelPausa.y = app.screen.height / 2;
        
        const panelBackground = Sprite.from("boxOrangeRounded");

        panelPausa.addChild(panelBackground);
        panelBackground.width = app.screen.width / 1.3;
        panelBackground.height = app.screen.height / 1.2;
        panelBackground.anchor.set(0.5);
        panelBackground.position.x = panelPausa.position.x;
        panelBackground.position.y = panelPausa.position.y;

        //console.log("Medidas panelBackground: " + panelBackground.width + " " + panelBackground.height + " " + panelBackground.position.x + " " + panelBackground.position.y);
        //console.log("Medidas panelPausa: " + panelPausa.width + " " + panelPausa.height + " " + panelPausa.position.x + " " + panelPausa.position.y);

        //Boton Continue
        const buttonContinueBackground = Sprite.from("iconButtonLargeGreenRounded");
        panelPausa.addChild(buttonContinueBackground);
        buttonContinueBackground.width = panelBackground.width / 4;
        buttonContinueBackground.height = panelBackground.height / 4;
        buttonContinueBackground.anchor.set(0.5);
        buttonContinueBackground.position.x = panelBackground.width / 3;
        buttonContinueBackground.position.y = panelBackground.height / 1.2 ;

        const buttonContinue = Sprite.from("whiteOutlineArrow");
        panelPausa.addChild(buttonContinue);

        buttonContinue.width = buttonContinueBackground.width / 1.3;
        buttonContinue.height = buttonContinueBackground.height / 1.3;
        buttonContinue.anchor.set(0.5);
        buttonContinue.position.x = buttonContinueBackground.position.x;
        buttonContinue.position.y = buttonContinueBackground.position.y;


        //Boton Restart
        const buttonRestartBackground = Sprite.from("iconButtonLargeGreenRounded");
        panelPausa.addChild(buttonRestartBackground);
        buttonRestartBackground.width = panelBackground.width / 4;
        buttonRestartBackground.height = panelBackground.height / 4;
        buttonRestartBackground.anchor.set(0.5);
        buttonRestartBackground.position.x = panelBackground.width / 1.5;
        buttonRestartBackground.position.y = panelBackground.height / 1.2 ;

        const buttonRestart = Sprite.from("whiteOutlineReturn");
        panelPausa.addChild(buttonRestart);

        buttonRestart.width = buttonRestartBackground.width / 1.3;
        buttonRestart.height = buttonRestartBackground.height / 1.3;
        buttonRestart.anchor.set(0.5);
        buttonRestart.position.x = buttonRestartBackground.position.x;
        buttonRestart.position.y = buttonRestartBackground.position.y;

        //Boton Exit
        const buttonExitBackground = Sprite.from("iconButtonLargeGreenRounded");
        panelPausa.addChild(buttonExitBackground);
        buttonExitBackground.width = panelBackground.width / 4;
        buttonExitBackground.height = panelBackground.height / 4;
        buttonExitBackground.anchor.set(0.5);
        buttonExitBackground.position.x = panelBackground.width / 1.03;
        buttonExitBackground.position.y = panelBackground.height / 1.2 ;

        const buttonExit = Sprite.from("whiteOutlineX");
        panelPausa.addChild(buttonExit);

        buttonExit.width = buttonExitBackground.width / 1.3;
        buttonExit.height = buttonExitBackground.height / 1.3;
        buttonExit.anchor.set(0.5);
        buttonExit.position.x = buttonExitBackground.position.x;
        buttonExit.position.y = buttonExitBackground.position.y;

        //Cartel con mensaje
        const textBoxBlankSide = Sprite.from("textBoxBlankSide");
        textBoxBlankSide.anchor.set(0.5);
        textBoxBlankSide.width = panelBackground.width / 1.1;
        textBoxBlankSide.height = panelBackground.height / 4;
        textBoxBlankSide.position.x = panelBackground.position.x;
        textBoxBlankSide.position.y = panelBackground.position.y / 2;
        panelPausa.addChild(textBoxBlankSide)


        const lastKeyPressed = new Text("Select an option...", {fontSize: 48});
        lastKeyPressed.anchor.set(0.5);
        lastKeyPressed.position.x = textBoxBlankSide.position.x;
        lastKeyPressed.position.y = textBoxBlankSide.position.y;
        panelPausa.addChild(lastKeyPressed);

    }
};