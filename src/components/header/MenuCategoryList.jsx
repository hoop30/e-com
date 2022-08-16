import React, { Component } from 'react'
import Commerce from '@chec/commerce.js';


const commerce = new Commerce('pk_test_46054d518a6be8f690e1432a52a28b5586392960bbb91');


export class MenuCategoryList extends Component {

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

        return (

            <Category category={category} />

        )
    }
}



// class List extends Component {

//     render() {
//         const { category } = this.props

//         return (
//             <React.Fragment>
//                 <ul className='menuCategoryList'>
//                     {/* {category.map((category) => (
//                         <Category key={category.id} category={category} />
//                     ))} */}

//                     <Category category={category} />
//                 </ul>
//             </React.Fragment>
//         )
//     }
// }



function Category({ category }) {

    //console.log(category);
    let ul = []

    for (const key in category) {
        //console.log(category[key].name);
        const newLi = <li>{category[key].name}</li>

        ul.push(newLi)
    }
    return (
        <ul className='menuCategoryList'>
            {ul}
        </ul>
    )
}

