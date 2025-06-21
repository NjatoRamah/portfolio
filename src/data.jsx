import{ FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen, FaBriefcase, FaGraduationCap, FaCode,} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink} from 'react-icons/fi';
import work1 from './assets/sary/Call center.jpg';
import work2 from './assets/sary/2.jpg';
import work3 from './assets/sary/nature.jpg';
import work4 from './assets/sary/course-03.jpg';
import work5 from './assets/sary/nature.jpg';
import work6 from './assets/sary/profile1.png';

import Theme1 from './assets/sary/viloet.png';
import Theme2 from './assets/sary/rouge.png';
import Theme3 from './assets/sary/bleuciel.png';
import Theme4 from './assets/sary/bleu.png';
import Theme5 from './assets/sary/jauneatre.png';
import Theme6 from './assets/sary/gris.png';
import Theme7 from './assets/sary/vert.png';
import Theme8 from './assets/sary/jaune.png';
import Theme9 from './assets/sary/grisclaire.png';

export const links = [
    {
        id: 1,
        name: 'Home',
        icon: <FaHome className='nav__icon' />,
        path: '/',
    },
    {
        id: 2,
        name: 'About',
        icon: <FaUser className='nav__icon' />,
        path: '/about',
    },
    {
        id: 3,
        name: 'Portefolio',
        icon: <FaFolderOpen className='nav__icon' />,
        path: '/portefolio',
    },
    {
        id: 4,
        name: 'Contact',
        icon: <FaEnvelopeOpen className='nav__icon' />,
        path: '/contact',
    }
];

