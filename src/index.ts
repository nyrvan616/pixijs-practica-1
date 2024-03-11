import { Application, Container, Loader, Sprite, Point } from 'pixi.js';

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});

window.addEventListener("resize", ()=>{
	console.log("resized!");

	//Calcular valores de Escala
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX, scaleY);

	//Calcular Tamaño del juego
	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);

	//Calcular el margen del juego
	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2);
	const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2);

	//Tamaño Pantalla (Responsive) 
	app.view.style.width = gameWidth + "px";
	app.view.style.height = gameHeight + "px";

	//Agregar margenes
	app.view.style.marginLeft = marginHorizontal.toString() + "px";
	app.view.style.marginRight = marginHorizontal.toString() + "px";

	app.view.style.marginTop = marginVertical.toString() + "px";
	app.view.style.marginBottom = marginVertical.toString() + "px";

});

window.dispatchEvent(new Event("resize"));

Loader.shared.add({url: "./fairy.png", name: "Fairy"});
Loader.shared.add({url: "./link.png", name: "Link"});

Loader.shared.onComplete.add(()=>{
	const link: Sprite = Sprite.from("Link");

	link.anchor.set(0.5);
		
	link.position.set(app.screen.width / 2,app.screen.height / 2)

	link.scale.set(0.5,0.5);
	const fairy: Sprite = Sprite.from("Fairy");

	

	fairy.position.set(700,70);
	
	fairy.angle = 45;
	
	const linkAndFairy: Container = new Container();

	linkAndFairy.addChild(fairy);
	linkAndFairy.addChild(link);
	
	linkAndFairy.scale.set(0.5);
	linkAndFairy.x = 300;
	linkAndFairy.y = 150;

	console.log(fairy.toGlobal(new Point()));
	console.log(fairy.parent.toGlobal(fairy.position));

	app.stage.addChild(linkAndFairy);
});

Loader.shared.load();