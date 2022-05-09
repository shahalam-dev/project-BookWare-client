import React from "react";

const Blogs = () => {
  return (
    <>
      <div className="col-md-12 text-center">
        <h2 className="display-5 my-5">All Blogs.</h2>
      </div>
      <div className="row  justify-content-center">
        <div className="col-md-6">
          <div className="row my-5">
            <div className="col-md-12 my-5">
              <h3 className="fs-3">
                Difference between javascript and nodejs?
              </h3>
              <p className="fs-5 mt-3 lead">
                <strong>JavaScript:</strong> JavaScript is a programming
                language. It is running in any web browser with a proper browser
                engine. Mainly using for any client-side activity for a web
                application, like possible attribute validation or refreshing
                the page in a specific interval or provide some dynamic changes
                in web pages without refreshing the page. JavaScript running any
                engine like Spider monkey (FireFox), JavaScript Core (Safari),
                V8 (Google Chrome).
                <br />
                <strong>Node JS:</strong> It is an interpreter and environment
                for JavaScript with some specific useful libraries which
                JavaScript programming can use separately. It mainly used for
                accessing or performing any non-blocking operation of any
                operating system, like creating or executing a shell script or
                accessing any hardware-specific information or running any
                backend job. Node JS only run in a V8 engine which mainly used
                by google chrome. And javascript program which will be written
                under this Node JS will be always run in V8 Engine.
              </p>
            </div>
            <div className="col-md-12 my-5">
              <h3 className="fs-3">
                When should you use nodejs and when should you use mongodb?
              </h3>
              <p className="fs-5 mt-3 lead">
                <strong>MongoDB :</strong> MongoDB and NodeJS are two different
                technologies. MonogDB is a database system which gives you a
                chance to efficiently store documents in a database and to
                perform operations like data updates, or to search documents by
                some criterias.
                <br />
                <strong>Node JS:</strong> NodeJS is javascript runtime that
                helps us run JavaScript almost everywhere. Before NodeJS
                javascript could run only in the browser. NodeJS's responsibilty
                is especially to execute your application.
              </p>
            </div>
            <div className="col-md-12 my-5">
              <h3 className="fs-3">
                Differences between sql and nosql databases?
              </h3>
              <p className="fs-5 mt-3 lead">
                <strong>SQL:</strong>
                RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). These databases
                have fixed or static or predefined schema. These databases are
                not suited for hierarchical data storage. These databases are
                best suited for complex queries. Vertically Scalable. Follows
                ACID property.
                <br />
                <strong>NoSQL:</strong>
                Non-relational or distributed database system. They have dynamic
                schema. These databases are best suited for hierarchical data
                storage. These databases are not so good for complex queries.
                Horizontally scalable. Follows CAP(consistency, availability,
                partition tolerance).
              </p>
            </div>
            <div className="col-md-12 my-5">
              <h3 className="fs-3">
                What is the purpose of jwt and how does it work?
              </h3>
              <p className="fs-5 mt-3 lead">
                JWT, or JSON Web Token, is an open standard used to share
                security information between two parties — a client and a
                server. Each JWT contains encoded JSON objects, including a set
                of claims. JWTs are signed using a cryptographic algorithm to
                ensure that the claims cannot be altered after the token is
                issued.JWTs differ from other web tokens in that they contain a
                set of claims. Claims are used to transmit information between
                two parties. What these claims are depends on the use case at
                hand. For example, a claim may assert who issued the token, how
                long it is valid for, or what permissions the client has been
                granted. A JWT is a string made up of three parts, separated by
                dots (.), and serialized using base64. In the most common
                serialization format, compact serialization, the JWT looks
                something like this: xxxxx.yyyyy.zzzzz. Once decoded, you will
                get two JSON strings: The header and the payload. The signature.
                The JOSE (JSON Object Signing and Encryption) header contains
                the type of token — JWT in this case — and the signing
                algorithm. The payload contains the claims. This is displayed as
                a JSON string, usually containing no more than a dozen fields to
                keep the JWT compact. This information is typically used by the
                server to verify that the user has permission to perform the
                action they are requesting. There are no mandatory claims for a
                JWT, but overlaying standards may make claims mandatory. For
                example, when using JWT as bearer access token under OAuth2.0,
                iss, sub, aud, and exp must be present. some are more common
                than others. The signature ensures that the token hasn’t been
                altered. The party that creates the JWT signs the header and
                payload with a secret that is known to both the issuer and
                receiver, or with a private key known only to the sender. When
                the token is used, the receiving party verifies that the header
                and payload match the signature.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
