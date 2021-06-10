import React from 'react';

function Postt(props) {
    return (
        <div>
            <div className="card" >
                <img className="card-img-top" src={props.img} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the
                            card's content.</p>
                    </div>
            </div>
        </div>
    );
}

export default Postt;