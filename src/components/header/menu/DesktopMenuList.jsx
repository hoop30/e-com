import React, { useContext } from 'react'
import { CategoryList } from './CategoryList'
import { SubCategoryList } from './SubCategoryList'
import { MenuHiddenContext } from '../../../context/MenuHiddenContext'

export function DesktopMenuList({ category, subList, setSublist, resetSubList}) {
    const { setMenu, unSetMenu } = useContext(MenuHiddenContext)

    return (
            <div className="desktop-menu">
                <div className='CategoryListBox'>
                    <ul className='CategoryList' onMouseEnter={setMenu} onMouseLeave={unSetMenu}>
                        <CategoryList categorys={category} onsetSublist={setSublist} />
                    </ul>
                </div>
                <ul className='SubCategoryList' onMouseEnter={setMenu} onMouseLeave={unSetMenu}>
                    <SubCategoryList categorys={category} subList={subList} onresetSubList={resetSubList} />
                </ul>
            </div>
    )
}
