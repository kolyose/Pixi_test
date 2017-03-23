export default class BaseGameState {
  constructor(game, statesFactory) {
    this._game = game;
    this._statesFactory = statesFactory;
  }

  // eslint-disable-next-line
  entry() {}

  // eslint-disable-next-line
  exit() {}

  // eslint-disable-next-line
  startGameplay() {}

  // eslint-disable-next-line
  stopGameplay() {}

  // eslint-disable-next-line
  onLoadComplete() {}
}
