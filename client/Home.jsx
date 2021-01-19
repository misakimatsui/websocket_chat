import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import ChatroomPreview from './ChatroomPreview'

export default ({
  chatrooms,
  onEnterChatroom,
  onLeaveBB
}) => (
  <div>
    <RaisedButton
      primary
      icon={
        <FontIcon
          style={{ fontSize: 24 }}
          className="material-icons"
        >
          {'close'}
        </FontIcon>
      }
      onClick={onLeaveBB}
    />
    <div>
      {
        chatrooms.map(chatroom => (
          <ChatroomPreview
            key={chatroom.name}
            chatroom={chatroom}
            onEnter={() => onEnterChatroom(chatroom.name)}
          />
        ))
      }
    </div>
  </div>
)
