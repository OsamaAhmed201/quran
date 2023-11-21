import React from 'react'
import ReactPlayer from 'react-player'

export default function PlayScreen({ reciterDetles, chapDetles }) {
  const audioLink = (molana, number) => {
    return molana + '/' + ('00' + number).slice(-3) + '.mp3'
  }

  return (
    <div className='min-vh-100 shadow-lg p-3 bg-red text-center'>
      <h1 className='fs-5 fw-bold text-center'>Player</h1><hr />
      {reciterDetles !== null && chapDetles !== null ? (<ul className='list-group text-end'>

        <div>
          <li className='list-group-item bg-transparent border-0 text-light p-0 d-flex justify-content-between align-items-center cursor fs-6'>
            <span>
              Reclter:
            </span>
            <span>
              {reciterDetles.name}
            </span>

          </li><hr />

          <li className='list-group-item bg-transparent border-0 text-light p-0 d-flex justify-content-between align-items-center cursor fs-6'>
            <span>
              Chapter In Arabic
            </span>
            <span>
              {chapDetles.name_arabic}
            </span>

          </li><hr />
          <li className='list-group-item bg-transparent border-0 text-light p-0 d-flex justify-content-between align-items-center cursor fs-6'>
            <span>
              Chapter In English
            </span>
            <span>
              {chapDetles.name_complex}
            </span>

          </li><hr />
          <li className='list-group-item bg-transparent border-0 text-light p-0 d-flex justify-content-between align-items-center cursor fs-6'>
            <span>
              Revelation Place:
            </span>
            <span>
              {chapDetles.revelation_place}
            </span>

          </li><hr />
          <li className='list-group-item bg-transparent border-0 text-light p-0 d-flex justify-content-between align-items-center cursor fs-6'>
            <span>
              Translated Name
            </span>
            <span>
              {chapDetles.translated_name.name}
            </span>

          </li><hr />
          <div>
            <ReactPlayer url={audioLink(reciterDetles.Server, chapDetles.id)} controls={true} playing={true} width={'100%'} height={'60px'} />
          </div>
        </div>
      </ul>) : ''}


    </div>
  )
}
