import { v4 as uuidv4 } from 'uuid';
import fitconnect from '../images/fitconnect.png';
import firstport from '../images/firstport.png';

const projects = [
  {
    id: uuidv4(),
    name: 'FITconnect',
    desc:
      "A GitHub collaboration application, that allows trainers to read, post, edit, and delete 'articles.' Articles can be the trainers list of services they offer or other health related materials. See 'personal links' at bottom of page for link.",
    img: fitconnect,
  },
  {
    id: uuidv4(),
    name: 'First Portfolio',
    desc:
      "First Portfolio website. See 'personal links' at bottom of page for link.",
    img: firstport,
  },
];

export default projects;

// https://fitconnect1.herokuapp.com/
// https://portfoliodm.netlify.app/
