import { Rectangle } from "./../aliases";
import Model from "./../model/Model";
import Fragment from "./Fragment";
import FragmentStatesFactory from "./states/FragmentStatesFactory";

class FragmentsFactory {
  constructor() {
    this._fragmentsPool = [];
  }

  getFragmentsForTexture(txr) {
    if (this._fragmentsPool.length) return this._fragmentsPool;

    const fragmentDimensions = Model.fragmentDimensions;
    const scale = Model.scale;
    const rows = Model.rows;
    const columns = Model.columns;
    let fragmentId = 0;

    for (let i = 0; i < rows; i += 1) {
      for (let j = 0; j < columns; j += 1) {
        const anchorPosition = {
          x: j * fragmentDimensions.width,
          y: i * fragmentDimensions.height
        };

        const frameRect = new Rectangle(
          anchorPosition.x,
          anchorPosition.y,
          fragmentDimensions.width,
          fragmentDimensions.height
        );

        anchorPosition.x *= scale;
        anchorPosition.y *= scale;

        const texture = txr.clone();
        texture.frame = frameRect;

        const fragment = this.initFragment(
          this.createFragment(fragmentId, texture, anchorPosition)
        );
        this._fragmentsPool.push(fragment);

        fragmentId += 1;
      }
    }

    return this._fragmentsPool;
  }

  // eslint-disable-next-line
  createFragment(fragmentId, texture, anchoredPosition) {
    return new Fragment(fragmentId, texture, anchoredPosition);
  }

  // eslint-disable-next-line
  initFragment(fragment) {
    fragment.applyState(FragmentStatesFactory.getStateInit(fragment));
    return fragment;
  }
}

export default new FragmentsFactory();
