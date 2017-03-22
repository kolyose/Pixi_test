import HorizontalLayoutSettings from "./HorizontalLayoutSettings";
import VerticalLayoutSettings from "./VerticalLayoutSettings";

class Model {
  constructor() {
    /* TODO: put here and parse settings JSON */
    this._layoutSettings = undefined;
    this._fragmentsNumber = 12;
    this._texture = undefined;
  }

  /*
    *    Factory method to init layout settings based on image dimentions
    */
  initLayoutSettingsByImageDimensions(imageDimensions, rendererDimensions) {
    if (imageDimensions.width > imageDimensions.height) {
      this._layoutSettings = new HorizontalLayoutSettings(
        imageDimensions,
        rendererDimensions
      );
      return;
    }
    this._layoutSettings = new VerticalLayoutSettings(
      imageDimensions,
      rendererDimensions
    );
  }

  get texture() {
    return this._texture;
  }

  set texture(texture) {
    this._texture = texture;
  }

  get scale() {
    return this._layoutSettings.scale;
  }

  get rows() {
    return this._layoutSettings.getRowsByFragmentsNumber(this._fragmentsNumber);
  }

  get columns() {
    return this._layoutSettings.getColumnsByFragmentsNumber(
      this._fragmentsNumber
    );
  }

  get fragmentDimensions() {
    return this._layoutSettings.getFragmentDimensionsByFragmentsNumber(
      this._fragmentsNumber
    );
  }

  // eslint-disable-next-line
  get anchorPrecision() {
    return 10;
  }
}

export default new Model();
