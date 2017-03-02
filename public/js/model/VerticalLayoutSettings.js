import BaseLayoutSettings from './BaseLayoutSettings';

export default class VerticalLayoutSettings extends BaseLayoutSettings{
    constructor(imageDimensions, rendererDimensions){
        super(imageDimensions, rendererDimensions);
    }

    getRowsByFragmentsNumber(fragmentsNumber){
        super.getRowsByFragmentsNumber(fragmentsNumber);
        switch (fragmentsNumber){
            case 12: return 4;
            case 20: return 5;
            case 30: return 6;
            default: return 1;
        }
    }

     getColumnsByFragmentsNumber(fragmentsNumber){
        super.getColumnsByFragmentsNumber(fragmentsNumber);
        switch (fragmentsNumber){
            case 12: return 3;
            case 20: return 4;
            case 30: return 5;
            default: return 1;
        }
    }

    get scale(){
        return this.rendererDimensions.height/this.imageDimensions.height;
    }
}