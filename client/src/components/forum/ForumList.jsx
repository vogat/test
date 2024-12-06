import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ForumList = () => {
  const [forum, setForums] = useState([]);

  useEffect(() => {
    const forumFiles = [
      { id: 'algebra', title: '5 Tips to Master Algebra Fundamentals', description: 'Boost your algebra skills with these essential tips and tricks.', tags: ["Algebra", "Math", "Fundamentals"] },
      { id: 'physics', title: 'Understanding the Basics of Physics', description: 'Explore fundamental concepts in physics to spark curiosity.', tags: ["Physics", "Science", "Beginners"] },
      { id: 'SAT', title: 'Ace Your SAT with These Prep Tips', description: 'Effective strategies to tackle SAT math and reading sections.', tags: ["SAT Prep", "Test Strategies", "Math and Reading"] },
      { id: 'speaking', title: '5 Tips to Improve Your Public Speaking', description: 'Build confidence and captivate your audience with these tips.', tags: ["Public Speaking", "Confidence", "Presentation Skills"] },
      { id: 'writing', title: 'Creative Writing 101 Crafting Compelling Stories', description: 'Learn the basics of creative writing to tell engaging stories.', tags: ["Creative Writing", "Storytelling", "Writing Tips"] },
    ];
    setForums(forumFiles);
  }, []);

  return (
    <div className="forum-list container mx-auto p-4">
      <div className="py-36">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-200">Our forum</h1>
        <p className="mt-6 text-gray-300 text-center">
          Read our latest forum and learn new skills in just a few seconds.
        </p>
        <ul className="space-y-8 mt-12">
          {forum.map((forum) => ( 
            <li key={forum.id} className="bg-[#001313] p-8 rounded-lg shadow-sm shadow-blue-300 md:px-8 md:py-8 hover:shadow-blue-300">
              <div className="flex justify-between items-center ">
                <Link to={`/forum/${forum.id}`} className="text-gray-100 hover:text-blue-400 text-lg">
                  {forum.title}
                </Link>
                <div className="text-gray-400 text-sm">
                  {forum.tags.map((tag, index) => (
                    <span key={index} className="ml-2 bg-gray-300 text-black p-2 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-400 mt-4">{forum.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ForumList;