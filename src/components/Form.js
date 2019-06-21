import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../actions';

const initialState = {
  title: '',
  attributes: [],
  description: ''
};

class Form extends React.Component {
  state = { ...initialState };

  clearState = () => {
    this.setState({ ...initialState });
  };

  handleChange = event => {
    const { id, value } = event.target;
    if (id === 'attributes') {
      this.setState({ [id]: value.split(',') });
    } else {
      this.setState({ [id]: value });
    }
  };

  handleSubmit = event => {
    this.props.addItem(this.state);
    event.preventDefault();
    this.clearState();
  };

  validateForm = () => {
    const { title, attributes, description } = this.state;
    const isInvalid = !title || !attributes || !description;
    return isInvalid;
  };

  render() {
    const { title, attributes, description } = this.state;

    return (
      <div className='container-fluid'>
        <hr />
        <form onSubmit={event => this.handleSubmit(event)}>
          <div className='form-group'>
            <label
              htmlFor='title'
              className='float-left'
              style={{ color: 'darkcyan' }}
            >
              Заголовок*
            </label>
            <input
              type='text'
              className='form-control'
              id='title'
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group'>
            <label
              htmlFor='attributes'
              className='float-left'
              style={{ color: 'darkcyan' }}
            >
              Добавить пункт
            </label>
            <input
              type='text'
              className='form-control'
              id='attributes'
              value={attributes}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group'>
            <label
              htmlFor='description'
              className='float-left'
              style={{ color: 'darkcyan' }}
            >
              Описание
            </label>
            <input
              type='text'
              className='form-control'
              id='description'
              value={description}
              onChange={this.handleChange}
            />
          </div>
          <button
            type='submit'
            className='btm btn-info float-left'
            disabled={this.validateForm()}
          >
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addItem }
)(Form);
