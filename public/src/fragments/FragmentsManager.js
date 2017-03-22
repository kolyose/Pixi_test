import TinkManager from "./../TinkManager";
import { EventEmitter } from "./../aliases";
import {
  EVENT_FRAGMENT_ANCHORED,
  EVENT_ALL_FRAGMENTS_ANCHORED
} from "./../events";

class FragmentsManager extends EventEmitter {
  constructor() {
    super();
    this.reset();

    TinkManager.pointer.press = () => {
      if (!this.fragments || !this.fragments.length) return;

      this.fragments.every(fragment => {
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
    this._fragments = [];
    this.draggingFragment = undefined;
    this.anchoredFragments = 0;
  }

  subscribe() {
    this.fragments.forEach(fragment => {
      fragment.once(EVENT_FRAGMENT_ANCHORED, () => {
        this.anchoredFragments += 1;
        if (this.anchoredFragments === this.fragments.length) {
          this.emit(EVENT_ALL_FRAGMENTS_ANCHORED);
        }
      });
    });
  }
  set fragments(frags) {
    this._fragments = frags;
  }

  get fragments() {
    return this._fragments;
  }
}

export default new FragmentsManager();
