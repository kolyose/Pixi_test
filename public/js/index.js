
const app = new PIXI.Application();
document.body.appendChild(app.view);

PIXI.loader.add('image', 'image.jpg').load((loader, resources) => {
    const img = new PIXI.Sprite(resources.image.texture);
   
   const scale = (img.width > img.height) ?  app.renderer.width/img.width : app.renderer.height/img.height;

    img.scale.set(scale, scale);

    app.stage.addChild(img);
});