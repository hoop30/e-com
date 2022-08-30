import React, { useContext, useState, useEffect } from 'react'
import { CategoryList } from './CategoryList'
import { SubCategoryList } from './SubCategoryList'
import { MenuHiddenContext } from '../../../context/MenuHiddenContext'
import { FetchCategorys } from '../../../lib/FetchCategorys'

export function DesktopMenuList({ subList, setSublist, resetSubList}) {
    const { MenuHidden, setMenu, unSetMenu } = useContext(MenuHiddenContext)
    const [categorys, setCategorys] = useState()
    const [subcategorys, setSubCategorys] = useState([])
    
    useEffect(() => {
        FetchCategorys(setCategorys);
    }, []);
    
    if (categorys !== undefined && MenuHidden.includes('hidden')) {
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
                        <CategoryList categorys={categorys} onSetSubCategorys={onSetSubCategorys} />
                    </ul>
                </div>
                <ul className='sub-menu-category-list' onMouseEnter={setMenu} onMouseLeave={unSetMenu}>
                    <SubCategoryList categorys={categorys} subcategorys={subcategorys} onresetSubList={resetSubList} />
                </ul>
            </div>
    )
}
