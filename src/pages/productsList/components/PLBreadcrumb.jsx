import React from 'react'
import { ReturnBtn } from '../../../utils/ReturnBtn'

export function PLBreadcrumb({location}) {

    return (
        <div className='pl-breadcrumb'>
            <ReturnBtn />
            {location}
        </div>
    )
}
