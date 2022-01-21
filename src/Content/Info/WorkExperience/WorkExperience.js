import React  from 'react';
import WorkExperienceItem from './WorkExperiecneItem/WorkExperienceItem.js';
import PropTypes from 'prop-types'

function WorkExperience({items}) {
   return(
      <div className="work-experience group" id="work-experience">
          <h2 className="text-center">Work Experience</h2>
          { items.map((el) => {
            return <WorkExperienceItem item = { el } key = { el.id } />
          }) }
        </div>
   )
}

WorkExperienceItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default WorkExperience ;