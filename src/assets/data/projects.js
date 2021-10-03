import { v4 as uuidv4 } from 'uuid';
import fitconnect from '../images/fitconnect.png';
import firstport from '../images/firstport.png';

const projects = [
  {
    id: uuidv4(),
    name: 'FITconnect',
    desc:
      "A GitHub collaboration application, that allows trainers to read, post, edit, and delete 'articles.' Articles can be the trainers list of services they offer or other health related materials.",
    img: fitconnect,
    deployed: 'https://fitconnect1.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'First Portfolio',
    desc: 'First Portfolio website.',
    img: firstport,
    deployed: 'https://portfoliodm.netlify.app/',
  },
];

export default projects;
