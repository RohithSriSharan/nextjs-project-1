'use client'

import React, { useState } from "react";
import { useSession } from "next-auth/react";

const Story = () => {

const {data:session} = useSession();

  const [formData, setFormData] = useState({
    title: '',
    story: '',
  });

  const handleStorySubmit = async (e) => {
    e.preventDefault();

    // Check if the title and story fields are empty
    if (!formData.title || !formData.story) {
      console.log('Please enter both title and story before submitting.');
      return;
    }

    try {
      // Make a POST request to the API route '/api/post/new'
      const response = await fetch('/api/post/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userId:session?.user.id,
            title:formData.title,
            story:formData.story
        }),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        console.log('Story saved successfully!');
        // Do any additional actions here, like showing a success message to the user
      } else {
        console.log('Failed to save the story.');
        // Handle error cases here, like showing an error message to the user
      }
    } catch (error) {
      console.log('An error occurred:', error);
      // Handle network or other errors here
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleStorySubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          placeholder='Title of the Story'
          value={formData.title}
          onChange={handleChange}
        />
        <label>Story</label>
        <textarea
          name="story"
          placeholder='Your Story'
          value={formData.story}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Story;
