import { useState } from 'react';
import { Clock, Users, Star, Award, Play, BookOpen, Headphones, Mic } from 'lucide-react';
import musicEquipment from '../assets/music-equipment.jpg';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'production', name: 'Music Production' },
    { id: 'songwriting', name: 'Songwriting' },
    { id: 'mixing', name: 'Mixing & Mastering' },
    { id: 'performance', name: 'Performance' },
  ];

  const courses = [
    {
      id: 1,
      title: 'Complete Music Production Masterclass',
      category: 'production',
      level: 'Beginner to Advanced',
      duration: '12 weeks',
      students: 245,
      rating: 4.9,
      price: '$199',
      image: musicEquipment,
      description: 'Master the art of music production from basic beat-making to professional-level arrangements.',
      features: [
        'DAW navigation and setup',
        'Sound design and synthesis',
        'Arrangement techniques',
        'Professional workflow optimization',
        'Industry-standard plugins',
        'Live feedback sessions'
      ],
      modules: [
        'Introduction to Digital Audio Workstations',
        'MIDI Programming and Sequencing',
        'Audio Recording Techniques',
        'Sound Design and Synthesis',
        'Arrangement and Song Structure',
        'Mixing Fundamentals',
        'Professional Workflow'
      ]
    },
    {
      id: 2,
      title: 'Songwriting & Composition',
      category: 'songwriting',
      level: 'All Levels',
      duration: '8 weeks',
      students: 189,
      rating: 4.8,
      price: '$149',
      image: musicEquipment,
      description: 'Develop your songwriting skills with proven techniques used by chart-topping artists.',
      features: [
        'Melody and harmony creation',
        'Lyric writing techniques',
        'Song structure analysis',
        'Genre-specific approaches',
        'Collaboration methods',
        'Copyright and publishing basics'
      ],
      modules: [
        'Elements of a Great Song',
        'Melody Writing Techniques',
        'Harmonic Progressions',
        'Lyrical Storytelling',
        'Genre Conventions',
        'Co-writing and Collaboration'
      ]
    },
    {
      id: 3,
      title: 'Advanced Mixing & Mastering',
      category: 'mixing',
      level: 'Intermediate to Advanced',
      duration: '10 weeks',
      students: 156,
      rating: 4.9,
      price: '$249',
      image: musicEquipment,
      description: 'Take your mixes to the next level with professional mixing and mastering techniques.',
      features: [
        'EQ and compression mastery',
        'Spatial audio techniques',
        'Mastering chain setup',
        'Reference track analysis',
        'Stem mastering',
        'Industry delivery standards'
      ],
      modules: [
        'Mixing Console Navigation',
        'EQ Techniques and Applications',
        'Dynamic Processing',
        'Time-based Effects',
        'Automation and Movement',
        'Mastering Fundamentals',
        'Final Polish and Delivery'
      ]
    },
    {
      id: 4,
      title: 'Live Performance Essentials',
      category: 'performance',
      level: 'Beginner to Intermediate',
      duration: '6 weeks',
      students: 92,
      rating: 4.7,
      price: '$99',
      image: musicEquipment,
      description: 'Master the stage with confidence-building techniques and live performance skills.',
      features: [
        'Stage presence development',
        'Live equipment setup',
        'Audience engagement',
        'Performance anxiety management',
        'Setlist creation',
        'Technical troubleshooting'
      ],
      modules: [
        'Preparing for Live Performance',
        'Stage Setup and Sound Check',
        'Engaging Your Audience',
        'Managing Performance Nerves',
        'Building Your Live Repertoire'
      ]
    },
    {
      id: 5,
      title: 'Beat Making Fundamentals',
      category: 'production',
      level: 'Beginner',
      duration: '4 weeks',
      students: 312,
      rating: 4.6,
      price: '$79',
      image: musicEquipment,
      description: 'Start your music production journey with the fundamentals of beat making.',
      features: [
        'Drum programming basics',
        'Rhythm and timing',
        'Sample selection and chopping',
        'Basic mixing techniques',
        'Beat arrangement',
        'Export and sharing'
      ],
      modules: [
        'Understanding Rhythm and Time',
        'Drum Machine Programming',
        'Working with Samples',
        'Basic Beat Arrangements'
      ]
    },
    {
      id: 6,
      title: 'Vocal Recording & Production',
      category: 'production',
      level: 'Intermediate',
      duration: '7 weeks',
      students: 178,
      rating: 4.8,
      price: '$179',
      image: musicEquipment,
      description: 'Professional techniques for recording, editing, and producing vocals.',
      features: [
        'Microphone selection and placement',
        'Vocal editing and tuning',
        'Harmony and stack creation',
        'Vocal effects processing',
        'Performance coaching',
        'Genre-specific techniques'
      ],
      modules: [
        'Setting Up Your Vocal Recording Space',
        'Microphone Techniques',
        'Vocal Editing and Comping',
        'Pitch Correction and Timing',
        'Creative Vocal Processing',
        'Building Vocal Arrangements'
      ]
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const CourseModal = ({ course, onClose }) => (
    <div className="fixed inset-0 bg-foreground/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-lg shadow-glow max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-border">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">{course.title}</h3>
              <div className="flex items-center space-x-4 text-muted-foreground">
                <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{course.duration}</span>
                <span className="flex items-center"><Users className="w-4 h-4 mr-1" />{course.students} students</span>
                <span className="flex items-center"><Star className="w-4 h-4 mr-1 text-yellow-500" />{course.rating}</span>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground text-2xl"
            >
              ×
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full rounded-lg shadow-soft mb-6"
              />
              <p className="text-muted-foreground mb-6">{course.description}</p>
              
              <h4 className="text-lg font-semibold text-card-foreground mb-4">What You'll Learn:</h4>
              <ul className="space-y-2 text-muted-foreground">
                {course.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Award className="w-4 h-4 mr-2 mt-1 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="bg-secondary p-6 rounded-lg mb-6">
                <div className="text-3xl font-bold text-secondary-foreground mb-2">{course.price}</div>
                <div className="text-muted-foreground mb-4">One-time payment • Lifetime access</div>
                <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 ease-smooth hover:scale-105">
                  Enroll Now
                </button>
              </div>
              
              <h4 className="text-lg font-semibold text-card-foreground mb-4">Course Modules:</h4>
              <div className="space-y-3">
                {course.modules.map((module, index) => (
                  <div key={index} className="flex items-center p-3 bg-secondary rounded-lg">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-secondary-foreground">{module}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-primary">Music</span> Courses
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive courses designed to take you from beginner to professional. Learn at your own pace with hands-on projects and personalized feedback.
            </p>
            
            {/* Course Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-card p-6 rounded-lg shadow-soft">
                <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-card-foreground">6</div>
                <div className="text-muted-foreground">Courses</div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-card-foreground">1,200+</div>
                <div className="text-muted-foreground">Students</div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-card-foreground">50+</div>
                <div className="text-muted-foreground">Hours Content</div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft">
                <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-card-foreground">4.8</div>
                <div className="text-muted-foreground">Avg Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-smooth ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-glow scale-105'
                    : 'bg-secondary text-secondary-foreground hover:bg-muted hover:scale-105'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <div 
                key={course.id}
                className="group bg-gradient-card rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth hover:-translate-y-2 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {course.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{course.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students}
                    </span>
                    <span className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-500" />
                      {course.rating}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                    <button 
                      onClick={() => setSelectedCourse(course)}
                      className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:shadow-glow transition-all duration-300 ease-smooth hover:scale-105"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-secondary-foreground text-center mb-16">Why Choose SoundScape Academy?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-foreground mb-4">Hands-On Learning</h3>
              <p className="text-muted-foreground">Practice with real projects and receive personalized feedback on your work.</p>
            </div>
            
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <Mic className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-foreground mb-4">Industry Experience</h3>
              <p className="text-muted-foreground">Learn from a Grammy-nominated producer with real industry experience.</p>
            </div>
            
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-foreground mb-4">Community Support</h3>
              <p className="text-muted-foreground">Join a community of passionate musicians and receive ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 opacity-90 animate-slide-up">
            Join thousands of students who have transformed their musical abilities with our comprehensive courses.
          </p>
          <button className="bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-300 ease-spring">
            Browse All Courses
          </button>
        </div>
      </section>

      {/* Course Modal */}
      {selectedCourse && (
        <CourseModal 
          course={selectedCourse} 
          onClose={() => setSelectedCourse(null)} 
        />
      )}
    </div>
  );
};

export default Courses;