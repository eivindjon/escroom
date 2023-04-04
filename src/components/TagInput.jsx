import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function TagInput({ onTagsChange }) {
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  function handleKeyDown(event) {
    if (event.key === "#") {
      // User started typing a tag
      setTagInput("#");
    } else if ((event.key === " " && tagInput !== "") || (event.key === "Enter" && tagInput !== "")) {
      // User typed a space and tagInput is not empty, so create a new tag
      const newTag = tagInput.trim().toLowerCase(); // normalize tag by trimming and converting to lowercase
      if (!tags.includes(newTag)) { // check if tag already exists
        setTags([...tags, newTag]);
        setTagInput("");
        onTagsChange([...tags, newTag]);
      }
    } else if (event.key === "Backspace") {
      // User pressed backspace, remove last character from tagInput
      setTagInput(tagInput.slice(0, -1));
    }
  }

  function handleInputChange(event) {
    setTagInput(event.target.value);
  }

  function handleTagClick(tagText) {
    // remove tag from state
    const newTags = tags.filter((tag) => tag !== tagText);
    setTags(newTags);
    onTagsChange(newTags);
  }

  return (
    <div>
      <Form.Group>
        <Form.Label>Tags</Form.Label>
        <Form.Control
          type="text"
          placeholder="Skriv in emneknaggen og trykk mellomrom eller enter"
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
          value={tagInput}
        />
                <div>
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="badge bg-primary me-1"
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      </Form.Group>
    </div>
  );
}
