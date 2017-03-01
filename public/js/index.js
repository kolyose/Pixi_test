import {Loader, Sprite} from './aliases';
import Model from './model/Model';
import TinkManager from './TinkManager';
import app from './app';


Loader.add('image', 'image.jpg').load((loader, resources) => {

    //let tink = new Tink(PIXI, app.view);
    TinkManager.init();

    const texture = resources.image.texture;
    Model.initLayoutSettingsByImageDimensions({width:texture.width, height:texture.height});    
   
    const scale=Model.getImageScaleByRendererDimensions({width:app.renderer.width, height: app.renderer.height});
    
    const fragmentDimensions = Model.fragmentDimensions;
    let frameRect = new PIXI.Rectangle(0,0,fragmentDimensions.width, fragmentDimensions.height);

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
