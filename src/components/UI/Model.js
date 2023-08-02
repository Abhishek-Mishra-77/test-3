import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import './Model.css';

const Backdrop = () => {
    return <div className='backdrop'></div>
}


const ModalOverlay = (props) => {
    return <div className='modal'>
        <div className='content'>{props.children}</div>
    </div>
}

const portalId = document.getElementById('overlays');

const Model = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop />, portalId)}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalId)}
        </Fragment>
    )
}

export default Model;