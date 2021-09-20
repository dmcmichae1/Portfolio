import { v4 as uuidv4 } from 'uuid';
import fitconnect from '../images/fitconnect.png';
import firstport from '../images/firstport.png';

const projects = [
  {
    id: uuidv4(),
    name: 'FITconnect',
    desc:
      'https://fitconnect1.herokuapp.com/ An application that allows trainers to read, post, edit, and delete "articles." Articles can be the trainers list of services they offer or other health related materials.',
    img: fitconnect,
  },
  {
    id: uuidv4(),
    name: 'First Portfolio',
    desc: 'https://portfoliodm.netlify.app/  First Portfolio website',
    img: firstport,
  },
];

export default projects;
