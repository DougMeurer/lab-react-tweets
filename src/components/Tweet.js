import ProfileImage from "./ProfileImage/ProfileImage";
import User from "./User/User";
import Timestamp from "./Timestamp/Timestamp";
import Message from "./Message/Message";
import Actions from "./Actions/Actions";

function Tweet({tweet}) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image}/>
        
      <div className="body">
        <div className="top">
           <User userName ={tweet.user} />
             <Timestamp time={tweet.Timestamp} />
        </div>
       <Message message={tweet.message}/>
       <Actions />
      </div>
    
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
