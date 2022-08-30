import React, { useState } from 'react'
import logo from '../../../assets/img/logo.png'
import { ScrollListener } from '../../../utils/ScrollListener'
import { Link } from "react-router-dom";


export function LogoFuture() {

    const [logoFuture, setLogoFuture] = useState('logo-future')

    ScrollListener(setLogoFuture, "logo-future", "logo-future logo-sticky")

    return (
        <Link to="/" className={logoFuture}>
            <img src={logo} alt="logo Future" width="80" height="80" />
        </Link>
    )
}
