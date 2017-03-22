import { Loader } from "./aliases";
import Model from "./model/Model";
import FragmentsFactory from "./fragments/FragmentsFactory";
import FragmentsManager from "./fragments/FragmentsManager";
import app from "./app";
import { EVENT_ALL_FRAGMENTS_ANCHORED } from "./events";
import GameView from "./GameView";
import GameStatesFactory from "./states/GameStatesFactory";

class Game {
  constructor() {
    this._state = undefined;
    this._view = new GameView(app.stage);
  }

  applyState(newState) {
    if (this._state) this._state.exit();

    this._state = newState;
    this._state.entry();
  }

  loadImage() {
    Loader.add("image", "image.jpg").load((loader, resources) => {
      Model.texture = resources.image.texture;
      this._state.onLoadComplete();
    });
  }

  // eslint-disable-next-line class-methods-use-this
  init() {
    const texture = Model.texture;

    Model.initLayoutSettingsByImageDimensions(
      { width: texture.width, height: texture.height },
      { width: app.renderer.width, height: app.renderer.height }
    );

    const scale = Model.scale;
    this._view.initBackground(texture, scale);

    const fragments = FragmentsFactory.getFragmentsForTexture(texture);
    this._view.addFragments(fragments);

    /* eslint-enable */
    FragmentsManager.fragments = fragments;
    FragmentsManager.subscribe();
    FragmentsManager.once(EVENT_ALL_FRAGMENTS_ANCHORED, () => {
      console.log("THE END");
    });
  }

  resetView() {
    this._view.reset();
  }

  showPlayPopup(message) {
    this._view.showPlayPopup(message);
  }

  hidePlayPopup() {
    this._view.hidePlayPopup();
  }
}

const game = new Game();
game.applyState(GameStatesFactory.getStateLoading(game));
