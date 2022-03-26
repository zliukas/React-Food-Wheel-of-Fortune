import React from 'react';

function get_coords(radian_interval, radius) {
    return {
        x: Math.cos(radian_interval + Math.PI / 2) * radius,
        y: Math.sin(radian_interval + Math.PI / 2) * radius
    }
}

function Card(props) {
    let coord = get_coords(props.radian_interval, props.radius);

    return (
        <div
            style={{ ...styles.card, left: `${props.center.x + coord.x}px`, top: `${props.center.y - coord.y}px` }}
        >
            <div>{props.symbol}</div>
            {/* <img alt="ok" src={`https://picsum.photos/${200}`} style={{ width: '100%', height: '100%' }} /> */}
        </div>
    )
}

const styles = {
    card: {
        
        margin: '0',
        padding: '0',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: "50px"
    }
}

export default Card;