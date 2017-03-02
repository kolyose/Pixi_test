import HorizontalLayoutSettings from './HorizontalLayoutSettings';
import VerticalLayoutSettings from './VerticalLayoutSettings';

class Model{
    constructor(){
        /*TODO: put here and parse settings JSON*/
        this.layoutSettings;
        this.fragmentsNumber = 12;
    }

    /*
    *    Factory method to init layout settings based on image dimentions
    */
    initLayoutSettingsByImageDimensions(imageDimensions, rendererDimensions){
        if (imageDimensions.width > imageDimensions.height){
            this.layoutSettings = new HorizontalLayoutSettings(imageDimensions, rendererDimensions);
            return;
        }
        this.layoutSettings = new VerticalLayoutSettings(imageDimensions, rendererDimensions);
    }

    get scale(){
        return this.layoutSettings.scale;
    }

    get rows(){
        return this.layoutSettings.getRowsByFragmentsNumber(this.fragmentsNumber);
    }

    get columns(){
        return this.layoutSettings.getColumnsByFragmentsNumber(this.fragmentsNumber);
    }

    get fragmentDimensions(){        
        return this.layoutSettings.getFragmentDimensionsByFragmentsNumber(this.fragmentsNumber);
    }
    
    get anchorPrecision(){
        return 10;
    }
}

export default new Model();