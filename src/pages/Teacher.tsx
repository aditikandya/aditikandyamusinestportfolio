import React from 'react';
import { Award, Users, Calendar, Music, Heart, Target, Lightbulb, TrendingUp, Star, MapPin, Phone, Mail, Instagram, Twitter, Youtube, CheckCircle, Headphones, Mic, Piano } from 'lucide-react';
import artistPortrait from '../assets/artist-portrait.jpg';
import livePerformance from '../assets/live-performance.jpg';
import mixingConsole from '../assets/mixing-console.jpg';

const Teacher = () => {
  const achievements = [
    { icon: Award, label: 'ABRSM Grade 8', description: 'Piano certification' },
    { icon: Users, label: '50+ Students', description: 'Taught across various ages' },
    { icon: Music, label: 'Indian Classical', description: 'Vocal training completed' },
    { icon: Calendar, label: '4+ Years', description: 'Teaching experience' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'Every lesson is infused with genuine love for music and dedication to student success.'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'We set clear, achievable milestones that keep you motivated and progressing steadily.'
    },
    {
      icon: Lightbulb,
      title: 'Balanced Approach',
      description: 'Striking the perfect balance between structure and creativity in music learning.'
    },
    {
      icon: TrendingUp,
      title: 'Personal Growth',
      description: 'Creating a safe space where mistakes are part of the journey, not something to fear.'
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Piano Student",
      rating: 5,
      quote: "Aditi's teaching method is incredible! I went from complete beginner to ABRSM Grade 3 in just 2 years. Her patience and expertise are unmatched!"
    },
    {
      name: "Arjun Patel",
      role: "Vocal Student",
      rating: 5,
      quote: "Learning Indian classical vocals from Aditi has been transformative. She makes complex ragas accessible and enjoyable for beginners."
    },
    {
      name: "Zara Khan",
      role: "Bollywood Piano Student",
      rating: 5,
      quote: "Aditi's Bollywood piano lessons are amazing! She breaks down complex songs into simple steps that anyone can follow."
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: 'Instagram', link: '#', handle: '@musinest_aditi' },
    { icon: Twitter, name: 'Twitter', link: '#', handle: '@musinest' },
    { icon: Youtube, name: 'YouTube', link: '#', handle: 'MusiNest by Aditi' },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Meet Your <span className="text-primary">Teacher</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
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

      {/* Achievements Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-foreground mb-4">Recognition & Achievements</h2>
            <p className="text-xl text-muted-foreground">Milestones in my musical journey</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth hover:-translate-y-2 text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <achievement.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-card-foreground mb-2">{achievement.label}</h4>
                <p className="text-muted-foreground text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-card-foreground mb-4">My Teaching Philosophy</h2>
            <p className="text-xl text-muted-foreground">The principles that guide every lesson</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What My Students Say</h2>
            <p className="text-xl text-muted-foreground">Real feedback from real students</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <h4 className="text-lg font-semibold text-card-foreground">{testimonial.name}</h4>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio & Equipment */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
                             <h2 className="text-4xl font-bold text-secondary-foreground mb-6">My Musical Setup</h2>
               <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                 Experience music learning in a nurturing environment equipped with quality instruments and learning materials.
               </p>
               
               <div className="space-y-6">
                 <div className="flex items-start space-x-4">
                   <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                     <Piano className="w-6 h-6" />
                   </div>
                   <div>
                     <h4 className="text-lg font-semibold text-secondary-foreground mb-1">Professional Piano</h4>
                     <p className="text-muted-foreground">Quality piano for classical and contemporary music learning</p>
                   </div>
                 </div>
                 <div className="flex items-start space-x-4">
                   <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                     <Headphones className="w-6 h-6" />
                   </div>
                   <div>
                     <h4 className="text-lg font-semibold text-secondary-foreground mb-1">Learning Materials</h4>
                     <p className="text-muted-foreground">Comprehensive resources for ABRSM, Trinity, and RSL examinations</p>
                   </div>
                 </div>
                 <div className="flex items-start space-x-4">
                   <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                     <Mic className="w-6 h-6" />
                   </div>
                   <div>
                     <h4 className="text-lg font-semibold text-secondary-foreground mb-1">Vocal Training</h4>
                     <p className="text-muted-foreground">Indian classical vocal training and contemporary singing techniques</p>
                   </div>
                 </div>
               </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              <img 
                src={mixingConsole} 
                alt="Mixing Console" 
                className="w-full rounded-lg shadow-soft hover:shadow-glow transition-shadow duration-300"
              />
              <img 
                src={livePerformance} 
                alt="Live Performance" 
                className="w-full rounded-lg shadow-soft hover:shadow-glow transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Social */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-card-foreground mb-8">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Ready to start your musical journey? Get in touch or follow my work on social media.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Contact Information</h3>
              <div className="space-y-3 text-left">
                                 <div className="flex items-center space-x-3">
                   <MapPin className="w-5 h-5 text-primary" />
                   <span className="text-muted-foreground">MusiNest Studio, Chennai, India</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <Phone className="w-5 h-5 text-primary" />
                   <span className="text-muted-foreground">+91 98765 43210</span>
                 </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">aditi@musinest.com</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Follow My Work</h3>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 ease-spring"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-glow transition-all duration-300 ease-smooth hover:scale-105">
            Book a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Teacher;
