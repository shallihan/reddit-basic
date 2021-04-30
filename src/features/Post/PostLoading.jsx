import React from 'react';
import Skeleton from 'react-loading-skeleton';
import './Post.css';
import './PostLoading.css';

  const PostLoading = () => {
      return (
        <article className="post">
            <div className="post-container">
                    <h3 className="post-title">
                    <Skeleton width={450} height={25}/>
                    </h3>
                    <div className="image-container">
                        <Skeleton  height={450}/>
                    </div>
            </div> 
        </article>
      );
  };


  export default PostLoading;