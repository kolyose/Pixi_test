import TinkManager from './../TinkManager';

class FragmentsManager{
    constructor(){
        this._fragments;
        this._draggingFragment;

        TinkManager.pointer.press = () => {
            if (!this._fragments || !this.fragments.length) return;

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
}

export default new FragmentsManager();