import React, { useState } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Settings from "./Settings";

const Tabs = () => {
  const [active, setActive] = useState(0);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    name: "name",
    age: "24",
    email: "email",
    Interest: ["html", "Css", "javascript"],
    Settings: ["dark", "light"],
    btn: "Submit",
  });
  console.log(data.Settings);
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      Validate: () => {
        let err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is invalid";
        }
        if (!data.email || data.email.length < 2) {
          err.name = "email is invalid";
        }
        if (!data.age || data.age.length < 18) {
          err.name = "age is invalid";
        }

        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interest",
      component: Interest,
      Validate: () => {
        let err = {};
        if (data.Interest < 1) {
          err.Interest = "Select Interest";
        }
        setErrors(err);
        return err.Interest ? false : true;
      },
    },
    { name: "Settings", component: Settings },
  ];

  const handleNext = () => {
    if (tabs[active].Validate()) {
      setActive((prev) => prev + 1);
    }
  };
  console.log("errors", errors);
  const handleprevious = () => {
    setActive((prev) => prev - 1);
  };

  const ActiveTab = tabs[active].component;
  return (
    <>
      {" "}
      <div
        style={{
          display: "flex",
          gap: "10px",
          fontSize: "20px",
          padding: "10px",
          fontWeight: 400,
        }}
      >
        {tabs.map((item, index) => {
          return (
            <>
              <div
                style={{
                  border: "1px dotted black",
                  marginLeft: "10pxs",
                  padding: "15px",
                  cursor: "pointer",
                }}
                key={index}
                onClick={() => setActive(index)}
              >
                {item.name}
              </div>
            </>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px dotted grey",
          marginTop: "15px",
          height: "500px",
        }}
      >
        <ActiveTab data={data} setData={setData} errors={errors} />
      </div>
      <div className="btn-div">
        {active > 0 && <button onClick={handleprevious}>previous</button>}
        {active < tabs.length - 1 && <button onClick={handleNext}>Next</button>}
      </div>
      {active == tabs.length - 1 && <button>Submit</button>}
    </>
  );
};

export default Tabs;
