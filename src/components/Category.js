import React from 'react'
import { Button } from 'antd';
import './styling/Category.css'

export default function Category({ handleClickCategory }) {
    return (
        <>
            <div className='Category site-button-ghost-wrapper'>
                <Button type='submit' ghost onClick={() => handleClickCategory('Shot')}>shot</Button>
                <Button type='submit' ghost onClick={() => handleClickCategory('Cocktail')} >Coctail</Button>
                <Button type='submit' ghost onClick={() => handleClickCategory('Ordinary_Drink')}>Ordinary Drink</Button>

            </div>
        </>

    )
}
