import React, { useState } from 'react'
import { ScrollListener } from '../../../utils/ScrollListener'
import { HeaderMenuList } from '../bottomBar/HeaderMenuList'
import { useContext } from 'react'
import { MenuHiddenContext } from '../../../context/MenuHiddenContext'

export function StickyBtn() {
    
    const [stickyBtnhidden, setStickyBtnhidden] = useState('stickyBtnhidden hidden')
    const [stickyBtnClass, setStickyBtnClass] = useState(true)
    let stickyBtn = "stickyBtn"
    let stickyMenuClass = "stickyBtnMenu hidden"
    stickyBtnClass ? stickyBtn = "stickyBtn" : stickyBtn = "stickyBtn active"
    stickyBtnClass ? stickyMenuClass = false : stickyMenuClass = "stickyBtnMenu"

    ScrollListener(setStickyBtnhidden, 'stickyBtnhidden hidden', 'stickyBtnhidden')

    function userClick() {
        setStickyBtnClass(!stickyBtnClass)
    }

    const { toggle } = useContext(MenuHiddenContext)

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
            {/* <HeaderMenuList show={!stickyBtnClass}/> */}
        </React.Fragment>
    )
}
