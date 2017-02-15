import {Application, Loader, Sprite} from './aliases';

const app = new Application();
document.body.appendChild(app.view);

Loader.add('image', 'image.jpg').load((loader, resources) => {
    const img = new Sprite(resources.image.texture);
   
   const scale = (img.width > img.height) ?  app.renderer.width/img.width : app.renderer.height/img.height;

    img.scale.set(scale, scale);

    app.stage.addChild(img);

});