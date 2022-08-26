import { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

export function MobileMenuList({ categorys, classStyle }) {

    let ul = []
    const [liListe, setLislist] = useState()

    // first set position
    if (!classStyle.includes("hidden") && liListe === undefined) {
        returnBackSet()
    }

    // reset position when menu is closed
    if (liListe !== categorys && liListe !== undefined && classStyle.includes("hidden")) {
        returnBackSet()
    }
    
    function returnBackSet() {
        setLislist(categorys)
    }

    // set position
    function liListeset(e) {
        setLislist(categorys[e.target.name].children)
    }

    for (const key in liListe) {
        // to set if under categorys exist
        if (liListe[key].children !== undefined) {
            const newLi = <li key={liListe[key].name}>
                <button onClick={liListeset} name={key}>
                    {liListe[key].name}
                    <BsThreeDots size="2em" color='#ffd1b3' />
                </button>
            </li>

            ul.unshift(newLi)
        } else {
            const normCat = liListe[key].name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            const toLink = `/ProductsList?category=${normCat}`

            const newLi = <li key={liListe[key].name}>
                <Link to={toLink}>
                    {liListe[key].name}
                </Link>
            </li>

            ul.unshift(newLi)
        }
    }

    // implement return btn
    if (liListe !== categorys) {
        const returnBack = <li key='return'>
            <button onClick={returnBackSet} className="return">
                <IoIosArrowBack/>
                RETOUR
            </button>
        </li>

        ul.unshift(returnBack)
    }

    return (
        <ul className={classStyle}>
            {ul}
        </ul>
    )
}