import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { addToFront, addToBack, removeFirst, removeLast } from './actions';

import Card from './components/Card';
import Form from './components/Form';
import Table from './components/Table';

class App extends React.Component {
  state = {
    data: null,
    onCard: true
  };

  handleAddToFront = () => {
    this.props.addToFront(this.props.data);
    this.setState({ data: this.props.data });
  };

  handleAddToBack = () => {
    this.props.addToBack(this.props.data);
    this.setState({ data: this.props.data });
  };

  handleRemoveFirst = () => {
    this.props.removeFirst(this.props.data);
    this.setState({ data: this.props.data });
  };

  handleRemoveLast = () => {
    this.props.removeLast(this.props.data);
    this.setState({ data: this.props.data });
  };

  handleCardOn = () => {
    this.setState({
      onCard: true
    });
  };

  handleCardOff = () => {
    this.setState({
      onCard: false
    });
  };

  render() {
    const { onCard } = this.state;
    const { data } = this.props;

    return (
      <div className='App'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6'>
              <button
                className='btn btn-info btn-block'
                onClick={() => this.handleAddToFront(data)}
                disabled={data.length === 0}
              >
                ДОВАВИТЬ В НАЧАЛО
              </button>
            </div>
            <div className='col-md-6'>
              <button
                className='btn btn-info btn-block'
                onClick={() => this.handleAddToBack(data)}
                disabled={data.length === 0}
              >
                ДОВАВИТЬ В КОНЕЦ
              </button>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-md-6'>
              <button
                className='btn btn-info btn-block'
                onClick={() => this.handleRemoveFirst(data)}
                disabled={data.length === 0}
              >
                УДАЛИТЬ ПЕРВЫЙ
              </button>
            </div>
            <div className='col-md-6'>
              <button
                className='btn btn-info btn-block'
                onClick={() => this.handleRemoveLast(data)}
                disabled={data.length === 0}
              >
                УДАЛИТЬ ПОСЛЕДНИЙ
              </button>
            </div>
          </div>
          <hr />
          <div className='row'>
            <div className='col'>
              <div className='float-left'>Список объектов</div>
              <div className='float-right'>
                <button
                  className='btn btn-info btn-sm mr-2'
                  onClick={this.handleCardOff}
                >
                  <i className='fa fa-list' />
                </button>
                <button
                  className='btn btn-info btn-sm mr-2'
                  onClick={this.handleCardOn}
                >
                  <i className='fa fa-table' />
                </button>
              </div>
            </div>
          </div>
          <hr />
        </div>
        {onCard ? <Card data={data} /> : <Table data={data} />}
        <Form />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  data: state.data.data
});

export default connect(
  mapStateToProps,
  { addToFront, addToBack, removeFirst, removeLast }
)(App);
