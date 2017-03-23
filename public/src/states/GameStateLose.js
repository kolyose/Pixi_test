import BaseGameState from "./BaseGameState";
import { MESSAGE_LOSE } from "./../localization";

export default class GameStateLose extends BaseGameState {
  entry() {
    super.entry();
    this._game.showPlayPopup(MESSAGE_LOSE);
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
