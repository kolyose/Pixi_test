import Model from './../model/Model';
import Fragment from './Fragment';
import FragmentStatesFactory from './states/FragmentStatesFactory';

class FragmentsFactory{

    getFragmentsForTexture(texture){
        const fragments = [];
        const fragmentDimensions = Model.fragmentDimensions;
        const rows = Model.rows;
        const columns = Model.columns;
        let fragmentPosition = {x:0, y:0};

        for (let i=0; i<rows; i++){
            for (let j=0; j<columns; j++){
                let anchoredPosition = fragmentPosition;
                let frameRect = new PIXI.Rectangle(j * fragmentDimensions.width, i * fragmentDimensions.height, fragmentDimensions.width, fragmentDimensions.height);
                texture.frame = frameRect;            
                fragments.push(initFragment(createFragment(texture, anchoredPosition)));
            }            
        }
        
        return fragments;
    }

    createFragment(texture, anchoredPosition){
        return new Fragment(texture, anchoredPosition);
    }

    initFragment(fragment){
        return fragment.applyState(FragmentStatesFactory.getStateDraggable(fragment));
    }
}