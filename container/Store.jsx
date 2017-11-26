import React from 'react'
import Head from '../components/Head.jsx'
import styled from 'styled-components'
import { Row, Col, Card } from 'react-materialize'
import CardStore from '../components/card/CardStore.jsx'
import ProdCard from '../components/card/prodCard.jsx'
import CardSearch from '../components/card/CardSearch.jsx'
import axios from 'axios'

const myApi = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
    crossDomain: true,
    xDomain: true,            
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })

const StoreCard = styled.div`
    padding-top : 80px;
`

class Store extends React.Component {
    constructor(props){
        super(props)
        this.state = {data:[]}
        //data:[{name:'patric',price:20},{name:'fuck',price:20}]
        this.handelChange = this.handelChange.bind(this)
    }

    handelChange(e){
        let id= e.target.value
        myApi.get('/product/'+id).then(res => this.setState({data:JSON.parse(res.data)}))
    }

    componentWillMount(){
         myApi.get('/product').then(res => this.setState({data:JSON.parse(res.data)}))
    }
    render() {       
        return (
            <div>
                <CardSearch onChange={this.handelChange} />
                <StoreCard>
                {/* <ProdCard title = {'pao'} price = {300} des={'Shit fuck fcidspdlaskldksa'}/> */}
                    <Row>
                        {this.state.data.map(item=>(
                            <ProdCard id={item.product_id} title = {item.name} price = {item.price} des={'Shit fuck fcidspdlaskldksa'} img={item.img}/>
                        ))}
                    </Row>
                </StoreCard>
            </div>
        )
    }
}
export default Store
