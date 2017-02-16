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
    initLayoutSettingsByImageDimentions(imageDimentions){
        if (imageDimentions.width > imageDimentions.height){
            this.layoutSettings = new HorizontalLayoutSettings(imageDimentions);
            return;
        }
        this.layoutSettings = new VerticalLayoutSettings(imageDimentions);
    }

    getImageScaleByRendererDimentions(rendererDimentions){
       return this.layoutSettings.getImageScaleByRendererDimentions(rendererDimentions);
    }

    get fragmentDimentions(){        
        return this.layoutSettings.getFragmentDimentionsByFragmentsNumber(this.fragmentsNumber);
    }
}

export default new Model();