import React, { Component } from 'react'
import Heading from '../Components/Heading'
import TextBlock from '../Components/TextBlock'


export default class SocialService extends Component {
    render() {
        return (
        <section className="section">
            <Heading heading="Social Initiative"></Heading>
            <TextBlock text="We in a bid to serve the economy and do our service towards nation are inviting organisations to post their projects on our platform which will be consulted through professionals who are in sync with our initiative. No charge will be incurred to the organisations in the process till the covid outbreak lasts."></TextBlock>
        </section>
        )
    }
}
