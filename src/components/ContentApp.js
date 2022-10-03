import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout, Card, Row, Col } from 'antd'
import '../App.css'
const { Content } = Layout
const { Meta } = Card

export default function ContentApp({ datalist }) {
    const navigate = useNavigate()
    return (
        < Content >
            <div className="site-card-wrapper">
                <Row gutter={24}>
                    {datalist && datalist.map(items => (
                        <Col span={8} key={items.idDrink}>
                            <Card
                                hoverable
                                style={{ width: '300px', alignItems: 'center', margin: '10px 10px', textAlign: 'center' }}
                                key={items.idDrink}
                                id={items.idDrink}
                                onClick={() => navigate(`detail/${items.idDrink}`)}
                                cover={<img alt="example" src={items.strDrinkThumb} />}
                            >
                                <Meta title={items.strDrink} textAlign='left' description={items.strCategory} />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </Content >
    )
}
