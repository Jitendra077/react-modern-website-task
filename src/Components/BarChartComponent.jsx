import React, { Component } from 'react'
import "./BarChartComponent.css"
import Image from "../Images/chart.jpg"

export default class BarChartComponent extends Component {
    render() {
        return (
            <div className = "Bar-Chart-Component">
                <h4>We have lots of Experience <br/> <span>building Bootstrap themes.</span></h4>
                <p>We've built well over a dozen  Bootstrap themes and sold tens of thousands of copies.</p>
                <div>
                    <p id = "head1"><i class="fas fa-arrow-alt-circle-right"></i>{""} Bootstrap users since the begining </p>
                    <p>We've been developing with Bootstrap since it was <br/>publicly released in 2011 </p>
                </div>
                <div>
                    <p id ="head2"><i class="fas fa-arrow-alt-circle-right"></i> {""}Deep understanding of Bootstrap </p>
                    <p>We've watched Bootstrap grow up over the years  and  <br/> understand it better than almost anyone </p>
                </div>
                <img src = {Image} alt = "error" className = "chart-image" />
                    <p id = "head3">Our customers are our biggest fans.</p>
                    <p id ="head3-para">We don't like to brag, but we don't mind letting our customers do it for us . <br/>
                    Here are a few nice things folks have said about our themes over the years</p>

            </div>
        )
    }
}
