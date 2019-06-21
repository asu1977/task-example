import React from 'react';

const Card = ({ data }) => {
  return (
    <div className='container-fluid'>
      <div className='row'>{displayCard(data)}</div>
    </div>
  );
};

const displayCard = data =>
  data.map((item, i) => (
    <div className='col-md-4 py-2' key={i}>
      <div
        className='card'
        style={{ height: '300px', backgroundColor: '#f5f3f3' }}
      >
        <div className='card-body'>
          <div className='card-title'>
            <div className='float-left'>{item.title}</div>
            <div className='float-right' style={{ color: 'darkcyan' }}>
              {i + 1}
            </div>
          </div>
          <br />
          <hr />
          {item.attributes.map(attribute => (
            <div
              key={attribute.toString()}
              className='card-subtitle mb-2 text-muted'
            >
              {attribute}
            </div>
          ))}
          <hr />
          <p className='card-text'>{item.description}</p>
        </div>
      </div>
    </div>
  ));

export default Card;
