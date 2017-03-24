import TinkManager from "./../TinkManager";
import { EventEmitter } from "./../aliases";
import {
  EVENT_FRAGMENT_ANCHORED,
  EVENT_ALL_FRAGMENTS_ANCHORED
} from "./../events";

class FragmentsManager extends EventEmitter {
  constructor() {
    super();

    TinkManager.pointer.press = () => {
      if (!this._fragments || !this._fragments.length) return;

      this._fragments.every(fragment => {
        if (TinkManager.pointer.hitTestSprite(fragment.view)) {
          this.draggingFragment = fragment;
          this.draggingFragment.toggleDrag();
          return false;
        }
        return true;
      });
    };

    TinkManager.pointer.release = () => {
      if (!this.draggingFragment) return;
      this.draggingFragment.toggleDrag();
      this.draggingFragment = null;
    };
  }

  reset() {
    if (this._fragments) {
      this._fragments.forEach(fragment => {
        fragment.reset();
      });
    }
    this._fragments = [];
    this.draggingFragment = undefined;
    this.anchoredFragments = 0;
  }

  set fragments(frags) {
    this._fragments = frags;
    this._fragments.forEach(fragment => {
      fragment.once(EVENT_FRAGMENT_ANCHORED, () => {
        this.anchoredFragments += 1;
        if (this.anchoredFragments === this.fragments.length) {
          this.emit(EVENT_ALL_FRAGMENTS_ANCHORED);
        }
      });
    });
  }

  get fragments() {
    return this._fragments;
  }
}

export default new FragmentsManager();
