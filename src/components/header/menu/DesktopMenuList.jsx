import React, { useContext, useState, useEffect } from 'react'
import { CategoryList } from './CategoryList'
import { SubCategoryList } from './SubCategoryList'
import { DescktopMenuContext } from '../../../context/DescktopMenuContext'
import { FetchCategorys } from '../../../lib/FetchCategorys'

export function DesktopMenuList({ subList, setSublist, resetSubList}) {
    const { descktopMenu, setMenu, unSetMenu } = useContext(DescktopMenuContext)
    const [categorys, setCategorys] = useState()
    const [subcategorys, setSubCategorys] = useState([])
    
    useEffect(() => {
        FetchCategorys(setCategorys);
    }, []);
    
    if (categorys !== undefined && descktopMenu.includes('hidden')) {
        if (subcategorys !== categorys[categorys.length - 1].children) {
            setSubCategorys(categorys[categorys.length - 1].children)
        }
    }

    function onSetSubCategorys(e) {
        if (e.target.name !== undefined) {
            categorys.forEach(category => {
                if (category.name === e.target.name) {
                    setSubCategorys(category.children)
                }
            })
        }
    }
    
    return (
            <div className="desktop-menu">
                <div className='menu-category-list-box'>
                    <ul className='menu-category-list' onMouseEnter={setMenu} onMouseLeave={unSetMenu}>
                        <CategoryList categorys={categorys} onSetSubCategorys={onSetSubCategorys} unSetMenu={unSetMenu}/>
                    </ul>
                </div>
                <ul className='sub-menu-category-list' onMouseEnter={setMenu} onMouseLeave={unSetMenu}>
                    <SubCategoryList subcategorys={subcategorys} unSetMenu={unSetMenu}/>
                </ul>
            </div>
    )
}
