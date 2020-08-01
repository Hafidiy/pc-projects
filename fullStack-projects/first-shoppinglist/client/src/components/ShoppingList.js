import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getItems, deleteItem } from '../actions/itemActions'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'

class ShoppingList extends React.Component{
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  }

  componentDidMount() {
    this.props.getItems()
  }

  handleDelete = id => this.props.deleteItem(id)

  render(){
    const { items } = this.props.item
    return(
      <Container>
        <ListGroup>
          <TransitionGroup className='shopping-list'>
            {items.map(({ _id, name }) => (
              <CSSTransition
                key={_id}
                timeout={500}
                classNames='fade'
              >
                <ListGroupItem>
                  { this.props.isAuthenticated ? <Button
                      size='sm'
                      color='danger'
                      onClick={this.handleDelete.bind(this, _id)}
                      className='remove-btn'
                    >
                      &times;
                    </Button> : null }
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>      
    )
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList)