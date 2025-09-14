import { useState } from 'react';
import { Calendar, Award, Users, Music, Heart, Target, Lightbulb, TrendingUp } from 'lucide-react';
import artistPortrait from '../assets/artist-portrait.jpg';
import musicEquipment from '../assets/music-equipment.jpg';
import livePerformance from '../assets/live-performance.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  const timeline = [
    { year: '2018', event: 'Began Piano Journey', description: 'Started formal piano training with focus on Western classical music' },
    { year: '2020', event: 'ABRSM Grade 5', description: 'Achieved Grade 5 certification in piano performance' },
    { year: '2021', event: 'Indian Classical Vocal Training', description: 'Completed intensive training in Indian classical vocal music' },
    { year: '2022', event: 'KM Music Conservatory', description: 'Attended 21-day summer course in Composition at KM Music Conservatory, Chennai' },
    { year: '2022', event: 'Sound Engineering Course', description: 'Completed 2-week intensive course in Sound Engineering' },
    { year: '2023', event: 'ABRSM Grade 8', description: 'Achieved highest level ABRSM Grade 8 certification in piano' },
    { year: '2024', event: 'MusiNest Launch', description: 'Founded MusiNest by Aditi, starting with 50+ students' },
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

  const achievements = [
    { icon: Award, label: 'ABRSM Grade 8', description: 'Piano certification' },
    { icon: Users, label: '50+ Students', description: 'Taught across various ages' },
    { icon: Music, label: 'Indian Classical', description: 'Vocal training completed' },
    { icon: Calendar, label: '4+ Years', description: 'Teaching experience' },
  ];

  const tabContent = {
    story: (
      <div className="space-y-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">The Beginning</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              My musical journey began with a deep fascination for the piano and the beautiful sounds it could create. What started as curiosity about Western classical music evolved into a passion that would shape my entire life and career.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The turning point came when I discovered the joy of Indian classical vocal music, realizing that music transcends cultural boundaries. This dual passion for both Western and Indian classical music led to the birth of MusiNest by Aditi.
            </p>
          </div>
          <div className="animate-scale-in">
            <img 
              src={musicEquipment} 
              alt="Music Equipment" 
              className="w-full rounded-lg shadow-soft hover:shadow-glow transition-shadow duration-300"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <h3 className="text-3xl font-bold text-foreground mb-6">The Vision</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Today, MusiNest represents more than just music education. It's a nurturing space where every student feels seen, heard, and supported in their unique musical journey. A place where traditional techniques meet creative expression.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every student who joins MusiNest becomes part of a family dedicated to building strong foundations, exploring diverse musical styles, and discovering their authentic voice through patient guidance and encouragement.
            </p>
          </div>
          <div className="lg:order-1 animate-scale-in">
            <img 
              src={livePerformance} 
              alt="Live Performance" 
              className="w-full rounded-lg shadow-soft hover:shadow-glow transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    ),
    timeline: (
      <div className="space-y-8">
        <h3 className="text-3xl font-bold text-foreground mb-8 text-center">My Musical Journey</h3>
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row gap-6 p-6 bg-card rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="md:w-24 flex-shrink-0">
                <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-lg">
                  {item.year}
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="text-xl font-semibold text-card-foreground mb-2">{item.event}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    values: (
      <div className="space-y-8">
        <h3 className="text-3xl font-bold text-foreground mb-8 text-center">What Drives Me</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group p-8 bg-card rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold text-card-foreground mb-4">{value.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    )
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                About <span className="text-primary">MusiNest</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Bridging the gap between Western classical piano and Indian classical vocal traditions, creating a unique musical journey for every student.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-4 bg-secondary rounded-lg">
                    <achievement.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-secondary-foreground">{achievement.label}</div>
                    <div className="text-sm text-muted-foreground">{achievement.description}</div>
                  </div>
                ))}
              </div>
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

      {/* Qualifications & Expertise Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-foreground mb-4">My Qualifications & Expertise</h2>
            <p className="text-xl text-muted-foreground">A comprehensive foundation in both Western and Indian classical music traditions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">ABRSM Grade 8 Piano</h3>
              <p className="text-muted-foreground mb-4">Highest level certification in piano performance</p>
              <p className="text-sm text-primary font-semibold">Completed 2023</p>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <Music className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Indian Classical Vocal</h3>
              <p className="text-muted-foreground mb-4">Trained in traditional ragas and compositions</p>
              <p className="text-sm text-primary font-semibold">Completed 2021</p>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Composition Course</h3>
              <p className="text-muted-foreground mb-4">21-day intensive at KM Music Conservatory</p>
              <p className="text-sm text-primary font-semibold">Chennai, 2022</p>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Sound Engineering</h3>
              <p className="text-muted-foreground mb-4">2-week intensive technical course</p>
              <p className="text-sm text-primary font-semibold">Completed 2022</p>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Teaching Experience</h3>
              <p className="text-muted-foreground mb-4">4+ years of personalized instruction</p>
              <p className="text-sm text-primary font-semibold">50+ Students</p>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Passion for Music</h3>
              <p className="text-muted-foreground mb-4">Dedicated to nurturing musical talent</p>
              <p className="text-sm text-primary font-semibold">Lifetime Commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Music Genres & Styles Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Music Genres & Styles</h2>
            <p className="text-xl text-muted-foreground">A diverse range of musical traditions and contemporary styles</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth hover:-translate-y-2 text-center border-l-4 border-primary">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Western Classical</h3>
              <p className="text-muted-foreground mb-4">From Baroque to Romantic periods, building strong technical foundations through structured ABRSM curriculum.</p>
              <div className="text-primary font-semibold">Grades 1-8</div>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth hover:-translate-y-2 text-center border-l-4 border-primary">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Bollywood Piano</h3>
              <p className="text-muted-foreground mb-4">Popular Hindi film songs arranged for piano, focusing on melody, harmony, and rhythmic patterns.</p>
              <div className="text-primary font-semibold">All Levels</div>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth hover:-translate-y-2 text-center border-l-4 border-primary">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Indian Classical Vocal</h3>
              <p className="text-muted-foreground mb-4">Traditional ragas, tala patterns, and classical compositions from the rich heritage of Indian music.</p>
              <div className="text-primary font-semibold">Beginner to Advanced</div>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth hover:-translate-y-2 text-center border-l-4 border-primary">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Rock & Pop</h3>
              <p className="text-muted-foreground mb-4">Contemporary popular music styles, chord progressions, and modern piano techniques.</p>
              <div className="text-primary font-semibold">Intermediate to Advanced</div>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth hover:-translate-y-2 text-center border-l-4 border-primary">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Music Theory</h3>
              <p className="text-muted-foreground mb-4">Comprehensive understanding of harmony, rhythm, notation, and musical structure.</p>
              <div className="text-primary font-semibold">Integrated Learning</div>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth hover:-translate-y-2 text-center border-l-4 border-primary">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Performance Skills</h3>
              <p className="text-muted-foreground mb-4">Stage presence, confidence building, and audience engagement techniques.</p>
              <div className="text-primary font-semibold">Regular Concerts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ease-smooth ${
                  activeTab === tab
                    ? 'bg-primary text-primary-foreground shadow-glow scale-105'
                    : 'bg-secondary text-secondary-foreground hover:bg-muted hover:scale-105'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="animate-fade-in">
            {tabContent[activeTab as keyof typeof tabContent]}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-foreground mb-6">My Vision for MusiNest</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At MusiNest, my vision is to create more than just music lessons — I want it to be a warm, encouraging space where every student feels seen, heard, and supported in their own unique journey.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Right now, MusiNest is a one-girl gig— every class, every lesson plan, every note of encouragement comes directly from me. This allows me to personally connect with each student, understand their strengths, and guide them at a pace that feels right for them.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in striking the perfect balance between structure and creativity — helping students build strong technical foundations while also giving them the freedom to explore, experiment, and make music of their own.
              </p>
            </div>
            <div className="animate-scale-in">
              <img 
                src={musicEquipment} 
                alt="MusiNest Studio Setup" 
                className="w-full rounded-lg shadow-soft hover:shadow-glow transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-secondary-foreground mb-8 animate-fade-in">My Mission</h2>
          <div className="text-xl leading-relaxed space-y-6 animate-slide-up">
            <p className="text-secondary-foreground">
              My mission with MusiNest is to make music learning an experience that feels personal, enjoyable, and deeply rewarding. I want every student — whether a curious beginner or an aspiring performer — to feel empowered, inspired, and confident in their own abilities.
            </p>
            <p className="text-secondary-foreground">
              Through patient guidance, interactive lessons, and a balance of discipline and creativity, I aim to build strong technical skills, encourage self-expression, and create a safe space where mistakes are part of the journey, not something to fear.
            </p>
            <div className="mt-8 p-6 bg-card rounded-lg">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Mission Statement</h3>
              <p className="text-lg text-muted-foreground">
                <strong>"To make music learning personal, joyful, and confidence-building for every student."</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 animate-fade-in">Teaching Philosophy</h2>
          <div className="text-xl leading-relaxed space-y-6 animate-slide-up">
            <p>
              "Music is not just about technical proficiency—it's about emotional expression, cultural connection, and personal growth. My teaching approach combines rigorous ABRSM training with creative exploration of diverse musical styles."
            </p>
            <p>
              "Every student brings a unique perspective and set of experiences. My role is to help them discover their authentic voice while building strong foundations in both Western classical and Indian classical traditions."
            </p>
            <p>
              "At MusiNest, we believe in creating a warm, encouraging space where mistakes are part of the journey. My mission is to make music learning personal, joyful, and confidence-building for every student."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;