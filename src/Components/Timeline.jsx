import React from 'react';
import './Timeline.css';

const TimelineItem = ({ date, title, description }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-content">
        <span className="timeline-date">{date}</span>
        <h3 className="timeline-title">{title}</h3>
        <p className="timeline-description">{description}</p>
      </div>
    </div>
  );
};

const Timeline = ({ items }) => {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <TimelineItem 
          key={index}
          date={item.date}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Timeline;