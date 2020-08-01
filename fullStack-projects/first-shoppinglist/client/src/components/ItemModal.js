import React from 'react'
import {
  Form,
  Modal,
  Label,
  Input,
  Button,
  ModalBody,
  FormGroup,
  ModalHeader,
} from 'reactstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addItem } from '../actions/itemActions'

class ItemModal extends React.Component{
  state = {
    modal: false,
    name: ''
  }

  static propTypes = { isAuthenticated: PropTypes.bool }

  toggle = () => this.setState({modal: !this.state.modal})

  handleChange = ({ target }) => this.setState({[target.name]: target.value})

  handleSubmit = e => {
    e.preventDefault()

    const newItem = { name: this.state.name }

    this.props.addItem(newItem)

    this.toggle()
  }

  render() {
    return(
      <div>
        { this.props.isAuthenticated ? <Button
          color='dark'
          onClick={this.toggle}
          style={{marginBottom: '2rem'}}
        >
          Add Item
        </Button> : <h4 className='mb-3 ml-4'>Please log in into manage items</h4> }

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>
            Add to Shopping List  
          </ModalHeader>
          <ModalBody onSubmit={this.handleSubmit}>
            <Form>
              <FormGroup>
                <Label for='item'>Item</Label>
                <Input
                  id='item'
                  type='text'
                  name='name'
                  onChange={this.handleChange}
                  placeholder='Add shopping item...'
                />
                <Button color='dark' style={{marginTop: '2rem'}} block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { addItem })(ItemModal)