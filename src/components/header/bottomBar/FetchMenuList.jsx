import React, { Component } from 'react'
import Commerce from '@chec/commerce.js'
import { HeaderMenuList } from './HeaderMenuList'


const commerce = new Commerce('pk_test_46054d518a6be8f690e1432a52a28b5586392960bbb91');

export class FetchMenuList extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            category: [],
            subList: null,
        }
    }

    resetSubList = () => {
        if (this.state.subList != null) {
            const resetSubList = this.state.category[this.state.category.length - 1].children
            this.setState({
                subList: resetSubList
            })
        }
    }

    setSublist = (e) => {
        if (this.state.category[e.target.name] !== undefined) {
            const subList = this.state.category[e.target.name].children
            this.setState({
                subList: subList
            })
        }
    }

    componentDidMount() {
        this.fetchCategory()
    }

    fetchCategory() {
        commerce.categories.list()
            .then((category) => {
                const subNumber = category.data.length - 1
                const subList = category.data[subNumber].children

                this.setState({
                    category: category.data,
                    subList: subList
                })
            })
            .catch((error) => {
                console.log('erreur de chargement', error);
            })
    }

    render() {
        const { category, subList } = this.state
        
        return (
            <HeaderMenuList category={category} subList={subList} setSublist={this.setSublist} resetSubList={this.resetSubList}/>
        )
    }
}
