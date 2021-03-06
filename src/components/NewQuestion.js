import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader,Row,Col,Input,Button} from 'reactstrap'
import { handleAddQuestion } from '../actions/shared';
import { Redirect } from 'react-router-dom';

class NewQuestion extends Component {
    state = {
        input1:'',
        input2:''
    }
     handleSubmit = (e) => {
        e.preventDefault()
        const {dispatch, authedUser, history} = this.props
        const {input1, input2} = this.state

        if(input1&&input2) {
            dispatch(handleAddQuestion({optionOneText:input1, optionTwoText:input2, authedUser}))
            history.push('/');
        }
        else
        {
            alert("Please fill the details")
        }
    };

    handleInput1Change = (e) => {
        this.setState({
            input1:e.target.value
        })
    };

    handleInput2Change = (e) => {
        this.setState({
            input2:e.target.value
        })
    };

    render() {
        const {authedUser} = this.props;
        if(!authedUser) return(
            <Redirect to="/login" />
        )
        return(
            <div className="cardAlign">
                <Card>
                    <center>
                        <CardHeader><h3>Create New Question</h3></CardHeader>
                    </center>
                    <Row>
                        <Col>
                            <p style={{margin:"20px"}}>Complete the question:</p>
                            <b style={{margin:"20px"}}>Would You Rather...</b>

                            <Input onChange={this.handleInput1Change} style={{margin:"20px",width:"90%",marginBottom:"5px"}} type="text" placeholder="Enter Option One..." />
                            <center><h2>OR</h2></center>
                            <Input onChange={this.handleInput2Change} style={{margin:"20px",width:"90%",marginTop:"5px"}} type="text" placeholder="Enter Option Two..." />

                            <Button onClick={this.handleSubmit} style={{margin:"20px",width:"90%"}} color="primary" block>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)