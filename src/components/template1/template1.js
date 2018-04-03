import React, { Component } from "react";
import { Panel } from "react-bootstrap";

import "./template1.css";

export default class Story extends Component {
    render() {
        return(
            <Panel>
                <Panel.Heading>
                    <Panel.Title componentClass="h3">Fill Out the Madlib</Panel.Title>
                </Panel.Heading>
                <Panel.Body>Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                Suspendisse interdum tellus ultrices ex congue hendrerit. Vestibulum ante 
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
                Mauris bibendum ex in diam commodo tristique. Nulla gravida vehicula nunc 
                quis laoreet. Proin non finibus nunc, eget molestie tellus. Nullam feugiat 
                ante orci, in convallis mauris pulvinar sed. Ut sollicitudin eros diam, ut 
                venenatis sapien mollis quis. Morbi tincidunt velit ut imperdiet tincidunt. 
                Donec sed purus eget felis auctor sodales.</Panel.Body>
            </Panel>
        )
    }
}