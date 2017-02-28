import BaseFragmentState from './BaseFragmentState';
import TinkManager from './../../TinkManager';

export default class FragmentStateDraggable extends BaseFragmentState{
    constructor(fragment, statesFactory){
        super(fragment, statesFactory)
    }

    entry(){
        super.entry();
        setInterval(() => {
            if (TinkManager.pointer.isDown && TinkManager.pointer.hitTestSprite(fragment.view)){
                fragment.applyState(new FragmentStateDragging());
            }
        }, 1);
    }
}