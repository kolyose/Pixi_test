import { Sprite, ColorMatrixFilter } from "./aliases";

export default class GameView {
  constructor(stage) {
    this._stage = stage;
    this._fragmentsContainer = new Sprite();
    this._playPopup = new Sprite();
    this._stage.addChild(this._fragmentsContainer);
    this._stage.addChild(this._playPopup);
  }

  initBackground(texture, scale) {
    const bg = new Sprite(texture);
    bg.scale.set(scale);
    this._stage.addChild(bg);
    const colorMatrix = new ColorMatrixFilter();
    bg.filters = [colorMatrix];
    colorMatrix.greyscale(0.1);
  }

  addFragments(fragments) {
    /* eslint-disable */
    fragments.forEach(fragment => {
      fragment.view.scale.set(scale, scale);
      fragment.view.x = Math.random() * 500;
      fragment.view.y = Math.random() * 500;
      this._fragmentsContainer.addChild(fragment.view);
    });
  }

  reset() {
    this._fragmentsContainer.removeChildren();
  }

  initPlayPopup() {
    /* var roundBox = new Graphics();
    roundBox.lineStyle(4, 0x99ccff, 1);
    roundBox.beginFill(0xff9933);
    roundBox.drawRoundedRect(0, 0, 84, 36, 10);
    roundBox.endFill();
    roundBox.x = 48;
    roundBox.y = 190;
    this._playPopup.addChild(roundBox);

    var circle = new Graphics();
    circle.beginFill(0x9966ff);
    circle.drawCircle(0, 0, 32);
    circle.endFill();
    circle.x = 64;
    circle.y = 130;
    this._playPopup.addChild(circle);*/
    //circle.generateCanvasTexture()l;
  }

  showPlayPopup(message) {}

  hidePlayPopup() {}
}
