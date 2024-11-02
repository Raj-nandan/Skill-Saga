import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import '../css/lectures.css';

const subjectCategories = [
  "CS Core", "CS Electives", "Medical", "Engineering", "Mathematics", 
  "Physics", "Chemistry", "Biology", "Economics", "Psychology", 
  "Literature", "History"
];


const lecturesData = [
  {
    id: 1,
    title: "Introduction to Algorithms",
    description: "Fundamental algorithms and data structures",
    duration: "1 hr",
    skillLevel: "Intermediate",
    category: "CS Core",
    videos: [
      { id: 'v1', url: 'https://www.youtube.com/watch?v=8hly31xKli0', seen: false },
      { id: 'v2', url: 'https://www.youtube.com/watch?v=czZpD2cxc1Y', seen: false },
      { id: 'v3', url: 'https://www.youtube.com/watch?v=QGD8OhzpKsM', seen: false },
      { id: 'v4', url: 'https://www.youtube.com/watch?v=DFQhFOw2Zx0', seen: false }
    ]
  },
  {
    id: 2,
    title: "Web Development Basics",
    description: "HTML, CSS, and JavaScript fundamentals",
    duration: "1.5 hrs",
    skillLevel: "Beginner",
    category: "CS Electives",
    videos: [
      { id: 'v1', url: 'https://www.youtube.com/watch?v=UB1O30fR-EE', seen: false },
      { id: 'v2', url: 'https://www.youtube.com/watch?v=8gNrZ4lAnAw', seen: false },
      { id: 'v3', url: 'https://www.youtube.com/watch?v=pQN-pnXPaVg', seen: false },
      { id: 'v4', url: 'https://www.youtube.com/watch?v=GlLDDZf6aH4', seen: false }
    ]
  },
  {
    id: 3,
    title: "Human Anatomy",
    description: "Introduction to human body systems",
    duration: "2 hrs",
    skillLevel: "Intermediate",
    category: "Medical",
    videos: [
      { id: 'v1', url: 'https://www.youtube.com/watch?v=LPjzfGChGlE', seen: false },
      { id: 'v2', url: 'https://www.youtube.com/watch?v=uBGl2BujkPQ', seen: false },
      { id: 'v3', url: 'https://www.youtube.com/watch?v=SM9hxQe3hRk', seen: false },
      { id: 'v4', url: 'https://www.youtube.com/watch?v=XUmm8QzrgiQ', seen: false }
    ]
  },
  {
    id: 4,
    title: "Mechanical Engineering Principles",
    description: "Basics of mechanical engineering",
    duration: "1.5 hrs",
    skillLevel: "Beginner",
    category: "Engineering",
    videos: [
      { id: 'v1', url: 'https://www.youtube.com/watch?v=SYg5n-_0H3w', seen: false },
      { id: 'v2', url: 'https://www.youtube.com/watch?v=KQIlgwtEFmI', seen: false },
      { id: 'v3', url: 'https://www.youtube.com/watch?v=fJr3em5JHkk', seen: false },
      { id: 'v4', url: 'https://www.youtube.com/watch?v=pLTkwmIKj9I', seen: false }
    ]
  },
  {
    id: 5,
    title: "Calculus I",
    description: "Limits, derivatives, and integrals",
    duration: "2 hrs",
    skillLevel: "Intermediate",
    category: "Mathematics",
    videos: [
      { id: 'v1', url: 'https://www.youtube.com/watch?v=WUvTyaaNkzM', seen: false },
      { id: 'v2', url: 'https://www.youtube.com/watch?v=U39RMUzCjiU', seen: false },
      { id: 'v3', url: 'https://www.youtube.com/watch?v=wTX-DKdM8t0', seen: false },
      { id: 'v4', url: 'https://www.youtube.com/watch?v=2a7h2LP6k1U', seen: false }
    ]
  },
  {
    id: 6,
    title: "Quantum Mechanics",
    description: "Introduction to quantum physics",
    duration: "2.5 hrs",
    skillLevel: "Advanced",
    category: "Physics",
    videos: [
      { id: 'v1', url: 'https://www.youtube.com/watch?v=OgNNa8B-3YM', seen: false },
      { id: 'v2', url: 'https://www.youtube.com/watch?v=3f15lCGbQ6A', seen: false },
      { id: 'v3', url: 'https://www.youtube.com/watch?v=pqZ9fLdh2yA', seen: false },
      { id: 'v4', url: 'https://www.youtube.com/watch?v=bZMw-Fv_lM4', seen: false }
    ]
  },
  {
    id: 7,
    title: "Organic Chemistry",
    description: "Fundamentals of organic compounds",
    duration: "2 hrs",
    skillLevel: "Intermediate",
    category: "Chemistry",
    videos: [
      { id: 'v1', url: 'https://www.youtube.com/watch?v=sWf7k1x9XR4', seen: false },
      { id: 'v2', url: 'https://www.youtube.com/watch?v=1mAP7uLQSdg', seen: false },
      { id: 'v3', url: 'https://www.youtube.com/watch?v=E5qsyi_M3pI', seen: false },
      { id: 'v4', url: 'https://www.youtube.com/watch?v=pA7rXqgRTxU', seen: false }
    ]
  },
  {
    id: 8,
    title: "Genetics",
    description: "Principles of heredity and gene function",
    duration: "1.5 hrs",
    skillLevel: "Intermediate",
    category: "Biology",
    videos: [
      { id: 'v1', url: 'https://www.youtube.com/watch?v=8m6hHRlKwxY', seen: false },
      { id: 'v2', url: 'https://www.youtube.com/watch?v=cDC3v7tkkc4', seen: false },
      { id: 'v3', url: 'https://www.youtube.com/watch?v=OkD9A6eS6Bk', seen: false },
      { id: 'v4', url: 'https://www.youtube.com/watch?v=5c3zZ5OLeyI', seen: false }
    ]
  },
  {
    id: 9,
    title: "Microeconomics",
    description: "Individual decision-making in economics",
    duration: "1.5 hrs",
    skillLevel: "Beginner",
    category: "Economics",
    videos: [
      { id: 'v1', url: 'https://www.youtube.com/watch?v=lbDIcj73sXc', seen: false },
      { id: 'v2', url: 'https://www.youtube.com/watch?v=j6kXyKP_FCw', seen: false },
      { id: 'v3', url: 'https://www.youtube.com/watch?v=d4sI8W2kKjA', seen: false },
      { id: 'v4', url: 'https://www.youtube.com/watch?v=9GjO5HzY3y8', seen: false }
    ]
  },
  {
    id: 10,
    title: "Cognitive Psychology",
    description: "Mental processes and their effects on behavior",
    duration: "2 hrs",
    skillLevel: "Intermediate",
    category: "Psychology",
    videos: [
      { id: 'v1', url: 'https://www.youtube.com/watch?v=vo4pMVb0R6M', seen: false },
      { id: 'v2', url: 'https://www.youtube.com/watch?v=3hfb6J2YA-M', seen: false },
      { id: 'v3', url: 'https://www.youtube.com/watch?v=Qj_tu9aW0RM', seen: false },
      { id: 'v4', url: 'https://www.youtube.com/watch?v=N3EUXk4b8fc', seen: false }
    ]
  },
  {
    id: 11,
    title: "Shakespeare's Plays",
    description: "Analysis of major Shakespearean works",
    duration: "2 hrs",
    skillLevel: "Intermediate",
    category: "Literature",
    videos: [
      { id: 'v1', url: 'https://www.youtube.com/watch?v=G7UdbIZrTL8', seen: false },
      { id: 'v2', url: 'https://www.youtube.com/watch?v=8XnpKZHT7wA', seen: false },
      { id: 'v3', url: 'https://www.youtube.com/watch?v=p3hCbqOwUNU', seen: false },
      { id: 'v4', url: 'https://www.youtube.com/watch?v=XfyyqaNWMOU', seen: false }
    ]
  },
  {
    id: 12,
    title: "World War II",
    description: "Major events and impacts of WWII",
    duration: "2.5 hrs",
    skillLevel: "Intermediate",
    category: "History",
    videos: [
      { id: 'v1', url: 'https://www.youtube.com/watch?v=HUqy-OQvVtI', seen: false },
      { id: 'v2', url: 'https://www.youtube.com/watch?v=trM2Tq6iOuc', seen: false },
      { id: 'v3', url: 'https://www.youtube.com/watch?v=k7k4jH7NqUw', seen: false },
      { id: 'v4', url: 'https://www.youtube.com/watch?v=MdZLZ3v3EUs', seen: false }
    ]
  }
];

