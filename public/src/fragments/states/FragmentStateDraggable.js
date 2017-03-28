import BaseFragmentState from "./BaseFragmentState";

export default class FragmentStateDraggable extends BaseFragmentState {
  entry() {
    super.entry();
    this._fragment.makeDraggable();
  }

  reset() {
    super.reset();
    this._fragment.applyState(
      this._statesFactory.getStateAnchored(this._fragment)
    );
  }

  toggleDrag() {
    this._fragment.applyState(
      this._statesFactory.getStateDragged(this._fragment, this._statesFactory)
    );
  }
}
