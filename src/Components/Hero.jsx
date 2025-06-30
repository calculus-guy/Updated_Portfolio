import React, { useState } from "react";

const Hero = () => {
  const [FormData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    comment: "",
  });

  function handleChange() {}

  return (
    <main>
      <div className="container">
        <form className="" action="">
            <div>
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                placeholder="Firstname"
                name="firstname"
              />
            </div>
            <div className="mt-2">
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                placeholder="Lastname"
                name="lastname"
              />
            </div>
            <div className="mt-2">
              <input
                type="email"
                className="form-control"
                onChange={handleChange}
                placeholder="Email"
                name="email"
              />
            </div>
            <div className="mt-2">
              <input
                type="password"
                className="form-control"
                onChange={handleChange}
                placeholder="Password"
                name="password"
              />
            </div>
            <div className="mt-2">
              <button className="btn btn-primary d-block w-100 p-1">Submit</button>
            </div>
        </form>
      </div>
    </main>
  );
};

export default Hero;
