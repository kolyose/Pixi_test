import { Sprite, EventEmitter } from "./../aliases";
import TinkManager from "./../TinkManager";
import { EVENT_FRAGMENT_ANCHORED } from "./../events";

export default class Fragment extends EventEmitter {
  constructor(texture, anchorPosition) {
    super();
    this._sprite = new Sprite(texture);
    this._anchorPosition = anchorPosition;
    this._state = undefined;
  }

  applyState(newState) {
    if (this._state) this._state.exit();
    this._state = newState;
    this._state.entry();
  }

  toggleDrag() {
    this._state.toggleDrag();
  }

  makeDraggable() {
    TinkManager.makeDraggable(this._sprite);
  }

  makeUndraggable() {
    TinkManager.makeUndraggable(this._sprite);
  }

  dispatchAnchored() {
    this.emit(EVENT_FRAGMENT_ANCHORED);
  }

  set anchorPosition(pos) {
    this._anchorPosition = pos;
  }

  get anchorPosition() {
    return this._anchorPosition;
  }

  get view() {
    return this._sprite;
  }
}
