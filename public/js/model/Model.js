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
    initLayoutSettingsByImageDimensions(imageDimensions){
        if (imageDimensions.width > imageDimensions.height){
            this.layoutSettings = new HorizontalLayoutSettings(imageDimensions);
            return;
        }
        this.layoutSettings = new VerticalLayoutSettings(imageDimensions);
    }

    getImageScaleByRendererDimensions(rendererDimensions){
       return this.layoutSettings.getImageScaleByRendererDimentions(rendererDimensions);
    }

    get fragmentDimensions(){        
        return this.layoutSettings.getFragmentDimensionsByFragmentsNumber(this.fragmentsNumber);
    }
}

export default new Model();