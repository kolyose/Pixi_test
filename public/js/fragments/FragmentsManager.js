import TinkManager from './../TinkManager';
import {EventEmitter} from './../aliases';
import {EVENT_FRAGMENT_ANCHORED, EVENT_ALL_FRAGMENTS_ANCHORED} from './../events';

class FragmentsManager extends EventEmitter{
    constructor(){
        this._fragments;
        this._draggingFragment;
        this._anchoredFragments=0;

        TinkManager.pointer.press = () => {
            if (!this.fragments || !this.fragments.length) return;

            this.fragments.forEach((fragment) => {
                if (TinkManager.pointer.hitTestSprite(fragment.view)){
                    if (this._draggingFragment)
                        this._draggingFragment.toggleDrag();

                    this._draggingFragment = fragment;
                    this._draggingFragment.toggleDrag();
                    break;
                }
            });
        }

        TinkManager.pointer.release = () => {
          if (!this._draggingFragment) return;

          this._draggingFragment.toggleDrag();
          this._draggingFragment = null;
        }
    }

    set fragments(frags){
        this._fragments = frags;
    }

    get fragments(){
        return this._fragments;
    }

    subscribe(){
        this.fragments.forEach(fragment => {
            fragment.once(EVENT_FRAGMENT_ANCHORED, this._fragmentAnchoredHandler);
        });
    }

    _fragmentAnchoredHandler(){
        this._anchoredFragments++;
        if (this._anchoredFragments == this.fragments.length){
            this.emit(EVENT_ALL_FRAGMENTS_ANCHORED);
        }
    }
}

export default new FragmentsManager();