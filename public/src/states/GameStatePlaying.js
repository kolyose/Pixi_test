import BaseGameState from "./BaseGameState";

export default class GameStatePlaying extends BaseGameState {
  entry() {
    super.entry();
    this._game.resetView();
    this._game.initBackground();
    this._game.setupFragments();
  }

  stopGameplay(isWin) {
    super.stopGameplay();

    if (isWin) {
      this._game.applyState(this._statesFactory.getStateWin(this._game));
    } else {
      this._game.applyState(this._statesFactory.getStateLose(this._game));
    }
  }
}
