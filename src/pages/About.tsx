import { useState } from 'react';
import { Calendar, Award, Users, Music, Heart, Target, Lightbulb, TrendingUp } from 'lucide-react';
import artistPortrait from '../assets/artist-portrait.jpg';
import musicEquipment from '../assets/music-equipment.jpg';
import livePerformance from '../assets/live-performance.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  const timeline = [
    { year: '2016', event: 'Started music production journey', description: 'Began learning digital audio workstations and basic music theory' },
    { year: '2018', event: 'First commercial release', description: 'Released debut single which gained 100K+ streams in first month' },
    { year: '2019', event: 'Founded SoundScape Academy', description: 'Started teaching music production to aspiring artists' },
    { year: '2021', event: 'Grammy nomination', description: 'Received nomination for Best Engineered Album' },
    { year: '2022', event: 'International recognition', description: 'Featured in Rolling Stone as "Producer to Watch"' },
    { year: '2024', event: 'Online education expansion', description: 'Launched comprehensive online course platform' },
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
      title: 'Innovation',
      description: 'Combining traditional techniques with cutting-edge technology for modern music creation.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Mindset',
      description: 'Continuous learning and adaptation to evolving music industry trends and technologies.'
    },
  ];

  const achievements = [
    { icon: Award, label: 'Grammy Nomination', description: 'Best Engineered Album 2021' },
    { icon: Users, label: '500+ Students', description: 'Taught across 6 countries' },
    { icon: Music, label: '50+ Releases', description: 'Albums, EPs, and singles' },
    { icon: Calendar, label: '8 Years', description: 'Professional experience' },
  ];

  const tabContent = {
    story: (
      <div className="space-y-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">The Beginning</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              My musical journey began in a small bedroom studio with nothing but a laptop and a dream. What started as late-night experiments with beats and melodies has evolved into a career that spans production, performance, and education.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The turning point came when I realized that the most fulfilling part of music wasn't just creating it, but sharing the knowledge and watching others discover their own unique sound. This realization led to the birth of SoundScape Academy.
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
              Today, SoundScape represents more than just music education. It's a community where creativity thrives, where traditional boundaries are broken, and where the next generation of artists learns to express themselves authentically.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every student who walks through our doors (virtual or physical) becomes part of a family dedicated to pushing the boundaries of what's possible in music.
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
                About <span className="text-primary">SoundScape</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Bridging the gap between traditional music education and modern digital creativity, one student at a time.
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

      {/* Philosophy Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 animate-fade-in">Teaching Philosophy</h2>
          <div className="text-xl leading-relaxed space-y-6 animate-slide-up">
            <p>
              "Music is not just about technical proficiency—it's about emotional expression, cultural connection, and personal growth. My teaching approach combines rigorous technical training with creative exploration."
            </p>
            <p>
              "Every student brings a unique perspective and set of experiences. My role is to help them discover their authentic voice while providing the tools and knowledge they need to bring their vision to life."
            </p>
            <p>
              "In today's rapidly evolving music landscape, adaptability is key. I prepare my students not just for today's industry, but for the challenges and opportunities of tomorrow."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;