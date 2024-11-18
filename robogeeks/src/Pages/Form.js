import React, { useState } from "react";
import "./Form.css";

const Form = ({ toggleScroll }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [files, setFiles] = useState([]);
  const [fileNames, setFileNames] = useState("No files selected");
  const [isDragging, setIsDragging] = useState(false);

  const TEXT_DISPLAY_LIMIT = 50; // Maximum character limit for displayed file names

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    updateFileNamesDisplay(selectedFiles);
  };

  // Handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    const selectedFiles = Array.from(e.dataTransfer.files);
    setFiles(selectedFiles);
    updateFileNamesDisplay(selectedFiles);
    setIsDragging(false);
  };

  // Update the file names display
  const updateFileNamesDisplay = (selectedFiles) => {
    const allFileNames = selectedFiles.map((file) => file.name).join(", ");
    if (allFileNames.length > TEXT_DISPLAY_LIMIT) {
      setFileNames(
        `${allFileNames.slice(0, TEXT_DISPLAY_LIMIT)}... (${
          selectedFiles.length
        } files)`
      );
    } else {
      setFileNames(`${allFileNames} (${selectedFiles.length} files)`);
    }
  };

  // Prevent default behavior for drag events
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  // Form submission to upload data and files
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    files.forEach((file) => {
      formData.append("files", file); // 'files' is the field name used on the backend
    });

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error("Error uploading files:", error);
      alert("Error uploading files.");
    }

    toggleScroll();
  };

  return (
    <div className="formpage">
      <div className="form-container">
        <h2>
          Upload Files with Details
          <button className="closebtn" onClick={() => toggleScroll()}>
            x
          </button>
        </h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Full Name"
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="xyz@email.com"
              required
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91"
              required
            />
          </div>

          {/* Drag-and-Drop File Upload */}
          <div
            className={`file-upload-box ${isDragging ? "dragging" : ""}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="upload-text">
              {files.length > 0
                ? `Files Selected: ${fileNames}`
                : "Drag & Drop or Click to Upload"}
            </div>
            <input
              type="file"
              id="file-upload"
              onChange={handleFileChange}
              multiple
              style={{ display: "none" }}
            />
            <label htmlFor="file-upload" className="upload-btn">
              Click to Select Files
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
