import React from "react";

const Settings = ({ data, setData }) => {
  const handleCheck = (e) => {
    setData({ ...data, Settings: e.target.value });
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div>
        <input
          type="checkbox"
          id="dark"
          name="dark"
          checked={data.Settings === "dark"}
          value={"dark"}
          onChange={handleCheck}
        />
        <label for="dark">Dark</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="scales"
          name="scales"
          value={"light"}
          checked={data.Settings === "light"}
          onChange={handleCheck}
        />
        <label for="scales">Scales</label>
      </div>
    </div>
  );
};

export default Settings;
