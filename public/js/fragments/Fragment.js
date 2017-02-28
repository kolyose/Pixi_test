import {Sprite} from './../aliases';
import TinkManager from './../TinkManager';

export default class Fragment{
    constructor(texture){
        this._sprite = new Sprite(texture);
        this._state;
    }

    applyState(newState){
        if (this._state) 
            mthis._state.exit();
        this._state = newState;
        this._state.entry();
    }

    makeDraggable(){
        TinkManager.makeDraggable(this._sprite);
    }

    makeUndraggable(){
        TinkManager.makeUndraggable(this._sprite);
    }

    get view(){
        return this._sprite;
    }
}