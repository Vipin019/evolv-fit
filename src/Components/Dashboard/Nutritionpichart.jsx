import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Nutritionpichart.css'
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  }
]



const Nutritionpichart = () => {
  return (
    <div id='nutritionpichart'>
        <div id='nutritionpichart__protein' className='commonnutrition'>
        <div className="text">
            <small>PROTEINS</small>
            <small className='floatRight'>45g / 70g</small>
        </div>
        <BarChart width={(45/70)*100+50} height={4} data={data} className='nutritionpichart__chart' >
          <Bar dataKey="uv" fill="#F45C84" className='nutritionpichart__chart--bar'/>
        </BarChart>
        <div className="target"></div>
        </div>
        <div id='nutritionpichart__fat' className='commonnutrition'>
        <div className="text">
            <small>FATS</small>
            <small className='floatRight'>30g / 70g</small>
        </div>
        <BarChart width={(30/70)*100+50} height={4} data={data} className='nutritionpichart__chart' >
          <Bar dataKey="uv" fill="#03C7FC" className='nutritionpichart__chart--bar'/>
        </BarChart>
        <div className="target"></div>
        </div>
        <div id='nutritionpichart__carbs' className='commonnutrition'>
        <div className="text">
            <small>CARBS</small>
            <small className='floatRight'>50g / 70g</small>
        </div>
        <BarChart width={(50/70)*100+50} height={4} data={data} className='nutritionpichart__chart' >
          <Bar dataKey="uv" fill="#F5C90F" className='nutritionpichart__chart--bar'/>
        </BarChart>
        <div className="target"></div>
        </div>
        
    </div>
  )
}

export default Nutritionpichart

