import BaseLayoutSettings from './BaseLayoutSettings';

export default class HorizontalLayoutSettings extends BaseLayoutSettings{
    constructor(imageDimentions){
        super(imageDimentions);
    }

    getImageScaleByRendererDimentions(rendererDimentions){
        return rendererDimentions.width/this.imageDimentions.width; 
    }

    getFragmentDimentionsByFragmentsNumber(fragmentsNumber){
        let width, height;
        switch (fragmentsNumber){
            case 12:
            {
                width = this.imageDimentions.width/4;
                height = this.imageDimentions.height/3;
                break;
            }

            case 20:
            {
                width = this.imageDimentions.width/5;
                height = this.imageDimentions.height/4;
                break;
            }

            case 30:
            {
                width = this.imageDimentions.width/5;
                height = this.imageDimentions.height/4;
                break;
            }

            default:
                break;
        }
        return {width, height};
    }
}