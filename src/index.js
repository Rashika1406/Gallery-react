import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import dog1 from './assets/images/dog1.jfif'
import dog2 from './assets/images/dog2.jfif'
import dog3 from './assets/images/dog3.jfif'
import dog4 from './assets/images/dog4.jfif'



const root = ReactDOM.createRoot(document.getElementById('root'));
const Card = (props) => {
  return (
    <div class="cards">
            <img src={props.pic} alt='dog'></img>
            <p>{props.name}</p>
        </div>
  )
}
 const picture=[
    {
      id:1,
      name:"The Innocent Look",
      pic:dog1

    },
    {
      id:2,
      name:"Julie Rabbit Ears",
      pic:dog2

    },
    {
      id:3,
      name:"Big Eyed Buggy",
      pic:dog3

    },
    {
      id:4,
      name:"The Saint Doggo",
      pic:dog4
    },
    {
      id:2,
      name:"Julie Rabbit Ears",
      pic:dog2

    },
    {
      id:3,
      name:"Big Eyed Buggy",
      pic:dog3

    },
    {
      id:4,
      name:"The Saint Doggo",
      pic:dog4

    },
    {
      id:1,
      name:"The Innocent Look",
      pic:dog1

    }
    
  ]
root.render(
  <div class="container">
    {
      picture.map(function(item){
       return <Card pic={item.pic} name={item.name}></Card>
      })
    }
  </div>
)

