"use client";
import React, { useState } from "react";
import { updateUser } from "../../../lib/actions/user.actions";

const Page = () => {
  const [formData, setFormData] = useState({
    username: "",
    language: "",
    email: "",
  });

  const languages = [
    "English",
    "Spanish",
    "Mandarin",
    "Hindi",
    "Arabic",
    "Portuguese",
    "Bengali",
    "Russian",
    "Japanese",
    "Punjabi",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "20px",
      }}
    >
      <div
        style={{
          width: "300px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <label
          htmlFor="username"
          style={{ fontSize: "16px", fontWeight: "bold" }}
        >
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          placeholder="Your Name"
          onChange={handleChange}
          required
          style={{
            color: "black",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <div
        style={{
          width: "300px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <label
          htmlFor="language"
          style={{ fontSize: "16px", fontWeight: "bold" }}
        >
          Preferred Language:
        </label>
        <select
          id="language"
          name="language"
          value={formData.language}
          onChange={handleChange}
          required
          style={{
            color: "black",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          <option value="" disabled>
            Select a language
          </option>
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>
      <div
        style={{
          width: "300px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <label htmlFor="email" style={{ fontSize: "16px", fontWeight: "bold" }}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            color: "black",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          color: "black",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#4CAF50",
          color: "white",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default Page;
