import React from 'react'

export function MenuBtn({btnClass, userClick}) {

    return (
        <button className={btnClass} type="button" aria-label="Toggle navigation" onClick={userClick}>
            <span className="line l1"></span>
            <span className="line l2"></span>
            <span className="line l3"></span>
            <span className="line l4"></span>
        </button>
    )
}
