import React from "react";

const Interest = ({ data, setData, errors }) => {
  const handleCheck = (e) => {
    setData({ ...data, Interest: e.target.value });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div>
        <input
          type="radio"
          name="html"
          value="html"
          checked={data.Interest === "html"}
          onChange={(e) => handleCheck(e)}
        />
        <label for="html">Html</label>
      </div>

      <div>
        <input
          type="radio"
          name="Css"
          value="Css"
          checked={data.Interest === "Css"}
          onChange={(e) => handleCheck(e)}
        />
        <label for="Css">Css</label>
      </div>

      <div>
        <input
          type="radio"
          name="javascript"
          value="javascript"
          checked={data.Interest === "javascript"}
          onChange={(e) => handleCheck(e)}
        />
        <label for="javascript">javascript</label>
      </div>

      {errors.Interest && (
        <span style={{ color: "red", fontSize: "8px" }}>{errors.Interest}</span>
      )}
    </div>
  );
};

export default Interest;
