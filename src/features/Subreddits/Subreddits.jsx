import React from 'react';
import './Subreddits.css';
import Card from '../../components/Card/Card';

const Subreddits = () => {
 return (
     <Card className="subreddit-card">
         <h2>Subreddits</h2>
         <ul className="subreddits-list">
             <lil>4chan</lil>
             <li>sadcringe</li>
             <li>nonono</li>
             <li>science</li>
             <li>MemeEconony</li>
             <li>futurology</li>
         </ul>
    </Card>
 );
}

export default Subreddits;