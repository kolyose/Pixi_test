import { Loader } from "./aliases";
import Model from "./model/Model";
import FragmentsFactory from "./fragments/FragmentsFactory";
import FragmentsManager from "./fragments/FragmentsManager";
import app from "./app";
import {
  EVENT_ALL_FRAGMENTS_ANCHORED,
  EVENT_PLAY,
  EVENT_ROUND_TIMER_TICK,
  EVENT_ROUND_TIME_ENDED
} from "./events";
import GameView from "./GameView";
import GameStatesFactory from "./states/GameStatesFactory";

class Game {
  constructor() {
    this._state = undefined;
    this._view = new GameView(app.stage);
    this._view.on(EVENT_PLAY, this.startRound.bind(this));
  }

  applyState(newState) {
    if (this._state) this._state.exit();

    this._state = newState;
    this._state.entry();
  }

  loadImage() {
    Loader.add([
      { name: "main", url: "img/image.jpg" },
      { name: "btn", url: "img/play-button.jpg" }
    ]).load((loader, resources) => {
      this._state.onLoadComplete();
    });
  }

  // eslint-disable-next-line class-methods-use-this
  initModel() {
    const mainTexture = Loader.resources.main.texture;
    Model.initLayoutSettingsByImageDimensions(
      { width: mainTexture.width, height: mainTexture.height },
      { width: app.renderer.width, height: app.renderer.height }
    );

    Model.on(EVENT_ROUND_TIMER_TICK, () => {
      this.updateRoundCountdownView();
    });

    Model.on(EVENT_ROUND_TIME_ENDED, () => {
      this.stopRound(false);
    });
  }

  initPopups() {
    this._view.initPlayPopup();
  }

  initBackground() {
    this._view.initBackground(Loader.resources.main.texture, Model.scale);
  }

  resetView() {
    this._view.reset();
  }

  // eslint-disable-next-line class-methods-use-this
  resetFragmentsManager() {
    FragmentsManager.removeListener(EVENT_ALL_FRAGMENTS_ANCHORED);
    FragmentsManager.reset();
  }

  setupFragments() {
    const fragments = FragmentsFactory.getFragmentsForTexture(
      Loader.resources.main.texture
    );
    this._view.addFragments(fragments, Model.scale);

    FragmentsManager.fragments = fragments;
    FragmentsManager.once(EVENT_ALL_FRAGMENTS_ANCHORED, () => {
      this.stopRound(true);
    });
  }

  startRound() {
    this._state.startRound();
  }

  stopRound(isWin) {
    this._state.stopRound(isWin);
  }

  // eslint-disable-next-line class-methods-use-this
  startRoundCountdown() {
    Model.startRoundCountdown();
  }

  // eslint-disable-next-line class-methods-use-this
  stopRoundCountdown() {
    Model.stopRoundCountdown();
  }

  updateRoundCountdownView() {
    this._view.updateCountdown(Model.timeRemaining);
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
