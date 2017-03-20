import BaseFragmentState from "./BaseFragmentState";

export default class FragmentStateAnchored extends BaseFragmentState {
  entry() {
    super.entry();
    this._fragment.makeUndraggable();
  }
}
