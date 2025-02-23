import React from 'react';

interface FeatureItemProps {
  title: string;
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, text }) => {
  return (
    <div className="item features-without-image col-12 col-md-6 col-lg-4">
      <div className="item-wrapper">
        <div className="card-box align-left">
          <p className="card-title mb-3 text-4xl font-bold">
            {title}
          </p>
          <p className="card-text mb-3 text-lg">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    { title: '99%', text: 'Satisfaction Guaranteed' },
    { title: '1000+', text: 'Happy Clients' },
    { title: '500+', text: 'Projects Completed' }
  ];

  return (
    <section className="features-section py-12">
      <div className="container mx-auto">
        <div className="row justify-center">
          {features.map((feature, index) => (
            <FeatureItem key={index} title={feature.title} text={feature.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
