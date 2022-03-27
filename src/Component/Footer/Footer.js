import React from "react";

const Footer = () => {
  return (
    <div>
      <div>
        <h1>Question1:How React Works?</h1>
        <p>
          Answer: It is maintained by Facebook. React uses a declarative
          paradigm that makes it easier to reason about your application and
          aims to be both efficient and flexible. It designs simple views for
          each state in your application, and React will efficiently update and
          render just the right component when your data changes
        </p>
      </div>
      <div>
        <h1>Question2:Props Vs State?</h1>
        <p>
          Answer: Props are used to pass data from one component to another. The
          state is a local data storage that is local to the component only and
          cannot be passed to other components.
        </p>
      </div>
    </div>
  );
};

export default Footer;