export const personalInfo = [
    {
        id: 1,
        title: 'First Name ',
        description: 'Oninjatovo',
    },
    {
        id:2,
        title: 'Name',
        description: 'RAMAHERY',
    },
    {
        id:3,
        title: 'Age ',
        description: '29 Ans',
    },
    {
        id: 4,
        title: 'Nationality',
        description: 'Malgache',
    },
    {
        id:5,
        title: 'Développeur',
        description: 'Junior',
    },
    {
        id:6,
        title:'Adresse',
        description: 'Ambohimanala Andoharanofotsy Antananarivo Madagascar',
    },
    {
        id:7,
        title: 'Téléphone',
        description: '+261346670196, +261336114383',
    },
    {
        id:8,
        title:'Email ',
        description: 'oramahery@gmail.com',
    },
    {
        id:9,
        title: 'Skype',
        description: 'Njato Ramah',
    },
    {
        id:10,
        title: 'Langues: ',
        description: 'Français, Malagache, Notion en d\'Anglais ',
    },

];
export const stats = [
    {
        id:1,
        no:'12+',
        title: 'Année de <br/> Experience ',
    },
    {
        id:2,
        no:'97+',
        title: 'Completer <br/> Projects',
    },
    {
        id:3,
        no: '81+',
        title: 'Happy <br /> Customers',
    },
    {
        id:1,
        no:'53+',
        title:'Awards <br/> Won',
    },
];
export const resume = [
    {
        id:1,
        category:'experience',
        icon: <FaBriefcase/>,
        year: '2024-2025',
        title: 'SMMEC',
        desc: 'Développeur, flutteur, Laravel, React JS, RestAPI, Maintenance Microfinance crédit en PHP 5 Cors Bankings ( Orchide), Chez SMMEC.',
    },
    {
        id:2,
        category:'experience',
        icon: <FaBriefcase/>,
        year: '2024',
        title: ' Ardware Consulting',
        desc: 'développeur Laravel + React JS + Rest API. (création d’un site d’application de Location de voiture, et application du hotel lemurs ampefiloa)',
    },
    {
        id:3,
        category:'experience',
        icon: <FaBriefcase/>,
        year: '2024',
        title: 'Hopes',
        desc: ' développeur Laravel (création de site de Jobspace)',
    },
    {
        id:3,
        category:'experience',
        icon: <FaBriefcase/>,
        year: '2023',
        title: 'Ardward Consulting',
        desc: ' Stagiaire en développeur symfony (création de site de livraison)',
    },
    {
        id:3,
        category:'experience',
        icon: <FaBriefcase/>,
        year: '2023',
        title: 'Auximad',
        desc: ' Stagiaire en développeur Symfony, (création de Gestion de stock)',
    },
    {
        id:3,
        category:'experience',
        icon: <FaBriefcase/>,
        year: '2023',
        title: 'Easytech Madagascar',
        desc: ' Opérateur de saisie.',
    },
    {
        id:3,
        category:'experience',
        icon: <FaBriefcase/>,
        year: '2023',
        title: 'Groupe Studia ',
        desc: '  Opérateur de saisie ',
    },
    {
        id:3,
        category:'experience',
        icon: <FaBriefcase/>,
        year: '2023',
        title: 'Eline Soft&Data',
        desc: '  Opérateur de saisie ',
    },
    {
        id:3,
        category:'experience',
        icon: <FaBriefcase/>,
        year: '2023',
        title: 'Lycée Privée Tsinjosoa Fénoarivo',
        desc: ' Enseignent de Physique Chimie en classe de 2nd et 5ème',
    },
    {
        id:4,
        category:'education',
        icon: <FaGraduationCap/>,
        year: '2020',
        title: 'Master II ENCOUR en Informatique <span> Ankatso Université </span>',
        desc: 'MISEI  (Master en Ingénierie du Système Electronique et Informatique) dans le domaine des Sciences et technologie à L Université d’Antananarivo. ',
    },
    {
        id:7,
        category:'education',
        icon: <FaGraduationCap/>,
        year: '2019',
        title: '4 éme année ou Master I en Informatique <span> Ankatso Université </span>',
        desc: 'MISEI  (Master en Ingénierie du Système Electronique et Informatique) dans le domaine des Sciences et technologie à L Université d’Antananarivo. ',
    },
    {
        id:5,
        category:'education',
        icon: <FaGraduationCap/>,
        year: '2018',
        title: 'Licence en Informatique <span> Ankatso Université </span>',
        desc: 'LIPSS (Licence d’Ingénierie en Physique de Signaux et Système) dans le domaine des Sciences et technologie à L Université d’Antananarivo. ',
    },
    {
        id:6,
        category:'education',
        icon: <FaGraduationCap/>,
        year: '2014',
        title: 'Baccalaureat <span> LFMJ Imerintsiatosika </span>',
        desc: '',
    },
    {
        id:6,
        category:'education',
        icon: <FaGraduationCap/>,
        year: '2025',
        title: 'Genèse',
        desc: 'Formation Power BI',
    },
    {
        id:6,
        category:'education',
        icon: <FaGraduationCap/>,
        year: '2023-2024',
        title: 'HOPES FORMATION',
        desc: 'Formation développeur web',
    },
    {
        id:6,
        category:'education',
        icon: <FaGraduationCap/>,
        year: '2021',
        title: 'NEITIC Madagascar',
        desc: ' Formation Téléopérateur',
    },
    {
        id:6,
        category:'education',
        icon: <FaGraduationCap/>,
        year: '2020',
        title: 'Devinbox',
        desc: ' Formation développeurs web PHP',
    },
];
export const skills= [
    {
        id:1,
        title:'Html',
        //percentage: '90',
    },
    {
        id:2,
        title:'Javascript',
        //percentage: '89',
    },
    {
        id:3,
        title:'Css',
        //percentage: '70',
    },
    {
        id:4,
        title:'PHP',
        //percentage: '85',
    },
    {
        id:5,
        title:'ReactJS',
        //percentage: '35',
    },
    {
        id:6,
        title:'Laravel',
        //percentage: '95',
    },
    {
        id:7,
        title:'Symfony',
        
    },
    {
        id:8,
        title:'Sass',
        
    },
    {
        id:9,
        title:'Flutter',
        
    },
    {
        id:10,
        title:'RestApi',
        
    },
    {
        id:11,
        title:'Power BI',
        
    },
];
export const portfolio = [
    {
        id:1,
        img:work1,
        title: 'Photo Editing',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project:',
                desc: 'Photo',
            },
            {
                icon: <FiUser/>,
                title: 'Client:',
                desc: 'Dribble',
            },
            {
                icon: <FaCode/>,
                title: 'Language:',
                desc: 'Adobe Photoshop',
            },

        ]
    },
    {
        id:2,
        img: work2,
        title: 'Website Design',
        details:[
            {
                icon:<FiFileText/>,
                title: 'Project :',
                desc: 'Website',
            },
            {
                icon:<FiUser/>,
                title:'Client :',
                desc: 'Dribble',
            },
            {
                icon: <FaCode/>,
                title: 'Language:',
                desc: 'Adobe Photoshop',
            },
        ]
    },
    {
        id:3,
        img: work3,
        title: 'Video Editing',
        details:[
            {
                icon:<FiFileText/>,
                title: 'Project :',
                desc: 'Video',
            },
            {
                icon:<FiUser/>,
                title:'Client :',
                desc: 'Dribble',
            },
            {
                icon: <FaCode/>,
                title: 'Language:',
                desc: 'Adobe Photoshop',
            },
        ]
    },
    {
        id:4,
        img: work4,
        title: 'Evenement',
        details:[
            {
                icon:<FiFileText/>,
                title: 'Project :',
                desc: 'Evenement',
            },
            {
                icon:<FiUser/>,
                title:'Client :',
                desc: 'Dribble',
            },
            {
                icon: <FaCode/>,
                title: 'Language:',
                desc: 'Adobe Photoshop',
            },
        ]
    }
];
export const themes = [
    {
        id:1,
        img:Theme1,
        color: 'hsl(271, 76%, 53%)',
    },
    {
        id:2,
        img:Theme2,
        color: 'hsl(0, 94%, 38%)',
    },
    {
        id:3,
        img:Theme3,
        color: 'hsl(0, 37%, 13%)',
    },
    {
        id:4,
        img:Theme4,
        color: 'hsl(219, 83%, 44%)',
    },
    {
        id:5,
        img:Theme5,
        color: 'hsl(59, 96%, 45%)',
    },
    {
        id:6,
        img:Theme6,
        color: 'hsl(60, 1%, 28%)',
    },
    {
        id:7,
        img:Theme7,
        color: 'hsl(123, 99%, 31%)',

    },
    {
        id:8,
        img:Theme8,
        color: ' hsl(12, 90%, 49%)',
    },    {
        id:9,
        img:Theme9,
        
        color: 'hsl(12, 3%, 66%)',
    },
];