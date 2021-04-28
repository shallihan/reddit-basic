import React from 'react';
import Skeleton from 'react-loading-skeleton';
import './Post.css';
import './PostLoading.css';
import {
    TiArrowUpOutline,
    TiArrowDownOutline,
    TiMessage,
  } from 'react-icons/ti';

  const PostLoading = () => {
      return (
        <article className="post">
            <div className="voting-container">
                <button
                type="button"
                className="icon-action-button up-vote"
                >
                    <TiArrowUpOutline className="icon-action" />
                </button>
                <Skeleton className="post-votes-value post-votes-value-loading" />
                <button
                type="button"
                className="icon-action-button down-vote"
                >
                    <TiArrowDownOutline className="icon-action" />
                </button>
            </div>
            <div className="post-container">
                <h3 className="post-title">
                    <Skeleton />
                </h3>
                <div className="image-container">
                    <Skeleton height={250} />
                </div>
                <div className="post-details">
                    <span>
                        <Skeleton width={40} />
                    </span>
                    <span>
                        <Skeleton width={80} />
                    </span>
                    <span className="post-comments-container">
                        <button
                        type="button"
                        className="icon-action-button"
                        >
                            <TiMessage className="icon-action" />
                        </button>
                    </span>
                </div>
            </div>  
        </article>
      );
  };


  export default PostLoading;