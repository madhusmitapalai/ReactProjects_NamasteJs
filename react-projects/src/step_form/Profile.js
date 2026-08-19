import React from "react";

const Profile = ({ data, setData, errors }) => {
  const { name, email, age } = data;

  const handleChange = (e, item) => {
    setData((prev) => ({
      ...prev,
      [item]: e.target.value,
    }));
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => handleChange(e, "name")}
      />
      {errors.name && (
        <span style={{ color: "red", fontSize: "10px" }}>{errors.name}</span>
      )}
      <label>Gmail</label>
      <input
        type="email"
        value={email}
        onChange={(e) => handleChange(e, "email")}
      />
      {errors.email && (
        <span style={{ color: "red", fontSize: "10px" }}>{errors.email}</span>
      )}
      <label>age</label>
      <input
        type="number"
        value={age}
        onChange={(e) => handleChange(e, "age")}
      />
      {errors.age && (
        <span style={{ color: "red", fontSize: "10px" }}>{errors.age}</span>
      )}
    </div>
  );
};

export default Profile;
