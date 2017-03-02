import BaseFragmentState from './BaseFragmentState';
import TinkManager from './../../TinkManager';
import FragmentStatesFactory from './FragmentStatesFactory';
import app from './../app';

export default class FragmentStateDraggable extends BaseFragmentState{
    constructor(fragment, statesFactory){
        super(fragment, statesFactory)
    }

    entry(){
        super.entry();
        fragment.makeDraggable();
    }

    toggleDrag(){
         fragment.applyState(FragmentStatesFactory.getStateDragged(fragment, statesFactory));
    }
}