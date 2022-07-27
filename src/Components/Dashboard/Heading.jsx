import React from 'react'
import './Heading.css'

import { BiWalk } from 'react-icons/bi';
import { CgGym } from 'react-icons/cg';
import { FaConciergeBell } from 'react-icons/fa';

const Heading = () => {
  return (
    <div id='heading'>
      <div id="heading__steps">
      <div id="heading__steps--icone">
      <BiWalk className='white__icone'></BiWalk>
      </div>
      <h3>Steps</h3>
      </div>
      <div id="heading__workout">
      <div id="heading__workout--icone">
      <CgGym className='white__icone'></CgGym>
      </div>
      <h3>Workout</h3>
      </div>
      <div id="heading__nutrition">
      <div id="heading__nutrition--icone">
      <FaConciergeBell className='white__icone'></FaConciergeBell>
      </div>
      <h3>Nutrition</h3>
      </div>
    </div>
  )
}

export default Heading
