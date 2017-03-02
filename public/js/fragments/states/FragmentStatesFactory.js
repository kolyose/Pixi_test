import FragmentStateDraggable from './FragmentStateDraggable';
import FragmentStateDragged from './FragmentStateDragged';
import FragmentStateAnchored from './FragmentStateAnchored';

class FragmentStatesFactory{
   
   getStateDraggable(fragment){
       return new FragmentStateDraggable(fragment, this);
   }

   getStateDragged(fragment){
       return new FragmentStateDragged(fragment, this);
   }

   getStateAnchored(fragment){
       return new FragmentStateAnchored(fragment, this);
   }
}

export default new FragmentStatesFactory();