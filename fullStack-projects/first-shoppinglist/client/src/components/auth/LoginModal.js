import React from 'react'
import {
  Form,
  Modal,
  Label,
  Input,
  Alert,
  Button,
  NavLink,
  ModalBody,
  FormGroup,
  ModalHeader,
} from 'reactstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../../actions/authActions'
import { clearErrors } from '../../actions/errorActions'

class LoginModal extends React.Component{
  state = {
    modal: false,
    email: '',
    password: '',
    msg: null
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  }

  toggle = () => {
    // Clear errors
    this.props.clearErrors()
    this.setState({modal: !this.state.modal})
  }

  componentDidUpdate = prevProps => {
    const { error, isAuthenticated } = this.props

    if(error !== prevProps.error){
      // Check for register error
      if(error.id === 'LOGIN_FAIL')
        this.setState({ msg: error.msg })
      else 
        this.setState({ msg: null })
    }

    if(this.state.modal){
      if(isAuthenticated){
        this.toggle()
      }
    }
  }

  handleChange = ({ target }) => this.setState({[target.name]: target.value})

  handleSubmit = e => {
    const { email, password } = this.state
    e.preventDefault()

    Object.keys(this.state).map(item => {
      if(item !== 'modal' && item !== 'msg')
        this.setState({ [item]: '' })
    })

    this.props.login({ email, password })
  }

  render() {
    return(
      <>
        <NavLink
          href='#'
          onClick={this.toggle}
        >
          Login
        </NavLink>

        <Modal
          toggle={this.toggle}
          isOpen={this.state.modal}
        >
          <ModalHeader toggle={this.toggle}>
            Login
          </ModalHeader>
          <ModalBody onSubmit={this.handleSubmit}>
          {this.state.msg ? (<Alert color='danger'>{this.state.msg}</Alert>) : null}
            <Form>
              <FormGroup>
                <Label for='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  name='email'
                  className='mb-3'
                  placeholder='Email...'
                  onChange={this.handleChange}
                />

                <Label for='password'>Password</Label>
                <Input
                  id='password'
                  type='password'
                  name='password'
                  placeholder='Password...'
                  onChange={this.handleChange}
                />

                <Button color='dark' style={{marginTop: '2rem'}} block>
                  Login
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </>
    )
  }
}

const mapStateToProps = state => ({
  error: state.error,
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(
  mapStateToProps,
  { login, clearErrors }
)(LoginModal)