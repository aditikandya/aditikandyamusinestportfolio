import React from 'react';
import { Play, Clock, Users, Star, BookOpen, Headphones, Mic, Guitar, Piano, Drum } from 'lucide-react';

const Lessons = () => {
  const lessons = [
    {
      id: 1,
      title: 'Piano Fundamentals - ABRSM Grade 1',
      instructor: 'Aditi Kandya',
      duration: '45 min',
      students: 1247,
      rating: 4.9,
      level: 'Beginner',
      category: 'western',
      thumbnail: '🎹',
      description: 'Learn the basics of piano playing with ABRSM curriculum and structured approach.',
      topics: ['Hand positioning', 'Basic notation', 'Simple melodies', 'Rhythm basics']
    },
    {
      id: 2,
      title: 'Bollywood Piano Melodies',
      instructor: 'Aditi Kandya',
      duration: '1h 15min',
      students: 892,
      rating: 4.8,
      level: 'Intermediate',
      category: 'bollywood',
      thumbnail: '🎵',
      description: 'Master popular Bollywood songs on piano with proper technique and expression.',
      topics: ['Melody playing', 'Chord progressions', 'Expression techniques', 'Popular songs']
    },
    {
      id: 3,
      title: 'Indian Classical Vocal Basics',
      instructor: 'Aditi Kandya',
      duration: '1h 30min',
      students: 1563,
      rating: 4.9,
      level: 'Beginner',
      category: 'indian',
      thumbnail: '🎤',
      description: 'Discover the fundamentals of Indian classical vocal music and ragas.',
      topics: ['Voice training', 'Raga basics', 'Tala patterns', 'Traditional compositions']
    },
    {
      id: 4,
      title: 'Rock Piano Techniques',
      instructor: 'Aditi Kandya',
      duration: '55 min',
      students: 734,
      rating: 4.7,
      level: 'Intermediate',
      category: 'rock',
      thumbnail: '🎸',
      description: 'Learn rock piano techniques and power chord progressions.',
      topics: ['Power chords', 'Rock rhythms', 'Improvisation', 'Band playing']
    },
    {
      id: 5,
      title: 'Pop Piano Accompaniment',
      instructor: 'Aditi Kandya',
      duration: '1h 5min',
      students: 2103,
      rating: 4.9,
      level: 'All Levels',
      category: 'pop',
      thumbnail: '🎶',
      description: 'Master pop piano accompaniment and modern song playing.',
      topics: ['Chord progressions', 'Rhythm patterns', 'Song arrangement', 'Performance skills']
    },
    {
      id: 6,
      title: 'Western Classical Piano',
      instructor: 'Aditi Kandya',
      duration: '1h 20min',
      students: 567,
      rating: 4.6,
      level: 'Advanced',
      category: 'western',
      thumbnail: '🎼',
      description: 'Advanced classical piano techniques and repertoire.',
      topics: ['Classical pieces', 'Advanced techniques', 'Interpretation', 'Performance practice']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Lessons', icon: BookOpen },
    { id: 'bollywood', name: 'Bollywood', icon: Headphones },
    { id: 'rock', name: 'Rock', icon: Mic },
    { id: 'pop', name: 'Pop', icon: Guitar },
    { id: 'western', name: 'Western Classical', icon: Piano },
    { id: 'indian', name: 'Indian Classical', icon: Drum }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Pre-recorded <span className="text-primary">Lessons</span>
          </h1>
                     <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
             Access our comprehensive library of pre-recorded lessons anytime, anywhere. Learn at your own pace with expert instruction from Aditi.
           </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-background text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 ease-smooth"
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lessons Grid */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lessons.map((lesson) => (
              <div key={lesson.id} className="bg-background rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth hover:-translate-y-2">
                <div className="p-6">
                  <div className="text-4xl mb-4">{lesson.thumbnail}</div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      lesson.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                      lesson.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {lesson.level}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{lesson.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2">{lesson.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{lesson.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{lesson.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{lesson.students.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <BookOpen className="w-4 h-4" />
                      <span>{lesson.instructor}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Topics:</h4>
                    <div className="flex flex-wrap gap-1">
                      {lesson.topics.map((topic, index) => (
                        <span key={index} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 ease-smooth hover:scale-105 flex items-center justify-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span>Start Learning</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lessons;
