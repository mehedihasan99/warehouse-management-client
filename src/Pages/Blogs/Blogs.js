import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='container mt-5 blogs-container'>
            <div className='blogs'>
                <div>
                    <h4>JavaScript vs Node JS</h4>
                    <h5>Javascript</h5>
                    <ul>
                        <li>Javascript is a programming language that is used for writing scripts on the website. </li>
                        <li>Javascript can only be run in the browsers.</li>
                        <li>It is basically used on the client-side.</li>
                    </ul>
                </div>
                <div>
                    <h5>NodeJS</h5>
                    <ul>
                        <li>NodeJS is a Javascript runtime environment.</li>
                        <li>It is mostly used on the server-side.</li>
                        <li>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </li>
                    </ul>
                </div>
            </div>
            <div className='blogs'>
                <div>
                    <h5>When should you use nodejs</h5>
                    <p>Node.js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.</p>
                </div>
                <div>
                    <h5>When should you use mongodb</h5>
                    <ul>
                        <li>MongoDB is a NoSQL database which I've found quite easy to use. Recently I had to develop a simple application which needed to collect some data using HTTP requests and store some results after processing the data, and I tried using MongoDB.</li>
                        <li>From this experience I found it much nicer to use than traditional relational databases and since I'm a developer, and not a DBA, my work was greatly simplified.</li>
                        <li>Still, sometimes I feel unsure when should I use MongoDB instead of a traditional relational database, like SQL Server or MySQL</li>
                    </ul>
                </div>
            </div>
            <div className='blogs'>
                <div>
                    <h5>SQL</h5>
                    <ul>
                        <li>Relational</li>
                        <li>use structured query language and have a predefined schema.</li>
                        <li>are vertically scalable are table based	</li>
                    </ul>
                </div>
                <div>
                    <h5>NoSQL</h5>
                    <ul>
                        <li>Non-relational</li>
                        <li>NoSQL databases have dynamic schemas for unstructured data.</li>
                        <li>are horizontally scalable. are document, key-value, graph or wide-column stores.</li>
                    </ul>
                </div>
            </div>
            <div className='blogs'>
                <div>
                    <h5>What is the purpose of jwt?</h5>
                    <ul>
                        <li>Authentication</li>
                        <li>Authorization</li>
                        <li>Data Exchanges</li>
                    </ul>
                </div>
                <div>
                    <h5>How does it work?</h5>
                    <p>JWTS differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;