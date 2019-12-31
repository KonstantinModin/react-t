import { faGlobeAfrica, faBomb, faSkull,  faThumbsDown, faExclamation, faHatWizard, faTrash, 
    faRadiation } from '@fortawesome/free-solid-svg-icons';
import { faGrinTongueWink } from '@fortawesome/free-regular-svg-icons';

const buttonsArray = [
    {
        id:0,
        label: 'Important',
        color: '#800000',
        icon: faExclamation     
    },
    {
        id:1,
        label: 'Urgent',
        color: '#ff0066',
        icon: faBomb      
    },
    {
        id:2,
        label: 'Important Globaly',
        color: 'green',
        icon: faGlobeAfrica       
    },
    {
        id:3,
        label: 'Magic Required',
        color: 'blue',
        icon: faHatWizard     
    },
    {
        id:4,
        label: 'Radioactive',
        color: '#ff0000',
        icon: faRadiation      
    },
    {
        id:5,
        label: 'A matter of life and death',
        color: 'black',
        icon: faSkull       
    },    
    {
        id:6,
        label: 'Not important at all',
        color: 'tomato',
        icon: faThumbsDown        
    },
    {
        id:7,
        label: 'You can forget about it',
        color: 'DodgerBlue',
        icon: faGrinTongueWink     
    },
    {
        id:8,
        label: 'Trash',
        color: 'brown',
        icon: faTrash,
        trash: true        
    }
];

export default buttonsArray;