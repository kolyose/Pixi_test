import Model from './../model/Model';
import Fragment from './Fragment';
import FragmentStatesFactory from './states/FragmentStatesFactory';

class FragmentsFactory{

    getFragmentsForTexture(texture){
        const fragments = [];
        const fragmentDimensions = Model.fragmentDimensions;
        const rows = Model.rows;
        const columns = Model.columns;

        for (let i=0; i<rows; i++){
            for (let j=0; j<columns; j++){
                const anchorPosition = {x: j * fragmentDimensions.width, y: i * fragmentDimensions.height};
                const frameRect = new PIXI.Rectangle(anchorPosition.x, anchorPosition.y, fragmentDimensions.width, fragmentDimensions.height);
                texture.frame = frameRect;            
                fragments.push(initFragment(createFragment(texture, anchorPosition)));
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

export default new FragmentsFactory();