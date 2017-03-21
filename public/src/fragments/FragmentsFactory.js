import { Rectangle } from "./../aliases";
import Model from "./../model/Model";
import Fragment from "./Fragment";
import FragmentStatesFactory from "./states/FragmentStatesFactory";

class FragmentsFactory {
  getFragmentsForTexture(txr) {
    const fragments = [];
    const fragmentDimensions = Model.fragmentDimensions;
    const rows = Model.rows;
    const columns = Model.columns;
    let fragmentId = 0;

    for (let i = 0; i < rows - 1; i += 1) {
      for (let j = 0; j < columns - 1; j += 1) {
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

        const texture = txr.clone();
        texture.frame = frameRect;

        const fragment = this.initFragment(
          this.createFragment(fragmentId, texture, anchorPosition)
        );
        fragments.push(fragment);

        fragmentId += 1;
      }
    }

    return fragments;
  }

  // eslint-disable-next-line
  createFragment(fragmentId, texture, anchoredPosition) {
    return new Fragment(fragmentId, texture, anchoredPosition);
  }

  // eslint-disable-next-line
  initFragment(fragment) {
    fragment.applyState(FragmentStatesFactory.getStateDraggable(fragment));
    return fragment;
  }
}

export default new FragmentsFactory();
