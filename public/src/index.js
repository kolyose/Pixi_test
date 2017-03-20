import { Loader, Sprite, ColorMatrixFilter } from "./aliases";
import Model from "./model/Model";
import FragmentsFactory from "./fragments/FragmentsFactory";
import FragmentsManager from "./fragments/FragmentsManager";
import app from "./app";
import { EVENT_ALL_FRAGMENTS_ANCHORED } from "./events";

Loader.add("image", "image.jpg").load((loader, resources) => {
  const texture = resources.image.texture;

  Model.initLayoutSettingsByImageDimensions(
    { width: texture.width, height: texture.height },
    { width: app.renderer.width, height: app.renderer.height }
  );

  const scale = Model.scale;
  const bg = new Sprite(texture);
  bg.scale.set(scale);
  app.stage.addChild(bg);
  const colorMatrix = new ColorMatrixFilter();
  bg.filters = [colorMatrix];
  colorMatrix.greyscale(0.1);

  const fragments = FragmentsFactory.getFragmentsForTexture(texture);
  /* eslint-disable */
  fragments.forEach(fragment => {
    fragment.view.scale.set(scale, scale);
    fragment.view.x = Math.random() * 500;
    fragment.view.y = Math.random() * 500;
    app.stage.addChild(fragment.view);
  });
  /* eslint-enable */
  FragmentsManager.fragments = fragments;
  FragmentsManager.subscribe();
  FragmentsManager.once(EVENT_ALL_FRAGMENTS_ANCHORED, () => {
    console.log("THE END");
  });
  /*
    app.ticker.add(() => {
        tink.update();
        console.log("hello");
    });

    function gameLoop(){
        console.log("hello");
        requestAnimationFrame(gameLoop);
        tink.update();
        app.renderer.render(app.stage);
    }
    gameLoop();
    */
});
