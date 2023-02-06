import React from 'react'

const Card = (props) => {
  return (
      <main>
        <div className='card'>
          <div className='card__img--container'>
            <div>
              <img src={props.details.imageUrl} alt="" className='image'/>
            </div>
            <div className='card__details--location'>
              <box-icon type='solid' name='map' size='xm' color='#F55A5A'></box-icon>
              <p className='travel__location'>{props.details.location}</p>
            </div>
            <a href={props.details.googleMapsUrl} target='blank'>View on Google Maps</a>
          </div>
          <div className='card__details'>
            <p className='travel__title'>{props.details.title}</p>
            <p className='travel__date'>{props.details.startDate} - {props.details.endDate}</p>
            <p className='travel__description'>{props.details.description}</p>
          </div>
        </div>
        <hr />
      </main>
   )
}

export default Card
