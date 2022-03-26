import React from 'react';
import "./Wheel.css"
import Card from '../Card/Card';

const symbols = ['🍕', '🍔', '🌯', '🥩','🥪', '🍝', '🍣', '🌮', '🥗'];

class Wheel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            radius: 150,
            cards: [],
            theta: 0.0,
            rps: 2
        }

        this.segments = 4;
        this.reverse = false;
    }

    componentDidMount() {
        this.setCards();
    }

    setCards = () => {
        let center_of_wheel = {
            x: parseFloat(this.wheel.style.width) / 2,
            y: parseFloat(this.wheel.style.height) / 2
        }
        let temp_cards = [];

        for (let i = 0; i < this.segments; i++) {
            temp_cards.push(
                <Card
                key={`card${i}`}
                symbol={symbols[i]}
                radius={this.state.radius}
                radian_interval={(2 * Math.PI / this.segments) * i}
                center={center_of_wheel}
                />
            );
        }

        this.setState({ cards: temp_cards,  theta: 0.0 });
    }

    handleClick = (e) => {
        let new_theta = this.state.theta + this.state.rps * 360 * 3 * (this.reverse ? -1 : 1);
        new_theta += Math.floor(Math.random() * this.segments) * 360 / this.segments;
        // this.wheel.style.transform = `translate(-50%, -50%) rotate(${new_theta}deg)`;
        this.setState({ theta: new_theta });
    }

    handleFruitsChange = (e) => {
        this.segments = Number(e.target.value);
        this.setCards();
    }

    handleSpeedChange = (e) => {
        this.setState({rps: Number(e.target.value) });
    }

    handleReverse = (e) => {
        this.reverse = e.target.checked;
    }

    render() {
        return (
            
            
            <div className='container'>

                

                <div
                    
                    ref={ref_id => this.wheel = ref_id}
                    style={{ ...styles.wheel,
                            height: `${2 * this.state.radius + 100}px`,
                            width: `${2 * this.state.radius + 100}px`,
                            transform: `rotate(${this.state.theta}deg)`
                        }}
                >
                    {this.state.cards}
                </div>
                <div className='indicator'>▼</div>
     
                <button
                    className='glow-on-hover'
                    onClick={this.handleClick}
                >
                    Spin the wheel! 
                </button>
                <div className='sliders'>
                    <label htmlFor="fruit">Foods: 3 - 9</label>
                    <input id="fruit" type="range" name="fruit" value={this.segments} min="3" max="9"
                        onChange={this.handleFruitsChange}
                    />
                    <span id="fruit_show">{this.segments}</span>
                </div>
                <div className='sliders'>
                    <label htmlFor="speed">Speed: 1 - 5</label>
                    <input id="speed" type="range" name="speed" value={this.state.rps} min="1" max="5" step="1"
                        onChange={this.handleSpeedChange}
                    />
                    <span id="speed_show">{this.state.rps}</span>
                </div>

                <div className='aaa'>
                    If you don't know what to eat, just spin the wheel! 🍽️
                </div>
            
            </div>
        )
    }
}

const styles = {
    
    body:{
     margin:'0'  
    },
    
    wheel: {
        backgroundColor: '#556270',
        borderRadius: '50%',
        transition: 'transform 3s',
        height: '600px',
        width: '500px',
        boxShadow: '0 0 7px black',
        marginBottom: '40px'
    },
    container: {
        background: 'linear-gradient(to right, #4286f4, #373B44)',
        padding: '100px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin:'0'
    },
    indicator: {
        top: '10px',
        position: 'absolute',
        fontSize: '50px',
        color: '#EA3556',
        textShadow: 'black 0 2px 7px'
    },
    sliders: {
        padding: '10px',
        marginBottom: '15px',
        display: 'flex',
        justifyContent: 'space-around',
        width: '350px'
    }
}



export default Wheel;