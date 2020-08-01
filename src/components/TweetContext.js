import React from 'react';
import avatar from "../assets/carmen-sandiego.png";
import moment from 'moment';

export const TweetContext = React.createContext();

const TweetProvider = ({
  children}) => {
    const date = moment().format('h:mm A - MMM Do, YYYY ');
    return (
        <TweetContext.Provider
          value={{
            tweetContents:"Where in the world am I?",
            displayName:"Carmen Sandiego ✨",
            username:"carmen-sandiego",
            avatarSrc: avatar,
            isRetweetedByCurrentUser: false,
            isLikedByCurrentUser: false,
            date: date,
          }}
        >
          {children}
        </TweetContext.Provider>
    );
  };
  export default TweetProvider;