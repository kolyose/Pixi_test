export default class TinkManager{
    /*constructor(){
        this._tink;  
        this._pointer;  
    }*/

    static init(pixi, view){
        this._tink = new TinkManager(pixi, view);
        this._pointer = this._tink.makePointer();       
    }

    static makeDraggable(sprite){
        if (!this._tink) throw new Error("TinkManager should be initialized first!")
        this._tink.makeDraggable(sprite);
    }

    static makeUndraggable(sprite){
        if (!this._tink) throw new Error("TinkManager should be initialized first!")
        this._tink.makeUndraggable(sprite);
    }

    static get pointer(){
        if (!this._pointer) throw new Error("TinkManager should be initialized first!")
        return this._pointer;
    }
}