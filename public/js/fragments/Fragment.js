import {Sprite} from './../aliases';
import TinkManager from './../TinkManager';

export default class Fragment{
    constructor(texture, anchorPosition){
        this._sprite = new Sprite(texture);
        this.anchorPosition = anchorPosition;
        this._state;
    }

    applyState(newState){
        if (this._state) 
            this._state.exit();
        this._state = newState;
        this._state.entry();
    }

    toggleDrag(){
        this._state.toggleDrag();
    }

    makeDraggable(){
        TinkManager.makeDraggable(this._sprite);
    }

    makeUndraggable(){
        TinkManager.makeUndraggable(this._sprite);
    }

    set anchorPosition(pos){
        this._anchorPosition = pos;
    }

    get anchorPosition(){
        return this._anchorPosition;
    }

    get view(){
        return this._sprite;
    }
}