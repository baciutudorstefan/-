import React from "react";

function LeftComponent() {
  return (
    <div className="left_component">
      <section className="left_component__title">
        <span> Hello</span> <span> I'm</span> <br />
        <span>Tudor Baciu</span>
        <span>!</span>
      </section>

      <section className="left_component__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl massa
        adipiscing tortor sem. Auctor metus suspendisse lectus diam amet morbi
        sollicitudin. Iaculis vel rutrum fermentum ipsum velit risus. Non mi ut
        facilisis semper. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nisl massa adipiscing tortor sem. Auctor metus suspendisse lectus
        diam amet morbi sollicitudin. Iaculis vel rutrum fermentum ipsum velit
        risus. Non mi ut facilisis semper.
      </section>
      <section>
        <img
          src="https://images.unsplash.com/profile-1567275861860-86c622265a6bimage?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
          alt=""
          className="left_component__thumbnail"
        />
      </section>
    </div>
  );
}

export default LeftComponent;
