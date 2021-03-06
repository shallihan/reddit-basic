import React, {useState} from 'react';
import {
  FiArrowUpCircle,
  FiArrowDownCircle,
  FiMessageSquare
} from 'react-icons/fi';
import {
  FaArrowCircleUp,
  FaArrowCircleDown
} from 'react-icons/fa';
import './Post.css';
import moment from 'moment';
import Skeleton from 'react-loading-skeleton';
import Card from '../../components/Card/Card';
import Comment from '../Comment/Comment';

const Post = (props) => {
    const [voteValue, setVoteValue] = useState(0);
    const { post, onToggleComments } = props;
    /**
    * @param {number} newValue The new vote valuen
    */

    const onHandleVote = (newValue) => {
        if (newValue === voteValue) {
            setVoteValue(0);
        } else if (newValue === 1) {
            setVoteValue(1);
        } else {
            setVoteValue(-1);
        }
    };

    const renderUpVote = () => {
        if( voteValue === 1) {
            return <FaArrowCircleUp className="icon-action"/>
        } 
        return <FiArrowUpCircle className="icon-action"/>
    };

    const renderDownVote = () => {
        if (voteValue === -1) {
          return <FaArrowCircleDown className="icon-action" />;
        }
        return <FiArrowDownCircle className="icon-action" />;
    };

    const getVoteType = () => {
        if (voteValue === 1) {
          return 'up-vote';
        }
        if (voteValue === -1) {
          return 'down-vote';
        }
    
        return '';
    };

    const renderComments = () => {
        if (post.errorComments) {
          return (
            <div>
              <h3>Error loading comments</h3>
            </div>
          );
        }
    
        if (post.loadingComments) {
          return (
            <div>
              <Skeleton count={3} height={25}/>
            </div>
          );
        }
    
        if (post.showingComments) {
          return (
            <div>
              {post.comments.map((comment) => (
                <Comment comment={comment} key={comment.id} />
              ))}
            </div>
          );
        }
    
        return null;
      };



    return(
        <article key={post.id}>
        <Card>
            <div className="post-wrapper">
                <div className="voting-container">
                    <button 
                    type="button"
                    className={`icon-action-button up-vote ${
                        voteValue === 1 && 'active'
                      }`}
                    onClick={() => onHandleVote(1)}
                      
                      >{renderUpVote()}</button>
                    <p className={`post-votes-value ${getVoteType()}`}>{post.ups}</p>
                    <button
                    type="button"
                    className={`icon-action-button down-vote ${
                        voteValue === -1 && 'active'
                      }`}
                    onClick={() => onHandleVote(-1)}
                    >{renderDownVote()}</button>
                </div>
                <div className="post-container">
                    <h3 className="post-title">{post.title}</h3>

                    <div className="image-container">
                        <img className="post-image" src={post.url} alt="" />
                    </div>

                    <div className="details-container">
                        <span className="author-username">{post.author}</span>
                        <span class="post-time-created">{moment.unix(post.created_utc).fromNow()}</span>
                        <span class="post-comments-container">
                            <button 
                            type="button"
                            className={`icon-action-button ${
                                post.showingComments && 'showing-comments'
                              }`}
                            onClick={() => onToggleComments(post.permalink)}
                            ><FiMessageSquare className="icon-action" /></button>
                        </span>
                    </div>
                    <div className="rendered-comments">
                    {renderComments()}
                    </div>
                </div>
            </div>
        </Card>
    </article>
    );
}

export default Post;