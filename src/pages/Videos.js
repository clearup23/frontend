import React, { useState, useEffect } from "react";
// import "../layout/Style.css";
import "./Video.css";
import Navbar2 from "../layout/Navbar2";
const Videos = () => {
  const [videos, setVideos] = useState([]);

  const handleClick = (subject) => {
    if (subject === "Maths") {
      setVideos([
        {
          title: "Class 3",
          url: "https://www.youtube.com/embed/fo6reQIO8VE?list=PLW6ZJtqCeoWvJmbQrhfeLYhebwElIr8w1",
        },
        {
          title: "Class 4",
          url: "https://www.youtube.com/embed/0JPLxcI6HVY?list=PLVLoWQFkZbhUts3U1vDht4FUDfzpkiM6q",
        },
        {
          title: "Class 5",
          url: "https://www.youtube.com/embed/2tRPZsEeV5g?list=PLVLoWQFkZbhV0kPS6-8eWJw2GuBSSkjYD",
        },
        {
          title: "Class 6",
          url: "https://www.youtube.com/embed/OERnQuoZaEY?list=PLVLoWQFkZbhXhyTmv71FsOx0MoMZOLelp",
        },
        {
          title: "Class 7",
          url: "https://www.youtube.com/embed/iEu2tKEkY_I?list=PLVLoWQFkZbhVgT5aM-GRuQHnzthwllEHq",
        },
        {
          title: "Class 8",
          url: "https://www.youtube.com/embed/mZyk1vy953Q?list=PLVLoWQFkZbhWwuZmoe15zj2Kmq7sApfcw",
        },

        // Add more videos for other classes
      ]);
    } else if (subject === "Science") {
      setVideos([
        {
          title: "Class 3",
          url: "https://www.youtube.com/embed/909RZYjfFGE?list=PLW6ZJtqCeoWuYiJDluwn1b_nsNs_LYP7m",
        },
        {
          title: "Class 4",
          url: "https://www.youtube.com/embed/p3nec1lrsCY?list=PLW6ZJtqCeoWu6LK30rLamB8gjMOq0P2XK",
        },
        {
          title: "Class 5",
          url: "https://www.youtube.com/embed/2ARA5EW2anc?list=PLW6ZJtqCeoWulW-MkP5TdhlWwaYuBv9BO",
        },
        {
          title: "Class 6",
          url: "https://www.youtube.com/embed/_BY2BmMYsmE?list=PLVLoWQFkZbhXq3hjhx5TQMhL3lNiF_OLy",
        },
        {
          title: "Class 7",
          url: "https://www.youtube.com/embed/gDfNuLHVbWQ?list=PLVLoWQFkZbhUN3DiztHOVansWcBhCppjH",
        },

        {
          title: "Class 8",
          url: "https://www.youtube.com/embed/31Xglzp-Eec?list=PLVLoWQFkZbhV8K8NiJrFoMSwa_34UDMdg",
        },

        // Add more videos for other classes
      ]);
    } else if (subject === "Social") {
      setVideos([
        {
          title: "Class 3",
          url: "https://www.youtube.com/embed/7znIVTqN0aY?list=PL2KP15Aw-29XG6LFCnb1DWAmej-UQBySP",
        },

        {
          title: "Class 4",
          url: "https://www.youtube.com/embed/Xea196ugSzQ?list=PLIVxQtdk068GxnlSyI2oZOBM55FCpbFOl&t=21",
        },

        {
          title: "Class 5",
          url: "https://www.youtube.com/embed/7znIVTqN0aY?list=PL2KP15Aw-29XG6LFCnb1DWAmej-UQBySP",
        },

        {
          title: "Class 6",
          url: "https://www.youtube.com/embed/2clQ3zWUIN0?list=PLVLoWQFkZbhX8NJIryAuRqcl9I3xFAZWC",
        },

        {
          title: "Class 7",
          url: "https://www.youtube.com/embed/V0CcWG2LpDQ?list=PLVLoWQFkZbhWvzFnibzJ2jqPiQBu4KCss",
        },

        {
          title: "Class 8",
          url: "https://www.youtube.com/embed/V0CcWG2LpDQ?list=PLVLoWQFkZbhWvzFnibzJ2jqPiQBu4KCss",
        },

        // Add more videos for other classes
      ]);
    } else if (subject === "English") {
      setVideos([
        {
          title: "Class 3",
          url: "https://www.youtube.com/embed/LRNUOU2DW_8?list=PLVLoWQFkZbhUb372PfgDFDT5Uu9b5yAJQ",
        },
        {
          title: "Class 4",
          url: "https://www.youtube.com/embed/U9PFLE4AFc?list=PLVLoWQFkZbhVS3ogfiSlSBQY8VUstufz2",
        },
        {
          title: "Class 5",
          url: "https://www.youtube.com/embed/IMufeQ-ophM?list=PLVLoWQFkZbhXsiZg14GJgynTV_vBIVWd1",
        },
        {
          title: "Class 6",
          url: "https://www.youtube.com/embed/v=kghkSHTmLpc?list=PLVLoWQFkZbhWYCmKqzuzhnq57ENS7kgqO",
        },
        {
          title: "Class 7",
          url: "https://www.youtube.com/embed/v=HLVB4JRCD8M?list=PLVLoWQFkZbhXELGWoyl8W0cE5RyB4uLn8",
        },
        {
          title: "Class 8",
          url: "https://www.youtube.com/embed/v=eqtu1UErZCc?list=PLVLoWQFkZbhU1w-uN42Yp0O1AltvVEVFT",
        },
      ]);
    }
  };

  useEffect(() => {
    // Set default videos when the component mounts
    handleClick("Maths");
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <div>
      <Navbar2 />
      {/* <div className="header">
        <h1>VIDEOS</h1>
      </div> */}

      <div className="content">
        <ul className="subject-list">
          <li className="subject" onClick={() => handleClick("Maths")}>
            Maths
          </li>
          <li className="subject" onClick={() => handleClick("Science")}>
            Science
          </li>
          <li className="subject" onClick={() => handleClick("Social")}>
            Social
          </li>
          <li className="subject" onClick={() => handleClick("English")}>
            English
          </li>
        </ul>
        <div className="videos-grid">
          {/* Render videos based on the state */}
          {videos.map((video, index) => (
            <div key={index} className="class-container">
              <h3>{video.title}</h3>
              <iframe src={video.url} title={video.title}></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
