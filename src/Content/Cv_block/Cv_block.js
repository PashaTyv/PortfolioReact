import React  from 'react';
import Photo from '../../Styles/photo_2021-06-26_23-07-59.jpg';

function CvBlock () {
   return (
      <section className="cv-block block-intro border-bottom">
      <div className="container">
        <div className="avatar">
          <img className="img-fluid rounded-circle" src={Photo} alt='
          myPhoto'/>
        </div>
        <p>Hello! I am <strong>Pavlo Tyvocnhuk</strong>. front-end developer. creative, hardworking, friendly, team
          player. Always ready to develop and learn something new.</p>
        <a href="d" className="btn btn-outline-primary">Hire Me</a>
      </div>
    </section>
   )
}

export default CvBlock;