import React from 'react'

export function MenuBtn({ btnClass, userClick }) {

    return (
        <button className="bouton" type="button" aria-label="Toggle navigation" onClick={userClick}>
            <div className={btnClass}>
                <span className="line l1"></span>
                <span className="line l2"></span>
                <span className="line l3"></span>
                <span className="line l4"></span>
            </div>
            <p>MENU</p>
        </button>
    )
}
