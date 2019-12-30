import React from 'react';
import { FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import { faGlobeAfrica, faBomb, faSkull, faGrinTongueWink, faThumbsDown, faExclamation,  
        faHatWizard, faTrash, faRadiation } from '@fortawesome/free-solid-svg-icons';
import './ListItem.css';

const ListItem = ({ label }) => {
    return (
        <div className="item">
        {label}
        <button>
            <Icon icon={faExclamation} color="red"/><br/>
            Important
        </button>
        <button>
            <Icon icon={faBomb} color="grey"/><br/>
            Urgent
        </button>
        <button>
            <Icon icon={faGlobeAfrica} color="green"/><br/>
            Globaly Important
        </button>
        <button>
            <Icon icon={faHatWizard} color="blue"/><br/>
            Magic Necessary
        </button>
        <button>
            <Icon icon={faRadiation} color="#FF11CC"/><br/>
            Radioactive
        </button>                    
        <button>
            <Icon icon={faSkull} color="#FF11CC"/><br/>
            A matter of life and death
        </button>
        <button>
            <Icon icon={faThumbsDown} color="brown"/><br/>
            Not important at all 
        </button>
        <button>                        
            <Icon icon={faGrinTongueWink} /><br/>
            You can forget about it
        </button>
        <button>                        
            <Icon icon={faTrash} /><br/>
            Trash
        </button>       
       
    </div>
    )
}

export default ListItem;
