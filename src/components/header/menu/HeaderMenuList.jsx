import React, { useContext } from 'react'
import { HeaderMenuCategoryList } from './HeaderMenuCategoryList'
import { HeaderMenuSubCategoryList } from './HeaderMenuSubCategoryList'
import { MenuHiddenContext } from '../../../context/MenuHiddenContext'

export function HeaderMenuList({ category, subList, setSublist, resetSubList}) {
    const { setMenu, unSetMenu } = useContext(MenuHiddenContext)

    return (
        <React.Fragment>
            <div className='cat'>
                <ul className='CategoryList' onMouseEnter={setMenu} onMouseLeave={unSetMenu}>
                    <HeaderMenuCategoryList categorys={category} onsetSublist={setSublist} />
                </ul>
            </div>
            <ul className='SubCategoryList' onMouseEnter={setMenu} onMouseLeave={unSetMenu}>
                <HeaderMenuSubCategoryList categorys={category} subList={subList} onresetSubList={resetSubList} />
            </ul>
        </React.Fragment>
    )
}
