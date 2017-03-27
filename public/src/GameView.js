import { Sprite, ColorMatrixFilter, EventEmitter, Text } from "./aliases";
import PlayPopup from "./popups/PlayPopup";
import { EVENT_PLAY } from "./events";

export default class GameView extends EventEmitter {
  constructor(stage) {
    super();
    this._stage = stage;

    this._fragmentsContainer = new Sprite();
    this._stage.addChild(this._fragmentsContainer);

    this._tfCountdown = new Text();
    this._stage.addChild(this._tfCountdown);
  }

  initBackground(texture, scale) {
    const bg = new Sprite(texture);
    bg.scale.set(scale);
    this._stage.addChildAt(bg, 0);
    const colorMatrix = new ColorMatrixFilter();
    bg.filters = [colorMatrix];
    colorMatrix.greyscale(0.1);
  }

  updateCountdown(time) {
    this._tfCountdown.text = time.toString();
  }

  addFragments(fragments, scale) {
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
    this._playPopup = new PlayPopup();
    this._playPopup.init();
    this._playPopup.on(EVENT_PLAY, () => {
      this.emit(EVENT_PLAY);
    });
    this._stage.addChild(this._playPopup.view);
  }

  showPlayPopup(message) {
    this._playPopup.message = message;
    this._playPopup.show();
  }

  hidePlayPopup() {
    this._playPopup.hide();
  }
}
