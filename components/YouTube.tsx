import React from 'react';
import ReactPlayer from 'react-player';

type YouTubeProps = React.HTMLAttributes<HTMLDivElement> & {
    videoId: string;
};

export const YouTube: React.FC<YouTubeProps> = (props: YouTubeProps) => (
    <ReactPlayer url={`https://www.youtube.com/watch?v=${props.videoId}`}/>
);
