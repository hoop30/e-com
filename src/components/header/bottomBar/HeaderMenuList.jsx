import React, { Component } from 'react'
import { HeaderMenuCategoryList } from './HeaderMenuCategoryList'
import { HeaderMenuSubCategoryList } from './HeaderMenuSubCategoryList'
import Commerce from '@chec/commerce.js'

const commerce = new Commerce('pk_test_46054d518a6be8f690e1432a52a28b5586392960bbb91');

export class HeaderMenuList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            category: [],
            subList: null,
        }
    }

    resetSubList = () => {
        if (this.state.subList != null && !this.showProducts) {
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
        const { showProducts } = this.props
        const { show } = this.props
        
        return (
            <React.Fragment>
                <ul className='CategoryList'>
                    <HeaderMenuCategoryList categorys={category} onsetSublist={this.setSublist} />
                </ul>
                <ul className='SubCategoryList'>
                    <HeaderMenuSubCategoryList categorys={category} subList={subList} showProducts={showProducts} show={show} onresetSubList={this.resetSubList}/>
                </ul>
            </React.Fragment>
        )
    }
}
