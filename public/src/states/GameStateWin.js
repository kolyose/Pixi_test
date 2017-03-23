import BaseGameState from "./BaseGameState";
import { MESSAGE_WIN } from "./../localization";

export default class GameStateWin extends BaseGameState {
  entry() {
    super.entry();
    this._game.showPlayPopup(MESSAGE_WIN);
  }

  exit() {
    super.exit();
    this._game.hidePlayPopup();
  }

  startGameplay() {
    super.startGameplay();
    this._game.applyState(this._statesFactory.getStatePlaying(this._game));
  }
}
