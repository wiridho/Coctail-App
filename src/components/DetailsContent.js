import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './styling/DetailsContent.css'
import { Image } from 'antd';


// Components
import Navbar from './Navbar'
import FooterSec from './FooterSec'
import { Layout } from "antd";



export default function DetailsContent() {
	const { Content } = Layout;
	const { id } = useParams()
	const [data, setData] = useState('')
	const source = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`

	useEffect(() => {
		axios.get(source)
			.then((res) => {
				// console.log(res.data.drinks)
				setData(res.data.drinks)
			})
			.catch(err => console.log(err))
	}, [])

	return (
		<>
			<Layout className='layout'>
				<Navbar />
				<Content className='contentWrapper'>
					{data && data.map((item, index) => (
						<div key={index} className='container'>
							<div className='grid'>
								<div className='left'>
									<Image
										width={430}
										src={item.strDrinkThumb}
									/>
								</div>
								<div className='right'>
									<h3 className="">{item.strMeal}</h3>
									<h3 className="">{item.strCategory}</h3>
									<p>{item.strCategory}</p>
									<h3 className="">Ingredient</h3>
									<ul className="">
										<li>{item.strIngredient1}</li>
										<li>{item.strIngredient2}</li>
										<li>{item.strIngredient3}</li>
										<li>{item.strIngredient4}</li>
										<li>{item.strIngredient5}</li>
										<li>{item.strIngredient6}</li>
										<li>{item.strIngredient7}</li>
										<li>{item.strIngredient8}</li>
										<li>{item.strIngredient9}</li>
										<li>{item.strIngredient10}</li>
										<li>{item.strIngredient11}</li>
										<li>{item.strIngredient12}</li>
										<li>{item.strIngredient13}</li>
									</ul>
									<h3 className=''>Glass</h3>
									<p className=''>{item.strGlass}</p>
									<h3 className=''>Instructions</h3>
									<span className=''>{item.strInstructions}</span>
								</div>
							</div>
						</div>
					))}
				</Content>
				<FooterSec />
			</Layout>
		</>
	)
}


