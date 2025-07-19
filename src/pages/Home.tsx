import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, ArrowRight, Star, Users, Award, Calendar, Download, Heart, Share2, 
         Music2, Headphones, Mic2, Guitar, Drum, Piano, Volume2, Zap, TrendingUp, 
         Clock, CheckCircle, Quote, Globe, Camera, Video, Sparkles, BookOpen } from 'lucide-react';
import heroStudio from '../assets/hero-studio.jpg';
import artistPortrait from '../assets/artist-portrait.jpg';
import musicEquipment from '../assets/music-equipment.jpg';
import livePerformance from '../assets/live-performance.jpg';
import mixingConsole from '../assets/mixing-console.jpg';
import instrumentsCollection from '../assets/instruments-collection.jpg';
import studentsLearning from '../assets/students-learning.jpg';
import nightStudio from '../assets/night-studio.jpg';

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [activeGenre, setActiveGenre] = useState('electronic');

  const tracks = [
    { title: "Midnight Dreams", duration: "3:24", plays: "2.3M", genre: "Electronic", mood: "Chill" },
    { title: "Urban Rhythms", duration: "4:12", plays: "1.8M", genre: "Hip-Hop", mood: "Energetic" },
    { title: "Digital Sunset", duration: "3:45", plays: "3.1M", genre: "Ambient", mood: "Peaceful" },
    { title: "Neon Nights", duration: "4:32", plays: "1.5M", genre: "Synthwave", mood: "Nostalgic" },
    { title: "Bass Drop", duration: "3:58", plays: "2.7M", genre: "EDM", mood: "Intense" },
    { title: "Acoustic Soul", duration: "5:21", plays: "1.2M", genre: "Folk", mood: "Emotional" }
  ];

  const stats = [
    { icon: Users, label: "Students Taught", value: "500+" },
    { icon: Star, label: "Song Releases", value: "50+" },
    { icon: Award, label: "Awards Won", value: "12" },
    { icon: Calendar, label: "Years Experience", value: "8+" },
    { icon: Globe, label: "Countries Reached", value: "25+" },
    { icon: Headphones, label: "Total Streams", value: "10M+" },
  ];

  const genres = [
    { id: 'electronic', name: 'Electronic', icon: Zap, description: 'Cutting-edge electronic productions with innovative sound design' },
    { id: 'hiphop', name: 'Hip-Hop', icon: Mic2, description: 'Modern hip-hop beats with classic influences and fresh perspectives' },
    { id: 'ambient', name: 'Ambient', icon: Volume2, description: 'Atmospheric soundscapes perfect for meditation and relaxation' },
    { id: 'pop', name: 'Pop', icon: Star, description: 'Radio-ready pop productions with catchy hooks and polished sound' },
    { id: 'rock', name: 'Rock', icon: Guitar, description: 'Heavy guitars and driving rhythms with modern production techniques' },
    { id: 'jazz', name: 'Jazz', icon: Piano, description: 'Contemporary jazz fusion with electronic elements and improvisation' }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Independent Artist",
      image: studentsLearning,
      quote: "SoundScape transformed my bedroom recordings into professional-quality tracks. The attention to detail is incredible!"
    },
    {
      name: "Marcus Rodriguez",
      role: "Music Producer",
      image: nightStudio,
      quote: "The course structure is perfect. I went from complete beginner to producing for local artists in just 6 months."
    },
    {
      name: "Emma Thompson",
      role: "Singer-Songwriter",
      image: mixingConsole,
      quote: "Not just technical skills, but creative guidance that helped me find my unique sound. Absolutely worth every penny!"
    }
  ];

  const equipment = [
    { name: "Professional Mixing Console", description: "32-channel analog console for authentic warmth", icon: Volume2 },
    { name: "Vintage Synthesizers", description: "Collection of classic and modern synths", icon: Piano },
    { name: "Premium Microphones", description: "Industry-standard mics for every application", icon: Mic2 },
    { name: "Acoustic Treatment", description: "Professionally treated recording environment", icon: Headphones }
  ];

  const recentNews = [
    {
      title: "New Course: Advanced Mixing Techniques",
      date: "January 15, 2024",
      category: "Education",
      image: mixingConsole,
      preview: "Dive deep into professional mixing with our latest comprehensive course..."
    },
    {
      title: "Collaboration with Rising Artist Luna",
      date: "January 10, 2024",
      category: "Music",
      image: instrumentsCollection,
      preview: "Excited to announce my collaboration on Luna's upcoming EP..."
    },
    {
      title: "Studio Tour: Behind the Scenes",
      date: "January 5, 2024",
      category: "Video",
      image: nightStudio,
      preview: "Take an exclusive look inside the SoundScape studio..."
    }
  ];

  const upcomingEvents = [
    {
      date: "Feb 15",
      title: "Live Production Workshop",
      location: "SoundScape Studio",
      type: "Workshop",
      price: "$85"
    },
    {
      date: "Feb 22",
      title: "Music Industry Panel",
      location: "Online Event",
      type: "Panel",
      price: "Free"
    },
    {
      date: "Mar 8",
      title: "Beat Making Masterclass",
      location: "Community Center",
      type: "Masterclass",
      price: "$120"
    }
  ];

  const achievements = [
    { title: "Grammy Nomination", year: "2021", category: "Best Engineered Album" },
    { title: "Producer of the Year", year: "2022", category: "Independent Music Awards" },
    { title: "Platinum Certification", year: "2023", category: "Single: 'Digital Dreams'" },
    { title: "Rolling Stone Feature", year: "2022", category: "Producer to Watch" }
  ];

  useEffect(() => {
    const intervals = stats.map((_, index) => {
      return setInterval(() => {
        const element = document.getElementById(`stat-${index}`);
        if (element) {
          element.style.transform = 'scale(1.05)';
          setTimeout(() => {
            element.style.transform = 'scale(1)';
          }, 200);
        }
      }, 2000 + index * 500);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroStudio} 
            alt="Music Studio" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-primary/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Creating <span className="text-primary">Musical</span>
              <br />
              <span className="text-primary">Masterpieces</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional music producer, artist, and educator helping you discover your unique sound and master the art of music creation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link 
                to="/courses"
                className="group bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ease-spring hover:shadow-glow hover:scale-105 flex items-center space-x-2"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="group bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ease-spring hover:shadow-soft hover:scale-105 flex items-center space-x-2"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                <span>Listen to Music</span>
              </button>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center space-x-2 bg-card/80 backdrop-blur-sm text-card-foreground px-4 py-2 rounded-lg hover:bg-card transition-all duration-200">
                <Download className="w-4 h-4" />
                <span>Free Samples</span>
              </button>
              <button className="flex items-center space-x-2 bg-card/80 backdrop-blur-sm text-card-foreground px-4 py-2 rounded-lg hover:bg-card transition-all duration-200">
                <Video className="w-4 h-4" />
                <span>Watch Tutorials</span>
              </button>
              <button className="flex items-center space-x-2 bg-card/80 backdrop-blur-sm text-card-foreground px-4 py-2 rounded-lg hover:bg-card transition-all duration-200">
                <Calendar className="w-4 h-4" />
                <span>Book Session</span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-20 w-12 h-12 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary-foreground mb-4">By the Numbers</h2>
            <p className="text-xl text-muted-foreground">The impact of SoundScape Academy</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                id={`stat-${index}`}
                className="text-center animate-fade-in transition-transform duration-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-secondary-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tracks Section - Enhanced */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-card-foreground mb-4">Latest Tracks</h2>
            <p className="text-xl text-muted-foreground">Discover my newest musical creations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track, index) => (
              <div 
                key={index}
                className="group bg-gradient-card p-6 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground">{track.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">{track.genre}</span>
                      <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">{track.mood}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setCurrentTrack(index)}
                    className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 ease-spring"
                  >
                    <Play className="w-5 h-5 ml-1" />
                  </button>
                </div>
                <div className="flex justify-between items-center text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{track.duration}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Heart className="w-3 h-3" />
                    <span>{track.plays}</span>
                  </span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                    <Download className="w-4 h-4" />
                    <span className="text-sm">Download</span>
                  </button>
                  <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span className="text-sm">Share</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Genres Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Musical Styles & Genres</h2>
            <p className="text-xl text-muted-foreground">Versatility across multiple musical landscapes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {genres.map((genre, index) => (
              <div 
                key={genre.id}
                onClick={() => setActiveGenre(genre.id)}
                className={`group cursor-pointer p-8 rounded-lg transition-all duration-300 ease-smooth hover:-translate-y-2 animate-scale-in ${
                  activeGenre === genre.id 
                    ? 'bg-primary text-primary-foreground shadow-glow' 
                    : 'bg-card text-card-foreground shadow-soft hover:shadow-glow'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    activeGenre === genre.id ? 'bg-primary-foreground text-primary' : 'bg-primary text-primary-foreground'
                  }`}>
                    <genre.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{genre.name}</h3>
                </div>
                <p className={`leading-relaxed ${
                  activeGenre === genre.id ? 'text-primary-foreground/90' : 'text-muted-foreground'
                }`}>
                  {genre.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-foreground mb-4">Student Success Stories</h2>
            <p className="text-xl text-muted-foreground">Real results from real students</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground">{testimonial.name}</h4>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground leading-relaxed italic">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Equipment Showcase */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-card-foreground mb-6">World-Class Studio Equipment</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Experience music production with professional-grade equipment that delivers pristine sound quality and creative possibilities.
              </p>
              
              <div className="space-y-6">
                {equipment.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-card-foreground mb-1">{item.name}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              <img 
                src={mixingConsole} 
                alt="Mixing Console" 
                className="w-full rounded-lg shadow-soft hover:shadow-glow transition-shadow duration-300"
              />
              <img 
                src={instrumentsCollection} 
                alt="Instruments" 
                className="w-full rounded-lg shadow-soft hover:shadow-glow transition-shadow duration-300"
              />
              <img 
                src={musicEquipment} 
                alt="Music Equipment" 
                className="w-full rounded-lg shadow-soft hover:shadow-glow transition-shadow duration-300 col-span-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest News & Updates */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Latest News & Updates</h2>
            <p className="text-xl text-muted-foreground">Stay updated with the latest from SoundScape</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {recentNews.map((news, index) => (
              <article 
                key={index}
                className="group bg-card rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth hover:-translate-y-2 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">{news.category}</span>
                    <span className="text-sm text-muted-foreground">{news.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                    {news.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{news.preview}</p>
                  <button className="mt-4 text-primary hover:text-primary/80 transition-colors duration-200 flex items-center space-x-1">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-foreground mb-4">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground">Join me at these upcoming events and workshops</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{event.date.split(' ')[1]}</div>
                    <div className="text-sm text-muted-foreground">{event.date.split(' ')[0]}</div>
                  </div>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">{event.type}</span>
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{event.title}</h3>
                <p className="text-muted-foreground mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {event.location}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary">{event.price}</span>
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:shadow-glow transition-all duration-200">
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Gallery */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-card-foreground mb-4">Recognition & Achievements</h2>
            <p className="text-xl text-muted-foreground">Milestones in my musical journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-gradient-card p-6 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth hover:-translate-y-2 text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-card-foreground mb-2">{achievement.title}</h4>
                <p className="text-muted-foreground text-sm mb-1">{achievement.category}</p>
                <span className="text-primary font-bold">{achievement.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-foreground mb-6">Meet the Artist</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 8 years of experience in music production and education, I've helped hundreds of students discover their musical potential. From bedroom producers to chart-topping artists, my teaching method adapts to every skill level.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                My passion lies in bridging the gap between traditional music theory and modern digital production techniques, creating a learning experience that's both comprehensive and inspiring.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="flex items-center space-x-2 bg-secondary px-4 py-2 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-secondary-foreground">Grammy Nominated</span>
                </span>
                <span className="flex items-center space-x-2 bg-secondary px-4 py-2 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-secondary-foreground">500+ Students</span>
                </span>
                <span className="flex items-center space-x-2 bg-secondary px-4 py-2 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-secondary-foreground">8+ Years Experience</span>
                </span>
              </div>
              
              <Link 
                to="/about"
                className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:shadow-glow transition-all duration-300 ease-smooth hover:scale-105"
              >
                <span>Learn More About Me</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="animate-scale-in">
              <img 
                src={artistPortrait} 
                alt="Artist Portrait" 
                className="w-full rounded-lg shadow-soft hover:shadow-glow transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Preview Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-foreground mb-4">Transform Your Music Skills</h2>
            <p className="text-xl text-muted-foreground">Comprehensive courses for every skill level</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth hover:-translate-y-2 text-center">
              <BookOpen className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Beginner Friendly</h3>
              <p className="text-muted-foreground mb-6">Start from scratch with step-by-step guidance through every fundamental concept.</p>
              <div className="text-primary font-bold text-lg">6 Courses Available</div>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth hover:-translate-y-2 text-center">
              <TrendingUp className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Advanced Techniques</h3>
              <p className="text-muted-foreground mb-6">Master professional production methods used by industry leaders.</p>
              <div className="text-primary font-bold text-lg">50+ Hours Content</div>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth hover:-translate-y-2 text-center">
              <Users className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Community Support</h3>
              <p className="text-muted-foreground mb-6">Join a thriving community of musicians and producers.</p>
              <div className="text-primary font-bold text-lg">1,200+ Students</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/courses"
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-glow transition-all duration-300 ease-smooth hover:scale-105"
            >
              <span>Explore All Courses</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-card-foreground mb-6">Stay In The Loop</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get exclusive access to new tracks, tutorials, and course updates delivered straight to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 ease-smooth hover:scale-105">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            Join 5,000+ musicians. No spam, unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">Ready to Start Your Musical Journey?</h2>
          <p className="text-xl mb-8 opacity-90 animate-slide-up">
            Join hundreds of students who have transformed their passion into professional skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/courses"
              className="bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-300 ease-spring"
            >
              View All Courses
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground hover:text-primary transition-all duration-300 ease-smooth"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;