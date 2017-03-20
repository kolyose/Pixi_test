export default class BaseFragmentState {
  constructor(fragment, statesFactory) {
    this._fragment = fragment;
    this._statesFactory = statesFactory;
  }

  // eslint-disable-next-line class-methods-use-this
  entry() {}

  // eslint-disable-next-line class-methods-use-this
  exit() {}
}
