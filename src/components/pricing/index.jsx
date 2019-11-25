import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices: [100, 150, 250],
        positions: ['Balcony', 'Medium', 'Star'],
        description: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptates deleniti, voluptatibus similique eligendi, quidem assumenda doloribus sapiente dignissimos expedita repellat iusto facilis sequi, aperiam et at consequuntur cupiditate! Pariatur.',
            'Nisi iure facere explicabo dolorum maiores aliquam assumenda commodi quos ipsum repellendus, consectetur nam dolores, beatae corporis autem atque velit, nemo minima. Amet minus reiciendis quis architecto repudiandae eum sunt.',
            'Repellendus maxime dolores praesentium maiores tenetur harum exercitationem est ex ut voluptatibus, sequi delectus. Veniam consequatur doloribus tempora qui adipisci, aliquam rerum impedit ut soluta asperiores incidunt architecto? Nemo, veniam.'
        ],
        linkto: ['http://sales/b', 'http://sales/m', 'http://sales/s'],
        delay: [500, 0, 500]
    }

    showBoxes = () => (
        this.state.prices.map((box, i) => (
            <Zoom key={i} delay={this.state.delay[i]}>

                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.description[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                link={this.state.linkto}
                            />
                        </div>

                    </div>
                </div>
            </Zoom>
        ))
    )


    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>
            </div>
        );
    }
}

export default Pricing;