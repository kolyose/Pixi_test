/* global PIXI Tink*/

import app from "./app";

class TinkManager {
  constructor() {
    this._tink = new Tink(PIXI, app.view);
    this._pointer = this._tink.makePointer();

    app.ticker.add(() => {
      this._tink.update();
    });
  }

  makeDraggable(sprite) {
    if (!this._tink) {
      throw new Error("TinkManager should be initialized first!");
    }

    this._tink.makeDraggable(sprite);
  }

  makeUndraggable(sprite) {
    if (!this._tink) {
      throw new Error("TinkManager should be initialized first!");
    }
    this._tink.makeUndraggable(sprite);
  }

  createButton(frames) {
    return this._tink.button(frames);
  }

  get pointer() {
    if (!this._pointer) {
      throw new Error("TinkManager should be initialized first!");
    }
    return this._pointer;
  }
}

export default new TinkManager();
