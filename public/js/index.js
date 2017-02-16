import {Application, Loader, Sprite} from './aliases';
import Model from './model/Model';

const app = new Application();
document.body.appendChild(app.view);

Loader.add('image', 'image.jpg').load((loader, resources) => {
    const texture = resources.image.texture;
    Model.initLayoutSettingsByImageDimentions({width:texture.width, height:texture.height});    
   
    const scale=Model.getImageScaleByRendererDimentions({width:app.renderer.width, height: app.renderer.height});
    
    const fragmentDimentions = Model.fragmentDimentions;
    let frameRect = new PIXI.Rectangle(0,0,fragmentDimentions.width, fragmentDimentions.height);

    texture.frame = frameRect;
    const img = new Sprite(texture);   

    img.scale.set(scale, scale);
    app.stage.addChild(img);

});