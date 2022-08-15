import React from 'react'
import { IoIosArrowForward } from "react-icons/io"
import logoInformatique from "../../assets/logo/Informatique.png"
import logoPhoto from "../../assets/logo/Photo.png"
import logoTéléphonie from "../../assets/logo/Téléphonie.png"
import logoVidéo from "../../assets/logo/Vidéo.png"
import { Link } from "react-router-dom";

export function HeaderMenuCategoryList({liListe, liListeset}) {
    let categorys = []
    let i = 0
    const logos = {
        Informatique: logoInformatique,
        Photo: logoPhoto,
        Téléphonie: logoTéléphonie,
        Vidéo: logoVidéo
    }
    for (const category in liListe) {
        let liclass = ""
        i === 0 ? liclass = "active" : liclass = ""

        const newCategory = <li className={liclass} key={i}>
            <Link to="/ProductsList" onMouseEnter={liListeset} name={category}>
                <div>
                    <img src={logos[category]} alt="" width="30px" height="30px" />
                    <p>{category}</p>
                </div>
                <IoIosArrowForward />
            </Link>
        </li>

        categorys[i] = newCategory

        i++
    }
  
    return categorys
}
