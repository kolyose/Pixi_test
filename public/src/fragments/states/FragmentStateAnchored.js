import BaseFragmentState from "./BaseFragmentState";

export default class FragmentStateAnchored extends BaseFragmentState {
  entry() {
    this._fragment.makeUndraggable();
  }
}
