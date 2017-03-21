import { Sprite, EventEmitter } from "./../aliases";
import TinkManager from "./../TinkManager";
import { EVENT_FRAGMENT_ANCHORED } from "./../events";

export default class Fragment extends EventEmitter {
  constructor(id, texture, anchorPosition) {
    super();
    this._id = id;
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
    this._sprite.draggable = false;
    TinkManager.makeUndraggable(this._sprite);
  }

  dispatchAnchored() {
    this.emit(EVENT_FRAGMENT_ANCHORED);
  }

  get anchorPosition() {
    return this._anchorPosition;
  }

  get view() {
    return this._sprite;
  }

  get id() {
    return this._id;
  }
}
