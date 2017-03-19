import BaseFragmentState from "./BaseFragmentState";
import FragmentStatesFactory from "./FragmentStatesFactory";

export default class FragmentStateDraggable extends BaseFragmentState {
  entry() {
    this._fragment.makeDraggable();
  }

  toggleDrag() {
    this._fragment.applyState(
      FragmentStatesFactory.getStateDragged(this._fragment, this._statesFactory)
    );
  }
}
