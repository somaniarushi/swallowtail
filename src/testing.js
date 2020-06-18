import React from 'react';

const Testing = () => (
    <>
        <h1 style={{color: "blue"}}>H1 Sentence</h1>
        <h3 style={{color: "purple"}}>H3 Sentence</h3>
        <span>
            Inside of Span Sentence
        </span>
        <DoubleRender />
        <a href="#">Link</a>
    </>
);

const DoubleRender = () => (
    <p>Testing Double Render</p>
)

export default Testing