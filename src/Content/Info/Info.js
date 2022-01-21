import React  from 'react';
import Education from './Education/Education.js';
import Skills from './Skills/Skills.js';
import WorkExperience  from './WorkExperience/WorkExperience.js';
import PropTypes from 'prop-types';




function Info ({items}) {
   return (
      <div>
         <WorkExperience items = {items}/>
         <Education />
         <Skills/>  

      </div>
   ) 

}


Info.propTypes = {
   items : PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Info;
