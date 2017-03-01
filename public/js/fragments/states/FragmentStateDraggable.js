import BaseFragmentState from './BaseFragmentState';
import TinkManager from './../../TinkManager';
import app from './../app';

export default class FragmentStateDraggable extends BaseFragmentState{
    constructor(fragment, statesFactory){
        super(fragment, statesFactory)
    }

    entry(){
        super.entry();

        /*app.ticker.add(() => {
            if (TinkManager.pointer.isDown && TinkManager.pointer.hitTestSprite(fragment.view)){
                fragment.applyState(new FragmentStateDragging(fragment, statesFactory));
            }
        });*/
    }

    toggleDrag(){
         fragment.applyState(new FragmentStateDragged(fragment, statesFactory));
    }
}