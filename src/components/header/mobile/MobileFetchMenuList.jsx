import React, { Component } from 'react'
import Commerce from '@chec/commerce.js'
import { MobileMenuList } from './MobileMenuList'

const commerce = new Commerce('pk_test_46054d518a6be8f690e1432a52a28b5586392960bbb91');

export class MobileFetchMenuList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            category: []
        }
    }

    componentDidMount() {
        this.fetchCategory()
    }

    fetchCategory() {
        commerce.categories.list()
            .then((category) => {
                this.setState({
                    category: category.data
                })
            }).catch((error) => {
                console.log('erreur de chargement', error);
            })
    }

    render() {
        const { category } = this.state
        const { classStyle } = this.props

        return <MobileMenuList category={category} classStyle={classStyle}/>
    }
}