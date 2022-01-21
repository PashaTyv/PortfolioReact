import React  from 'react';
import CvBlock from './Cv_block/Cv_block';
import Info from './Info/Info.js';
import PropTypes from 'prop-types'


function Content ({workExperiecneList}) {
   return (
      <div>
         <CvBlock/>
            <section className="cv-block info">
            <div className="container">
         <Info items = {workExperiecneList}/>
            </div>
            </section>
   </div>
   ) 

}

Content.propTypes = {
workExperiecneList : PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Content;
   