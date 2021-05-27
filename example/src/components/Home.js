import React from 'react'
import { Card } from './Card';

export const Home = ({dataToolTemplateInfo}) => {
  return (
    <div className="home">
      <div className="dashboard">
        <Card metadata={dataToolTemplateInfo}/>
      </div>
    </div>
  )
}
