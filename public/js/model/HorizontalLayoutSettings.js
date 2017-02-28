import BaseLayoutSettings from './BaseLayoutSettings';

export default class HorizontalLayoutSettings extends BaseLayoutSettings{
    constructor(imageDimensions){
        super(imageDimensions);
    }

    getImageScaleByRendererDimensions(rendererDimensions){
        return rendererDimensions.width/this.imageDimensions.width; 
    }

    getFragmentDimensionsByFragmentsNumber(fragmentsNumber){
        let width, height;
        switch (fragmentsNumber){
            case 12:
            {
                width = this.imageDimensions.width/4;
                height = this.imageDimensions.height/3;
                break;
            }

            case 20:
            {
                width = this.imageDimensions.width/5;
                height = this.imageDimensions.height/4;
                break;
            }

            case 30:
            {
                width = this.imageDimensions.width/5;
                height = this.imageDimensions.height/4;
                break;
            }

            default:
                break;
        }
        return {width, height};
    }
}