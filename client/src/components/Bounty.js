import React, { useState } from 'react';
import AddBountyForm from './AddBountyForm';

function Bounty(props) {
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className="bounty">
            { !editToggle ?
            <>
            <h2>{props.firstName} {props.lastName}</h2>
            <h4>Price: {props.price}</h4>
            <h4>{props.type} order</h4>
            <h4>Wanted: <span className="alive">{props.alive? "Alive": "Dead"}</span></h4>
            <div className="btnHolder">
            <button 
                className="edit-btn"
                onClick={()=> setEditToggle(prevToggle => !prevToggle)}>
                    Edit
            </button>
            <button 
                className="delete-btn"
                onClick={() => props.deleteBounty(props._id)}>
                    Delete
            </button>
            </div>{/*end btnHolder*/}
            
            </>
            :
            <>
            <AddBountyForm
                firstName={props.firstName}
                lastName={props.lastName}
                price={props.price}
                alive={props.alive}
                _id={props._id}
                btnText="Submit Edit"
                submit={props.editBounty} />
                <button 
                    className="close-btn"
                    onClick={()=> setEditToggle(prevToggle => !prevToggle)}>
                    Close
                </button>
            </>
            }
        </div>
    );
}

export default Bounty;