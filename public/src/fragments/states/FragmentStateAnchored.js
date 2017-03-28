import BaseFragmentState from "./BaseFragmentState";
import Model from "./../../model/Model";
import app from "./../../app";

export default class FragmentStateAnchored extends BaseFragmentState {
  constructor(fragment, statesFactory) {
    super(fragment, statesFactory);
    this._remainAnchored = this._remainAnchored.bind(this);
  }

  entry() {
    super.entry();
    this._fragment.makeUndraggable();
    app.ticker.add(this._remainAnchored);
    this._fragment.dispatchAnchored();
  }

  reset() {
    super.reset();
    this._fragment.applyState(
      this._statesFactory.getStateDraggable(this._fragment)
    );
  }

  toggleDrag() {
    app.ticker.remove(this._remainAnchored);
  }

  _remainAnchored() {
    const scale = Model.scale;
    this._fragment.view.x = this._fragment.anchorPosition.x * scale;
    this._fragment.view.y = this._fragment.anchorPosition.y * scale;
  }
}
