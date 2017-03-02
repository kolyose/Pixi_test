import BaseFragmentState from './BaseFragmentState';
import TinkManager from './../../TinkManager';
import app from './../app';

export default class FragmentStateAnchored extends BaseFragmentState{
    constructor(fragment, statesFactory){
        super(fragment, statesFactory)
    }

    entry(){
        super.entry();
        fragment.makeUndraggable();
    }
}