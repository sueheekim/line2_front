import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import { useSelector } from 'react-redux';
import { selectUser } from '../../_reducers';
// import ChatFeed from './ChatFeed';

export function Chat() {
    const user = useSelector(selectUser);
    console.log(user)
	return (
		<ChatEngine
			height='100vh'
			userName={user.loginName}
			userSecret={user.password}
			projectID='213c154d-5012-4074-8e41-70624aa20dc7'
            // renderChatFeed ={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
		/>
	);
}