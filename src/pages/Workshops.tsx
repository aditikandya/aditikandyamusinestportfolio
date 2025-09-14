import React from 'react';
import { Calendar, Clock, Users, MapPin, Star, BookOpen } from 'lucide-react';

const Workshops = () => {
  const workshops = [
    {
      id: 1,
      title: 'Piano Masterclass - ABRSM Preparation',
      date: 'Feb 15, 2024',
      time: '2:00 PM - 5:00 PM',
      location: 'MusiNest Studio',
      capacity: 12,
      price: '$85',
      rating: 4.9,
      description: 'Intensive piano workshop focusing on ABRSM examination preparation and technique refinement.',
      topics: ['Exam preparation', 'Technique refinement', 'Performance practice', 'Repertoire selection']
    },
    {
      id: 2,
      title: 'Bollywood Piano Workshop',
      date: 'Feb 22, 2024',
      time: '1:00 PM - 4:00 PM',
      location: 'Community Center',
      capacity: 20,
      price: '$120',
      rating: 4.8,
      description: 'Learn to play popular Bollywood songs on piano with proper technique and expression.',
      topics: ['Song learning', 'Chord progressions', 'Expression techniques', 'Performance skills']
    },
    {
      id: 3,
      title: 'Indian Classical Vocal Workshop',
      date: 'Mar 8, 2024',
      time: '6:00 PM - 8:00 PM',
      location: 'Online Event',
      capacity: 50,
      price: 'Free',
      rating: 4.7,
      description: 'Introduction to Indian classical vocal music, ragas, and traditional compositions.',
      topics: ['Voice training', 'Raga basics', 'Tala patterns', 'Traditional songs']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Interactive <span className="text-primary">Workshops</span>
          </h1>
                     <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
             Join hands-on workshops and masterclasses to accelerate your piano and vocal skills with expert guidance from Aditi.
           </p>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop) => (
              <div key={workshop.id} className="bg-background rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth hover:-translate-y-2">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full">
                      {workshop.price === 'Free' ? 'Free Event' : 'Paid Workshop'}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{workshop.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">{workshop.title}</h3>
                  <p className="text-muted-foreground mb-4">{workshop.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{workshop.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{workshop.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{workshop.capacity} spots available</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Topics Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {workshop.topics.map((topic, index) => (
                        <span key={index} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 ease-smooth hover:scale-105">
                    {workshop.price === 'Free' ? 'Register Now' : `Enroll - ${workshop.price}`}
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

export default Workshops;
