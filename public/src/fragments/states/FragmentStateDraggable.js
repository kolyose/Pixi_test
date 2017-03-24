import BaseFragmentState from "./BaseFragmentState";

export default class FragmentStateDraggable extends BaseFragmentState {
  entry() {
    super.entry();
    this._fragment.makeDraggable();
  }

  toggleDrag() {
    this._fragment.applyState(
      this._statesFactory.getStateDragged(this._fragment, this._statesFactory)
    );
  }
}
