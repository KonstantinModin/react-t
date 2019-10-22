// import React from 'react';

// const PersonInfo = ({id}) => {
//     if (!id) return <div>Please select person... </div>;
//     return (
//         <div>
//             This person has ID of {id}
//         </div>
//     )
// }



import React, { PureComponent } from 'react'

class PersonInfo extends PureComponent {
    render() {
        if (!this.props.id) return <div>Please select person... </div>;
        
        return (
        <div>
            This person has ID of {this.props.id}
        </div>
    )
    }
}

export default PersonInfo;
