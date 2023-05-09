import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App =()=>{
    if(!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine
            height="100vh"
            projectID="9a46837b-696e-4f98-8ef9-7061a4f9549d"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        />
    );
}
export default App;