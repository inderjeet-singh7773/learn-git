import React from 'react'

function Card({ username, btnText}) {
    console.log(username);
  return (
     <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transition hover:scale-105 duration-300" >
        <img
          className="w-full h-48 object-cover"
          src="https://images.pexels.com/photos/29324324/pexels-photo-29324324.jpeg"
          alt="Card Image"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">"Nature’s Calm Above the Sea"</h2>
          <p className="text-gray-600 mt-2 text-sm">
            Discover the beauty of nature from the hilltops. This breathtaking view captures the harmony between rugged cliffs and the endless sea — a perfect moment of peace and elevation.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            {btnText || "visit me"}
          </button>
        </div>
      </div>
  )
}

export default Card