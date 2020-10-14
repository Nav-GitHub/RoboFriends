import React from 'react';
import Card from './Card';
// we can call this pure function or a dumb function 
const CardList = (props) => {  
    // to check the working of Error Boundary
    // if(true) {
    //     throw new Error('Noooooo!');
    // }
    const {robots} = props;
    const cardsArray = robots.map((user,i) => {
        return (
        <Card 
            key={robots[i].id} 
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
        />);
    })
    return (
        <div>
            {cardsArray}   
        </div>
    );
}

export default CardList; 