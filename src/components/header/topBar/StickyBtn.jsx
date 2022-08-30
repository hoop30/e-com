import React, { useState } from 'react'
import { ScrollListener } from '../../../utils/ScrollListener'
import { useContext } from 'react'
import { MenuHiddenContext } from '../../../context/MenuHiddenContext'

export function StickyBtn() {
    
    const [stickyBtnhidden, setStickyBtnhidden] = useState('sticky-btn hidden')
    let stickyBtn = "sticky-btn-line"
    const { MenuHidden ,toggle } = useContext(MenuHiddenContext)
    MenuHidden !== 'menu' ? stickyBtn = "sticky-btn-line" : stickyBtn = "sticky-btn-line active"

    ScrollListener(setStickyBtnhidden, 'sticky-btn hidden', 'sticky-btn')

    return (
        <React.Fragment>
            <button className={stickyBtnhidden} type="button" aria-label="Toggle navigation" onClick={toggle}>
                <div className={stickyBtn}>
                    <span className="line l1"></span>
                    <span className="line l2"></span>
                    <span className="line l3"></span>
                </div>
                <p>MENU</p>
            </button>
        </React.Fragment>
    )
}
