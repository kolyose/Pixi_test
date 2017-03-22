import GameStateLoading from "./GameStateLoading";
import GameStateInit from "./GameStateInit";
import GameStateReadyToPlay from "./GameStateReadyToPlay";

class GameStatesFactory {
  constructor() {
    this._statesPool = new WeakMap();
  }

  getStateLoading(game) {
    if (!this._statesPool.get(GameStateLoading)) {
      this._statesPool.set(GameStateLoading, new GameStateLoading(game, this));
    }
    return this._statesPool.get(GameStateLoading);
  }

  getStateInit(game) {
    if (!this._statesPool.get(GameStateInit)) {
      this._statesPool.set(GameStateInit, new GameStateInit(game, this));
    }
    return this._statesPool.get(GameStateInit);
  }

  getStateReadyToPlay(game) {
    if (!this._statesPool.get(GameStateReadyToPlay)) {
      this._statesPool.set(
        GameStateReadyToPlay,
        new GameStateReadyToPlay(game, this)
      );
    }
    return this._statesPool.get(GameStateReadyToPlay);
  }
}

export default new GameStatesFactory();
