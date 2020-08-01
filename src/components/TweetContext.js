import React from 'react';
import avatar from "../assets/carmen-sandiego.png";
import moment from 'moment';

export const TweetContext = React.createContext();

const TweetProvider = ({
  children}) => {
    const date = moment().format('h:mm A - MMM Do, YYYY ');
    const [numOfLikes, setNumOfLikes] = React.useState(460);
    const [numOfRetweets, setNumOfRetweets] = React.useState(65);
    const [isLiked, setIsLiked] = React.useState(false);
    const [isRetweeted, setIsRetweeted] = React.useState(false);

    return (
        <TweetContext.Provider
          value={{
            tweetContents:"Where in the world am I?",
            displayName:"Carmen Sandiego ✨",
            username:"carmen-sandiego",
            avatarSrc: avatar,
            isRetweetedByCurrentUser: isRetweeted,
            isLikedByCurrentUser: isLiked,
            date: date,
            numOfLikes: numOfLikes,
            numOfRetweets: numOfRetweets,
          }}
        >
          {children}
        </TweetContext.Provider>
    );
  };
  export default TweetProvider;