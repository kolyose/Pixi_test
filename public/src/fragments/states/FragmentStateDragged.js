import BaseFragmentState from "./BaseFragmentState";
import Model from "./../../model/Model";
import FragmentStatesFactory from "./FragmentStatesFactory";
import app from "./../../app";

export default class FragmentStateDragged extends BaseFragmentState {
  entry() {
    app.ticker.add(this.checkPosition);
  }

  exit() {
    app.ticker.remove(this.checkPosition);
  }

  toggleDrag() {
    this._fragment.applyState(
      FragmentStatesFactory.getStateDraggable(
        this._fragment,
        this._statesFactory
      )
    );
  }

  checkPosition() {
    if (
      Math.abs(this._fragment.view.x - this._fragment.anchorPosition.x) >
      Model.anchorPrecision
    ) {
      return;
    }

    if (
      Math.abs(this._fragment.view.y - this._fragment.anchorPosition.y) >
      Model.anchorPrecision
    ) {
      return;
    }

    this._fragment.view.x = this._fragment.anchorPosition.x;
    this._fragment.view.y = this._fragment.anchorPosition.y;
    this._fragment.applyState(
      FragmentStatesFactory.getStateAnchored(
        this._fragment,
        this._statesFactory
      )
    );
  }
}
