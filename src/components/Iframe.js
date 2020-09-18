import React from 'react';

const Iframe = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;     
    return (
        // basic bootstrap classes. you can change with yours.
        // <div className="col-md-12">
                <iframe src={src} width="100%" height = "1100px"></iframe>
            // </div>
    );
};

export default Iframe;
