import React from 'react'
import { Card } from 'react-bootstrap'

import cake1 from './images/cake1.PNG'
import cake2 from './images/cakes/cake2.jpg'
import cake3 from './images/cakes/cake3.jpg'
import cake4 from './images/cakes/cake4.jpg'

const cakes = {
    cake1: <Card><Card.Img src={ cake1} /></Card>,
    cake2: <Card><Card.Img src={ cake2 } /></Card>,
    cake3: <Card><Card.Img src={ cake3 } /></Card>,
    cake4: <Card><Card.Img src={ cake4 } /></Card>,
    cake5: <Card><Card.Img src={ cake3 } /></Card>,
  }

export default cakes;