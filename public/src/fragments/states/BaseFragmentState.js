export default class BaseFragmentState {
  constructor(fragment, statesFactory) {
    this._fragment = fragment;
    this._statesFactory = statesFactory;
  }

  reset() {
    this._fragment.applyState(
      this._statesFactory.getStateDraggable(this._fragment)
    );
  }

  // eslint-disable-next-line class-methods-use-this
  entry() {}

  // eslint-disable-next-line class-methods-use-this
  exit() {}

  // eslint-disable-next-line class-methods-use-this
  toggleDrag() {}
}
