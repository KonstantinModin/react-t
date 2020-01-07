import React from 'react';
import SocialCardUI from './SocialCardUI';
import pic from './pict.jpg';

const data = {
    caption: 'The Practical Dev',
    tag: '@ThePracticalDev',
    date: 'Sep 10',
    tesis: 'Learning React? Start Small',
    author: '@dceddia',
    picture: pic,
    description: "Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.",
    website: 'dev.to',
    comments: [1,2],
    share: Array(47),
    likes: Array(190)
};

const SocialCardData = () => <SocialCardUI data={data}/>;

export default SocialCardData;
