import React from 'react';

export default function Post({ text }) {
  return (
    <div className="post">
      <p className="post-text">{text}</p>
    </div>
  );
}
