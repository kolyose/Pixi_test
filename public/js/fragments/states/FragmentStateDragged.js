import BaseFragmentState from './BaseFragmentState';
import TinkManager from './../../TinkManager';
import Model from './../../model/Model';
import FragmentStatesFactory from './FragmentStatesFactory';
import app from './../app';

export default class FragmentStateDragged extends BaseFragmentState{
    constructor(fragment, statesFactory){
        super(fragment, statesFactory)
    }

    entry(){
        super.entry();
        app.ticker.add(_checkPosition);
    }

    exit(){
        super.exit();
        app.ticker.remove(_checkPosition);
    }

    toggleDrag(){
         fragment.applyState(FragmentStatesFactory.getStateDraggable(fragment, statesFactory));
    }

    _checkPosition(){
        if (Math.abs(fragment.view.x - fragment.anchorPosition.x) > Model.anchorPrecision)
            return;

        if (Math.abs(fragment.view.y - fragment.anchorPosition.y) > Model.anchorPrecision)
            return;   

        fragment.view.x = fragment.anchorPosition.x;
        fragment.view.y = fragment.anchorPosition.y;
        fragment.applyState(FragmentStatesFactory.getStateAnchored(fragment, statesFactory));
    }
}