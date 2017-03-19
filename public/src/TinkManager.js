/* global PIXI Tink*/

import app from "./app";

class TinkManager {
  constructor() {
    this.tink = new Tink(PIXI, app.view);
    this._pointer = this.tink.makePointer();

    app.ticker.add(() => {
      this.tink.update();
    });
  }

  makeDraggable(sprite) {
    if (!this.tink) throw new Error("TinkManager should be initialized first!");
    this.tink.makeDraggable(sprite);
  }

  makeUndraggable(sprite) {
    if (!this.tink) throw new Error("TinkManager should be initialized first!");
    this.tink.makeUndraggable(sprite);
  }

  get pointer() {
    if (!this._pointer) {
      throw new Error("TinkManager should be initialized first!");
    }
    return this._pointer;
  }
}

export default new TinkManager();
