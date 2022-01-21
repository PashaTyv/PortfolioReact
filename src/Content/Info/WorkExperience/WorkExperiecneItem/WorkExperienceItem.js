import React from 'react';
import PropTypes from 'prop-types';


function WorkExperienceItem ({item}) {
   return (
         <div className="item">
            <div className="row">
              <div className="col-md-6">
                <h3>{item.title}</h3>
                <h4 className="organization">
                {item.organization}</h4>
              </div>
              <div className="col-md-6">
                <time className="period">{item.period}</time>
              </div>
            </div>
            <p className="text-muted">{item.text}</p>
          </div>
      
   )
}


WorkExperienceItem.propTypes = {
   item : PropTypes.object.isRequired,
};


export default WorkExperienceItem;