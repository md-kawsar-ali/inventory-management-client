import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = () => {
    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <Card className="mb-4">
                            <Card.Header>
                                <Card.Title className="my-2">Difference between JavaScript and Node Js</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    JavaScript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage. On the other hand, Node.js usually represents a list of objects and methods accessible to JavaScript code when run in the V8 engine or via the node interpreter.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className="mb-4">
                            <Card.Header>
                                <Card.Title className="my-2">When should you use node.js and when should you use node.js?</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Node.js is well suited for applications that have a lot of concurrent connections and each request only needs very few CPU cycles, because the event loop (with all the other clients) is blocked during execution of a function. So, I can use node js for mid-level real-time application.
                                </Card.Text>
                                <Card.Text>
                                    MongoDB can be used in places that require simple queries, easy and fast integration of data and have data whose structure changes constantly with time. For Example: E-commerce websites, Mobile applications, Blogs and content management portals Storing geospatial data At the same time, since it doesn't support transactions, it can't be used in highly transactional systems.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className="mb-4">
                            <Card.Header>
                                <Card.Title className="my-2">Difference between SQL and NoSQL Databases</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Header>
                                <Card.Title className="my-2">What is the purpose of JWT and how does it work?</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
                                </Card.Text>

                                <Card.Text>
                                    JWTs are mainly used for authentication. After a user signs in to an application, the application then assigns JWT to that user. Subsequent requests by the user will include the assigned JWT. This token tells the server what routes, services, and resources the user is allowed to access.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;