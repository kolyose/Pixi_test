import BaseGameState from "./BaseGameState";

export default class GameStateInit extends BaseGameState {
  entry() {
    super.entry();
    this._game.init();
    this._game.applyState(this._statesFactory.getStateReadyToPlay(this._game));
  }
}
