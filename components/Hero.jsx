'use client'
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import Card from './Card';
const Hero = () => {
  const [allpost, setAllPosts] = useState([]);
  const { data: session } = useSession();
  const router = useRouter();

  const handleProfile = () => {
    router.push('/profile');
  };

  const handlePost = () => {
    router.push('/create');
  };

  const fetchPosts = async () => {
    const response = await fetch('/api/post');
    const data = await response.json();
    console.log(data)
    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <button onClick={handleProfile}>Profile</button>
      <button onClick={handlePost}>Create Story</button>
      <div>
        {allpost.map((post) => (
          <div key={post._id}>
            {/* Display the post content here */}
           
            
        
            <h3>{post.title}</h3>
            <p>{post.story}</p>
        
            {/* Add any other post fields you want to display */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
