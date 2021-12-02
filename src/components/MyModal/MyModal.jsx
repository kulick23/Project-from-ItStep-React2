import React from 'react'

const MyModal = ({visible, setVisible, children}) => {
    return (
        <div className="modal context">
            <div className="modal content">
            <div className="modal body">
                <i class="material-icons">close</i>
           {children}
    
        </div>
        <div class="modal-footer">
            <a href="#!">Close</a>
        </div>
        </div>    
        </div>
    )
}

export default MyModal
 