const Lectures = () => {
  const [lectures, setLectures] = useState(lecturesData);
  const [filteredLectures, setFilteredLectures] = useState(lectures);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [skillLevelFilter, setSkillLevelFilter] = useState('');
  const [durationFilter, setDurationFilter] = useState('');

  useEffect(() => {
    applyFilters();
  }, [searchTerm, categoryFilter, skillLevelFilter, durationFilter, lectures]);

  const applyFilters = () => {
    let result = lectures;

    if (searchTerm) {
      result = result.filter((lecture) =>
        lecture.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter) {
      result = result.filter((lecture) => lecture.category === categoryFilter);
    }

    if (skillLevelFilter) {
      result = result.filter((lecture) => lecture.skillLevel === skillLevelFilter);
    }

    if (durationFilter) {
      result = result.filter((lecture) => lecture.duration === durationFilter);
    }

    setFilteredLectures(result);
  };

  const handleVideoSeen = (lectureId, videoId) => {
    setLectures(prevLectures => prevLectures.map(lecture => {
      if (lecture.id === lectureId) {
        const updatedVideos = lecture.videos.map(video => 
          video.id === videoId ? { ...video, seen: true } : video
        );
        return { ...lecture, videos: updatedVideos };
      }
      return lecture;
    }));
  };

  const calculateProgress = (lecture) => {
    const seenVideos = lecture.videos.filter(video => video.seen).length;
    return Math.round((seenVideos / lecture.videos.length) * 100);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    applyFilters();
  };

  const LectureCard = ({ lecture, onVideoSeen }) => {
    const { id, title, description, duration, skillLevel, category, videos } = lecture;
    const progress = calculateProgress(lecture);

    return (
      <div className="lecture-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Duration: {duration}</p>
        <p>Skill Level: {skillLevel}</p>
        <p>Category: {category}</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
        <div className="video-list">
          {videos.map((video) => (
            <div key={video.id} className="video-item">
              <button 
                onClick={() => onVideoSeen(id, video.id)}
                className={video.seen ? 'seen' : ''}
              >
                {video.seen ? 'Seen' : 'Mark as Seen'}
              </button>
              <a href={video.url} target="_blank" rel="noopener noreferrer">Video Link</a>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Nav />
      <div className="lectures-container">
        <h1>Lectures</h1>

        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search lectures..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />
          <button type="submit">Search</button>
        </form>

        <div className="filters">
          <select onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="">All Categories</option>
            {subjectCategories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <select onChange={(e) => setSkillLevelFilter(e.target.value)}>
            <option value="">All Skill Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <select onChange={(e) => setDurationFilter(e.target.value)}>
            <option value="">All Durations</option>
            <option value="30 mins">30 mins</option>
            <option value="1 hr">1 hr</option>
            <option value="1.5 hrs">1.5 hrs</option>
            <option value="2 hrs">2 hrs</option>
          </select>
        </div>

        <div className="lecture-list">
          {filteredLectures.map((lecture) => (
            <LectureCard key={lecture.id} lecture={lecture} onVideoSeen={handleVideoSeen} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lectures;