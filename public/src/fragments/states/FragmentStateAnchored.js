import BaseFragmentState from "./BaseFragmentState";
import Model from "./../../model/Model";
import app from "./../../app";

export default class FragmentStateAnchored extends BaseFragmentState {
  constructor(fragment, statesFactory) {
    super(fragment, statesFactory);
    this._preventMovement = this.preventMovement.bind(this);
  }

  entry() {
    super.entry();
    this._fragment.makeUndraggable();
    app.ticker.add(this._preventMovement);
    this._fragment.dispatchAnchored();
  }

  toggleDrag() {
    app.ticker.remove(this._preventMovement);
  }

  preventMovement() {
    const scale = Model.scale;
    this._fragment.view.x = this._fragment.anchorPosition.x * scale;
    this._fragment.view.y = this._fragment.anchorPosition.y * scale;
  }
}
