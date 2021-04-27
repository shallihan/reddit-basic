import React from 'react';
import './Post.css';
import Card from '../../components/Card/Card';

const Post = () => {
    return(
        <article>
        <Card>
            <div className="post-wrapper">
                <div className="voting-container">
                    <button>Up vote</button>
                    <p className="post-vote-value">Current vote value</p>
                    <button>Down vote</button>
                </div>
                <div className="post-container">
                    <h3 className="post-title"></h3>
                    <div className="image-container">
                        <img className="post-image" src="./coffee.webp"/>
                    </div>
                </div>
                <div className="details-container">
                    <span>Created</span>
                    <span class="post-comments-container">
                        <button type="button">Toggle Comments</button>
                    </span>
                </div>
            </div>
        </Card>
    </article>
    );
}

export default Post;