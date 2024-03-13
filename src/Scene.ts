import { AnimatedSprite, Container, Graphics, Texture, Text, NineSlicePlane } from "pixi.js";
import { LinkAndFairy } from "./LinkAndFairy";
import { app } from ".";

export class Scene extends Container {
    constructor() {
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
        fairyAnimated.position.set(700,200);
        fairyAnimated.play();
        fairyAnimated.animationSpeed = 0.4;
        this.addChild(fairyAnimated);

        const myGraph: Graphics = new Graphics();

        //Dibujar lineas en pantalla
        myGraph.lineStyle({ color: 0xFF00FF, width: 10, alpha: 1 }); //alpha: 
        myGraph.moveTo(0,0);
        myGraph.lineTo(app.screen.width / 2, app.screen.height / 2);
        myGraph.lineTo(3 * app.screen.width / 4, app.screen.height / 2);
        myGraph.lineTo(800, 300);

        //Dibujar figuras
        myGraph.beginFill(0xFF00FF,1); //Rellena la figurasa creadas
        myGraph.drawCircle(1000,100,100);
        myGraph.endFill(); //deja de rellenar las figuras
        
        myGraph.drawCircle(1000,700,50);

        this.addChild(myGraph);

        //Agregar texto en pantalla
        const myText: Text = new Text("asd", {fontSize: 30, fill: 0xFF0000, fontFamily:"Comic Sans MS"});
        myText.text = "Acá se muestra a Link y su hada";
        myText.position.y = 500;
        this.addChild(myText);

        //Nice slice Plane
        const panel: NineSlicePlane = new NineSlicePlane(
            Texture.from("Panel"),
            35,35,35,35
        );

        this.addChild(panel);
        panel.width = 600;
        panel.height = 200;
        panel.scale.set(1.5);
        panel.position.x = app.screen.width / 5
        panel.position.y = app.screen.height / 5
    }
};