import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { Card, Button,Row, Col, CardImg, CardHeader } from 'reactstrap'



class Cardd extends Component {

  render() {
    const {question,userName,userImg,id} = this.props
    const Qdesc = question.optionOne.text.substring(0,20)

    return (
      
            <Row style={{margin:"20px"}}>
              <Col sm="10">
                <Card style={{boxShadow:"5px 10px 8px #888888",width:"650px"}}>
                <CardHeader><b>{userName} Asks:</b></CardHeader>
                  <Row>
                    <Col sm="2">
                      <CardImg style={{borderRadius:"50%",margin:"20px"}} src={userImg}></CardImg>
                    </Col>
                    <Col sm="1">
                        <div className="divider"></div>
                    </Col>
                    <Col sm="9">
                      <div style={{margin:"20px"}}>
                        <b>Would You Rather</b>
                        <center>
                          <p style={{marginTop:"10px"}}>{Qdesc}</p>
                          <p>or...</p>
                        </center>
                        <Link style={{textDecoration:"none"}} to={{pathname:"/questions/"+id,id:id}}>
                            <Button style={{marginTop:"10px"}} color="success" size="lg" block>View Poll</Button>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col> 
            </Row>
            
    )
  }
}

function mapStateToProps({questions, users}, {id}) {
    const question = questions[id]
    
    return {
        question,
        userName:users[question.author].name,
        userImg:users[question.author].avatarURL
    }
}


export default connect(mapStateToProps)(Cardd)
