import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


export default function App() {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [showAllComments, setShowAllComments] = useState(false);


  const commentSection = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setCommentList([...commentList, comment]);
      setComment("");
    }
  };

  const toggleComments = () => {
    setShowAllComments((prev) => !prev); 
  };

  
  const location = useLocation();
  const isAboutPage = location.pathname ===  "/about";
  const isContentpage = location.pathname === "/content";
  const isricyPage = location.pathname === "/ricy";
  const isFollowpage = location.pathname === "/Follow"
   const isregiserpage = location.pathname === "/regiser"
    const isLoginpage = location.pathname === "/Login"
  return (
    <>
    {!(isAboutPage || isContentpage || isricyPage || isFollowpage || isLoginpage || isregiserpage) &&(
    <div className="max-w-3xl mx-auto mt-3  p-6 rounded-lg shadow-lg bg-gray-800">
      <h2 className="text-4xl text-center font-bold text-white ">Comment Section</h2>
      <form onSubmit={commentSection} className="space-y-4">
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none text-white bg-gray-900 focus:ring-2 focus:ring-blue-500"
        />
        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Post Comment
          </button>
        </div>
      </form>
      <div className="">
        <h3 className="text-xl font-bold text-white">Comments:</h3>
        <ul className="space-y-3 mt-2 max-h-64 overflow-y-auto custom-scrollbar">
          {commentList.length > 0 && commentList.slice(0, showAllComments ? commentList.length : 5).map((item, index) => (
            <li
              key={index}
              className="p-4 rounded-lg shadow-md bg-gray-700 text-white"
            >
              {item}
            </li>
          ))}
        </ul>
        {commentList.length > 5 && (
          <div className="text-center mt-4">
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              onClick={toggleComments}
            >
              {showAllComments ? "Show Less Comments" : "Show More Comments"}
            </button>
          </div>
        )}
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
      )}
      </>
  );
}
