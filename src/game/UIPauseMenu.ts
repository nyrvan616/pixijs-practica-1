import { Container, Sprite, Point, Text, Texture } from "pixi.js";
import { app } from "..";
import { Button } from "../ui/Button";
import { Keyboard } from "../utils/Keyboard";

export class UIPauseMenu extends Container {
    private buttonContinue:Button;
    private buttonRestart:Button;
    private buttonCloseGame:Button;

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
        this.buttonContinue = new Button(
            Texture.from("buttonContinueDefault"),
            Texture.from("buttonContinueDown"),
            Texture.from("buttonContinueOver"),
            this.onButtonClick.bind(this)
        );
        
        this.buttonContinue.width = panelBackground.width / 4;
        this.buttonContinue.height = panelBackground.height / 4;
        this.buttonContinue.position.x = panelBackground.width / 3;
        this.buttonContinue.position.y = panelBackground.height / 1.2 ;

        panelPausa.addChild(this.buttonContinue);

        //Boton Restart
        this.buttonRestart = new Button(
            Texture.from("buttonRestartDefault"),
            Texture.from("buttonRestartDown"),
            Texture.from("buttonRestartOver"),
            this.onButtonClick.bind(this)
        );

        this.buttonRestart.width = panelBackground.width / 4;
        this.buttonRestart.height = panelBackground.height / 4;
        this.buttonRestart.position.x = panelBackground.width / 1.5;
        this.buttonRestart.position.y = panelBackground.height / 1.2 ;
        panelPausa.addChild(this.buttonRestart);

        //Boton Exit
        this.buttonCloseGame = new Button(
            Texture.from("buttonCloseGameDefault"),
            Texture.from("buttonCloseGameDown"),
            Texture.from("buttonCloseGameOver"),
            this.onButtonClick.bind(this)
        );

        this.buttonCloseGame.width = panelBackground.width / 4;
        this.buttonCloseGame.height = panelBackground.height / 4;
        this.buttonCloseGame.position.x = panelBackground.width / 1.03;
        this.buttonCloseGame.position.y = panelBackground.height / 1.2 ;
        panelPausa.addChild(this.buttonCloseGame);

        //Cartel con mensaje
        const textBoxBlankSide = Sprite.from("textBoxBlankSide");
        textBoxBlankSide.anchor.set(0.5);
        textBoxBlankSide.width = panelBackground.width / 1.1;
        textBoxBlankSide.height = panelBackground.height / 4;
        textBoxBlankSide.position.x = panelBackground.position.x;
        textBoxBlankSide.position.y = panelBackground.position.y / 2;
        panelPausa.addChild(textBoxBlankSide);


        const lastKeyPressed = new Text("Select an option...", {fontSize: 48});
        lastKeyPressed.anchor.set(0.5);
        lastKeyPressed.position.x = textBoxBlankSide.position.x;
        lastKeyPressed.position.y = textBoxBlankSide.position.y;
        panelPausa.addChild(lastKeyPressed);

        //document.addEventListener("keydown", this.onKeyDown.bind(this));

        Keyboard.down.on("KeyB", this.onKeyB, this);
        Keyboard.up.on("KeyB", this.onKeyBUp, this);


    }

    private onKeyB():void{
        console.log("Apreté la b", this)
    }

    private onKeyBUp():void{
        console.log("Solté la b", this)
    }

    private onButtonClick(){
        console.log("New On button clicked!!", Keyboard.state.get("KeyA"));
    }

    // private onKeyDown(e:KeyboardEvent){
    //     console.log("Key Pressed!", e.code)
    // }
    
};