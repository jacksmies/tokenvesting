import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Spinner from './Spinner'
import moment from 'moment'
import Header from './Header'
import VestingSchedule from './VestingSchedule'
import VestingDetails from './VestingDetails'

import '../stylesheets/TokenVestingApp.css'


class TokenVestingApp extends Component {
  constructor() {
    super()
    this.state = { name: 'Token', loading: true }
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    const { address, token } = this.props
    return (
      <>
        { this.state.loading ? <Spinner /> : null }
        <Header address={ address } token={ token } tokenName={ this.state.name } />
        <Container>
          <Row>
            <Col>1 of 2</Col>
            <Col>2 of 2</Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <VestingDetails
                address={ address }
                token={ token }
                details={ this.state }
                getData={ () => this.getData() }
                setLoader={ x => this.setLoader(x) }
              />
            </Col>
            <Col xs={12} md={6}>
              <VestingSchedule details={ this.state } />
            </Col>
          </Row>
        </Container>
      </>
    )
  }

  formatDate(date) {
    if (! date) return
    return moment(date).format("MMMM Do YYYY")
  }

  setLoader(loading) {
    this.setState({ loading })
  }

  async getData() {
    this.setState({
      start: new Date(2019,10,20)/1000,
      end: new Date(2025,2, 20)/1000,
      cliff: new Date(2020,4,20)/1000,
      total: 100000000000,
      released: 30000000000,
      vested: 40000000000,
      decimals: 8,
      beneficiary: "0x22",
      owner: "0x455",
      revocable: true,
      revoked: false,
      name: "Animal Concerts Token",
      symbol: "ACT",
      loading: false
    })
  }
}

export default TokenVestingApp
