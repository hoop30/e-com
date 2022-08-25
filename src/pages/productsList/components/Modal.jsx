import React from "react";
import ReactDOM from "react-dom";
import { IoMdClose } from 'react-icons/io'
import { ContentProductFilter } from './ContentProductFilter'

export const Modal = ({ isShowing, hide }) =>


    isShowing ?
        ReactDOM.createPortal(
            <div className="modal-body" id="modal">
                <button
                    type="button"
                    className="modal-close-button"
                    onClick={hide}
                >
                    <IoMdClose size="3em"/>
                </button>
                <ContentProductFilter/>
            </div>,
            document.body
        )
        : null

