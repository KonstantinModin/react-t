import React from 'react';

export default (WrappedComponent) => {
    const hocComponent = (caption, style) => {
        return (
            <div style={{
                display:'flex',
                flexDirection:'column'
            }}>
                <h4 style={style}>{caption}</h4>
                <WrappedComponent  />
            </div>
        )
    };    

    return hocComponent
}