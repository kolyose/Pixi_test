import BaseLayoutSettings from './BaseLayoutSettings';

export default class VerticalLayoutSettings extends BaseLayoutSettings{
    constructor(imageDimensions){
        super(imageDimensions);
    }

    getImageScaleByRendererDimensions(rendererDimensions){
        return rendererDimensions.height/this.imageDimensions.height; 
    }
    
    getFragmentDimensionsByFragmentsNumber(fragmentsNumber){
        let width, height;
        switch (fragmentsNumber){
            case 12:
            {
                width = this.imageDimensions.width/3;
                height = this.imageDimensions.height/4;
                break;
            }

            case 20:
            {
                width = this.imageDimensions.width/4;
                height = this.imageDimensions.height/5;
                break;
            }

            case 30:
            {
                width = this.imageDimensions.width/5;
                height = this.imageDimensions.height/6;
                break;
            }

            default:
                break;
        }
        return {width, height};
    }
}