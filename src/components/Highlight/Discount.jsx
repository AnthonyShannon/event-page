import React, { Component } from 'react';
import { Fade, Slide } from 'react-reveal';
import MyButton from '../utils/MyButton'

class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30
    }

    percentage = () => {
        if (this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(() => {
            this.percentage()
        },30)
    }


    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade 
                        onReveal={() => this.percentage()}
                    >
                        <div className="discount_percentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before December 1st</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iure ex iste animi ratione praesentium non, dolorem accusamus reprehenderit quasi repudiandae voluptate, tempora quam vitae corporis quas inventore incidunt mollitia.</p>

                            <MyButton 
                                text="Purchase Tickets"
                                bck="#ffa800"
                                color="#ffffff"
                                link="http://google.com"
                            />
                        </div>
                    </Slide>

                </div>
            </div>
        );
    }
}

export default Discount;