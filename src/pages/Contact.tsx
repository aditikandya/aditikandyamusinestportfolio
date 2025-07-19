import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Calendar, Instagram, Twitter, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
      
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Studio Location',
      details: ['123 Music Street', 'Harmony District, HD 12345', 'United States'],
      link: 'https://maps.google.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', 'Call or Text'],
      link: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@soundscape.com', 'Quick Response Guaranteed'],
      link: 'mailto:hello@soundscape.com'
    },
    {
      icon: Clock,
      title: 'Studio Hours',
      details: ['Mon - Fri: 9:00 AM - 8:00 PM', 'Sat: 10:00 AM - 6:00 PM', 'Sun: By Appointment'],
      link: null
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: 'Instagram', link: '#', handle: '@soundscape_music' },
    { icon: Twitter, name: 'Twitter', link: '#', handle: '@soundscape' },
    { icon: Youtube, name: 'YouTube', link: '#', handle: 'SoundScape Academy' },
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'courses', label: 'Course Information' },
    { value: 'private', label: 'Private Lessons' },
    { value: 'collaboration', label: 'Collaboration' },
    { value: 'studio', label: 'Studio Booking' },
    { value: 'technical', label: 'Technical Support' }
  ];

  const faqs = [
    {
      question: 'How do I get started with courses?',
      answer: 'Simply browse our course catalog, select the course that interests you, and enroll. You\'ll get immediate access to all course materials.'
    },
    {
      question: 'Do you offer private lessons?',
      answer: 'Yes! I offer one-on-one sessions for personalized instruction. Contact me to discuss your goals and schedule a session.'
    },
    {
      question: 'Can I visit the studio?',
      answer: 'Studio visits are available by appointment. Please reach out to schedule a tour and see where the magic happens.'
    },
    {
      question: 'What equipment do I need for online courses?',
      answer: 'Most courses only require a computer and headphones. Specific requirements are listed in each course description.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to start your musical journey? Have questions about courses or want to collaborate? I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="group bg-gradient-card p-6 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 ease-smooth hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-muted-foreground text-sm">
                      {info.link && detailIndex === 0 ? (
                        <a 
                          href={info.link} 
                          className="hover:text-primary transition-colors duration-200"
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-foreground mb-8">Send Me a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Message sent successfully! I'll get back to you within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-foreground mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-vertical"
                    placeholder="Tell me more about what you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold text-lg transition-all duration-300 ease-smooth flex items-center justify-center space-x-2 ${
                    isSubmitting 
                      ? 'opacity-70 cursor-not-allowed' 
                      : 'hover:shadow-glow hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {/* Response Time */}
              <div className="bg-card p-6 rounded-lg shadow-soft mb-8">
                <div className="flex items-center mb-4">
                  <MessageSquare className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-card-foreground">Quick Response</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  I typically respond to all inquiries within 24 hours. For urgent matters, feel free to call or text directly.
                </p>
                <div className="bg-secondary p-4 rounded-lg">
                  <p className="text-secondary-foreground font-medium">Average Response Time: 4-6 hours</p>
                </div>
              </div>

              {/* Book a Call */}
              <div className="bg-card p-6 rounded-lg shadow-soft mb-8">
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-card-foreground">Book a Call</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Prefer to talk directly? Schedule a 15-minute consultation call to discuss your musical goals.
                </p>
                <button className="w-full bg-secondary text-secondary-foreground py-3 rounded-lg font-medium hover:bg-muted transition-colors duration-200">
                  Schedule a Call
                </button>
              </div>

              {/* Social Media */}
              <div className="bg-card p-6 rounded-lg shadow-soft">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Follow Me</h3>
                <p className="text-muted-foreground mb-4">
                  Stay updated with my latest music, tutorials, and behind-the-scenes content.
                </p>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="flex items-center p-3 bg-secondary rounded-lg hover:bg-muted transition-colors duration-200 group"
                    >
                      <social.icon className="w-5 h-5 text-primary mr-3 group-hover:scale-110 transition-transform duration-200" />
                      <div>
                        <div className="font-medium text-secondary-foreground">{social.name}</div>
                        <div className="text-sm text-muted-foreground">{social.handle}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-secondary-foreground text-center mb-16">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg shadow-soft animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-card-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;