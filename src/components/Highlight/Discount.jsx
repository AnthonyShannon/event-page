import React, { Component } from 'react';
import { Fade, Slide } from 'react-reveal';

class Discount extends Component {
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <div className="discount_percentage">
                        <span>23%</span>
                        <span>OFF</span>
                    </div>

                    <div className="discount_description">
                        <h3>Purchase tickets before December 1st</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iure ex iste animi ratione praesentium non, dolorem accusamus reprehenderit quasi repudiandae voluptate, tempora quam vitae corporis quas inventore incidunt mollitia.</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default Discount;