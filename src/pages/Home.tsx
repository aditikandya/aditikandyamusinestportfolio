import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, ArrowRight, Star, Users, Award, Calendar, Download, Heart, Share2, 
         Music2, Headphones, Mic2, Guitar, Drum, Piano, Volume2, TrendingUp, 
         CheckCircle, Quote, Globe, Camera, Video, Sparkles, BookOpen, ChevronLeft, ChevronRight, Instagram, Youtube } from 'lucide-react';
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
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselSlides = [
    {
      image: heroStudio,
      title: "Welcome to MusiNest",
      subtitle: "Where Music Dreams Take Flight",
      description: "Discover the joy of learning piano and vocals in a nurturing environment",
      buttonText: "Start Your Journey",
      buttonLink: "/courses",
      overlay: "dark"
    },
    {
      image: livePerformance,
      title: "Live Performance Excellence",
      subtitle: "From Practice to Performance",
      description: "Build confidence and showcase your musical talents on stage",
      buttonText: "Watch Performances",
      buttonLink: "/teacher",
      overlay: "light"
    },
    {
      image: studentsLearning,
      title: "Personalized Learning",
      subtitle: "One-on-One Attention",
      description: "Get individualized instruction tailored to your learning style and goals",
      buttonText: "Book Trial Lesson",
      buttonLink: "/contact",
      overlay: "dark"
    },
    {
      image: musicEquipment,
      title: "Professional Setup",
      subtitle: "Quality Instruments & Materials",
      description: "Learn with the best equipment and comprehensive study materials",
      buttonText: "View Setup",
      buttonLink: "/teacher",
      overlay: "light"
    },
    {
      image: instrumentsCollection,
      title: "Multiple Genres",
      subtitle: "From Classical to Contemporary",
      description: "Explore Western classical, Bollywood, Rock, Pop, and Indian classical music",
      buttonText: "Explore Genres",
      buttonLink: "/lessons",
      overlay: "dark"
    }
  ];



  const stats = [
    { icon: Users, label: "Students Taught", value: "50+" },
    { icon: Star, label: "Examinations Passed", value: "100+" },
    { icon: Award, label: "ABRSM Grade 8", value: "Piano" },
    { icon: Calendar, label: "Years Experience", value: "4+" },
    { icon: Globe, label: "Music Genres", value: "5+" },
    { icon: Headphones, label: "Classical Training", value: "Indian" },
  ];



  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Piano Student",
      image: studentsLearning,
      quote: "Aditi's teaching method is incredible! I went from complete beginner to ABRSM Grade 3 in just 2 years. Her patience and expertise are unmatched!"
    },
    {
      name: "Arjun Patel",
      role: "Vocal Student",
      image: nightStudio,
      quote: "Learning Indian classical vocals from Aditi has been transformative. She makes complex ragas accessible and enjoyable for beginners."
    },
    {
      name: "Zara Khan",
      role: "Bollywood Piano Student",
      image: mixingConsole,
      quote: "Aditi's Bollywood piano lessons are amazing! She breaks down complex songs into simple steps that anyone can follow."
    }
  ];

  const equipment = [
    { name: "Professional Piano", description: "Quality piano for classical and contemporary music learning", icon: Piano },
    { name: "Learning Materials", description: "Comprehensive resources for ABRSM, Trinity, and RSL examinations", icon: BookOpen },
    { name: "Vocal Training Setup", description: "Indian classical vocal training and contemporary singing techniques", icon: Mic2 },
    { name: "Music Theory Resources", description: "Comprehensive music theory and composition materials", icon: Headphones }
  ];

  const recentNews = [
    {
      title: "New Course: ABRSM Piano Preparation",
      date: "January 15, 2024",
      category: "Education",
      image: mixingConsole,
      preview: "Comprehensive preparation course for ABRSM piano examinations from Grade 1 to Grade 8..."
    },
    {
      title: "Bollywood Piano Workshop Success",
      date: "January 10, 2024",
      category: "Workshop",
      image: instrumentsCollection,
      preview: "Our recent Bollywood piano workshop was a huge success with 25+ students learning popular songs..."
    },
    {
      title: "Indian Classical Vocal Training",
      date: "January 5, 2024",
      category: "Vocal Training",
      image: nightStudio,
      preview: "New batch starting for Indian classical vocal training with focus on ragas and traditional compositions..."
    }
  ];

  // Carousel navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const upcomingEvents = [
    {
      date: "Feb 15",
      title: "Piano Masterclass - ABRSM Preparation",
      location: "MusiNest Studio",
      type: "Workshop",
      price: "$85"
    },
    {
      date: "Feb 22",
      title: "Indian Classical Vocal Workshop",
      location: "Online Event",
      type: "Panel",
      price: "Free"
    },
    {
      date: "Mar 8",
      title: "Bollywood Piano Workshop",
      location: "Community Center",
      type: "Masterclass",
      price: "$120"
    }
  ];

  const achievements = [
    { title: "ABRSM Grade 8", year: "2023", category: "Piano Certification" },
    { title: "KM Music Conservatory", year: "2022", category: "Composition Course" },
    { title: "Sound Engineering", year: "2022", category: "Intensive Course" },
    { title: "Indian Classical Vocal", year: "2021", category: "Training Completed" }
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
      {/* Hero Carousel Section */}
      <section className="relative h-screen bg-gradient-hero overflow-hidden">
        {/* Carousel Container */}
        <div className="relative w-full h-full">
          {carouselSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className={`absolute inset-0 ${
                  slide.overlay === 'dark' 
                    ? 'bg-black/50' 
                    : 'bg-white/20'
                }`}></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                    {slide.title}
                  </h1>
                  <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-primary-foreground animate-slide-up">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-slide-up">
                    {slide.description}
                  </p>
                  <Link
                    to={slide.buttonLink}
                    className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-glow transition-all duration-300 ease-smooth hover:scale-105 animate-fade-in"
                  >
                    <span>{slide.buttonText}</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Taglines and Social Media Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Welcome to my musical nest — let's create something beautiful together! 🎶</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">We don't do off-key</span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">No boring notes allowed</span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Music, served hot</span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Slay every note</span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Hatching harmony, one note at a time</span>
            </div>
            
            {/* Skills Showcase */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Musical Skills & Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-card rounded-lg border border-border hover:shadow-soft transition-all duration-300">
                  <Piano className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Piano</p>
                  <p className="text-xs text-muted-foreground">ABRSM Grade 8</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border hover:shadow-soft transition-all duration-300">
                  <Mic2 className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Vocal</p>
                  <p className="text-xs text-muted-foreground">Indian Classical</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border hover:shadow-soft transition-all duration-300">
                  <Music2 className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Composition</p>
                  <p className="text-xs text-muted-foreground">KM Conservatory</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border hover:shadow-soft transition-all duration-300">
                  <Headphones className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Sound Engineering</p>
                  <p className="text-xs text-muted-foreground">Intensive Course</p>
                </div>
              </div>
            </div>
            
            {/* Social Media Buttons */}
            <div className="flex justify-center space-x-6 mt-8">
              <a href="#" className="group flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 ease-smooth hover:scale-105">
                <Instagram className="w-5 h-5" />
                <span>Follow on Instagram</span>
              </a>
              <a href="#" className="group flex items-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 ease-smooth hover:scale-105">
                <Youtube className="w-5 h-5" />
                <span>Subscribe on YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary-foreground mb-4">By the Numbers</h2>
            <p className="text-xl text-muted-foreground">The impact of MusiNest by Aditi</p>
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





      {/* Student Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-foreground mb-4">Student Success Stories</h2>
            <p className="text-xl text-muted-foreground">Real results from Aditi's students</p>
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
              <h2 className="text-4xl font-bold text-card-foreground mb-6">Quality Learning Environment</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Experience music learning with quality instruments and comprehensive learning materials that support your musical journey.
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
            <p className="text-xl text-muted-foreground">Stay updated with the latest from MusiNest</p>
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
            <p className="text-xl text-muted-foreground">Join Aditi at these upcoming events and workshops</p>
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
            <p className="text-xl text-muted-foreground">Milestones in Aditi's musical journey</p>
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

      {/* Live Performance Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-foreground mb-6">Live Performance Excellence</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Experience the magic of live music performances and build confidence on stage. From intimate recitals to grand performances, discover your inner performer.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our students regularly participate in concerts, competitions, and community events, showcasing their musical growth and talent.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="flex items-center space-x-2 bg-secondary px-4 py-2 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-secondary-foreground">Regular Concerts</span>
                </span>
                <span className="flex items-center space-x-2 bg-secondary px-4 py-2 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-secondary-foreground">Competition Prep</span>
                </span>
                <span className="flex items-center space-x-2 bg-secondary px-4 py-2 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-secondary-foreground">Stage Confidence</span>
                </span>
              </div>
              
              <Link 
                to="/teacher"
                className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:shadow-glow transition-all duration-300 ease-smooth hover:scale-105"
              >
                <span>View Performances</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="animate-scale-in">
              <img 
                src={livePerformance} 
                alt="Live Music Performance" 
                className="w-full rounded-lg shadow-soft hover:shadow-glow transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-foreground mb-6">Meet Aditi</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Hi, I'm Aditi Kandya — a pianist, classical vocalist, and passionate music educator. With years of training and a deep love for music, I have completed ABRSM Grade 8 in Piano and am also a trained Indian classical vocalist.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                My learning journey has taken me beyond performance and teaching — I have attended a 21-day summer course in Composition at KM Music Conservatory, Chennai, and completed a 2-week intensive course in Sound Engineering.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="flex items-center space-x-2 bg-secondary px-4 py-2 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-secondary-foreground">ABRSM Grade 8</span>
                </span>
                <span className="flex items-center space-x-2 bg-secondary px-4 py-2 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-secondary-foreground">50+ Students</span>
                </span>
                <span className="flex items-center space-x-2 bg-secondary px-4 py-2 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-secondary-foreground">4+ Years Experience</span>
                </span>
              </div>
              
              <Link 
                to="/about"
                className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:shadow-glow transition-all duration-300 ease-smooth hover:scale-105"
              >
                <span>Learn More About Aditi</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="animate-scale-in">
              <img 
                src={artistPortrait} 
                alt="Aditi Kandya - Pianist & Music Educator" 
                className="w-full rounded-lg shadow-soft hover:shadow-glow transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pre-recorded Courses Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-foreground mb-4">Pre-recorded Courses</h2>
            <p className="text-xl text-muted-foreground mb-8">Learn at your own pace with comprehensive video lessons</p>
            <Link 
              to="/lessons"
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-glow transition-all duration-300 ease-smooth hover:scale-105"
            >
              <span>Browse All Lessons</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
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
              <p className="text-muted-foreground mb-6">Master professional piano techniques and advanced classical repertoire.</p>
              <div className="text-primary font-bold text-lg">50+ Hours Content</div>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth hover:-translate-y-2 text-center">
              <Users className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Community Support</h3>
              <p className="text-muted-foreground mb-6">Join a thriving community of music students and enthusiasts.</p>
              <div className="text-primary font-bold text-lg">50+ Students</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/lessons"
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-glow transition-all duration-300 ease-smooth hover:scale-105"
            >
              <span>Explore All Lessons</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
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
              <p className="text-muted-foreground mb-6">Master professional piano techniques and advanced classical repertoire.</p>
              <div className="text-primary font-bold text-lg">50+ Hours Content</div>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth hover:-translate-y-2 text-center">
              <Users className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Community Support</h3>
              <p className="text-muted-foreground mb-6">Join a thriving community of music students and enthusiasts.</p>
              <div className="text-primary font-bold text-lg">50+ Students</div>
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

      {/* Solo One-on-One Lessons Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-card-foreground mb-6">Solo One-on-One Lessons</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Get personalized attention with private lessons tailored to your learning style, goals, and schedule. Every lesson is designed specifically for you.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you're a complete beginner or an advanced student, our one-on-one approach ensures you progress at your own pace with focused instruction.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="flex items-center space-x-2 bg-background px-4 py-2 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-card-foreground">Personalized Curriculum</span>
                </span>
                <span className="flex items-center space-x-2 bg-background px-4 py-2 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-card-foreground">Flexible Scheduling</span>
                </span>
                <span className="flex items-center space-x-2 bg-background px-4 py-2 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-card-foreground">Progress Tracking</span>
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-glow transition-all duration-300 ease-smooth hover:scale-105"
                >
                  <span>Book a Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/courses"
                  className="inline-flex items-center space-x-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 ease-smooth"
                >
                  <span>View Lesson Plans</span>
                </Link>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src={studentsLearning} 
                alt="One-on-One Music Lesson" 
                className="w-full rounded-lg shadow-soft hover:shadow-glow transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-card-foreground mb-6">Stay In The Loop</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get exclusive access to new lessons, workshops, and course updates delivered straight to your inbox.
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
            Join 50+ students. No spam, unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">Ready to Start Your Musical Journey?</h2>
          <p className="text-xl mb-8 opacity-90 animate-slide-up">
            Join 50+ students who have transformed their passion into musical skills.
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