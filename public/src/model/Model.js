import HorizontalLayoutSettings from "./HorizontalLayoutSettings";
import VerticalLayoutSettings from "./VerticalLayoutSettings";
import app from "./../app";
import EventEmitter from "./../aliases";

class Model extends EventEmitter {
  constructor() {
    super();
    /* TODO: put here and parse settings JSON */
    this._layoutSettings = undefined;
    this._fragmentsNumber = 12;
    this._roundTime = 60; // in seconds
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

  startNewRound() {
    app.ticker.remove(this._updateTimeRemaining);
    this._timeRemaining = this._roundTime;
    app.ticker.add(this._updateTimeRemaining);
  }

  _updateTimeRemaining() {
    this._timeRemaining -= app.ticker.elapsedMS / 1000;
    if (this._timeRemaining <= 0) {
      app.ticker.remove(this._updateTimeRemaining);
      this.emit("ADD new event here");
    }
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

  get timeRemaining() {
    return this._timeRemaining;
  }
}

export default new Model();
