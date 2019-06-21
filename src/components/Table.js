import React from 'react';

const Table = ({ data }) => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        {data.map((item, i) => (
          <div
            className='container-fluid my-2'
            style={{ backgroundColor: '#f5f3f3' }}
            key={i}
          >
            <div className='row'>
              <div className='col-md-1' style={{ color: 'darkcyan' }}>
                {i + 1}
              </div>
              <div className='col-md-2'>{item.title}</div>
              {item.attributes.map(attribute => (
                <div key={attribute.toString()} className='mb-2 text-muted'>
                  &nbsp;&nbsp;{attribute}
                </div>
              ))}
            </div>
            <br />
            <hr />
            <p className='float-left'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
