import {Application, Loader, Sprite} from './aliases';
import Model from './model/Model';

const app = new Application();
document.body.appendChild(app.view);

Loader.add('image', 'image.jpg').load((loader, resources) => {

    let tink = new Tink(PIXI, app.view);

    const texture = resources.image.texture;
    Model.initLayoutSettingsByImageDimentions({width:texture.width, height:texture.height});    
   
    const scale=Model.getImageScaleByRendererDimentions({width:app.renderer.width, height: app.renderer.height});
    
    const fragmentDimentions = Model.fragmentDimentions;
    let frameRect = new PIXI.Rectangle(0,0,fragmentDimentions.width, fragmentDimentions.height);

    texture.frame = frameRect;
    let img = new Sprite(texture);   

    tink.makeDraggable(img);

    img.scale.set(scale, scale);
    app.stage.addChild(img);   


    app.ticker.add(() => {
        tink.update();
        console.log("hello");
    });

   /* function gameLoop(){
        console.log("hello");
        requestAnimationFrame(gameLoop);
        tink.update();
        app.renderer.render(app.stage);
    }

    gameLoop();*/

});
