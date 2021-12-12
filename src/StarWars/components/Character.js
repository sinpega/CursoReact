import React from "react";

function Characters(props){

    {/*
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    {props.character.name}
                </Card.Text>
            </Card.Body>
        </Card>
    )
    */}

    return (
       <p>{props.character.name}</p>
    )
}

export default Characters;