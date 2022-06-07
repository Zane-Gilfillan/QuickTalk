import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { db } from '../firebase'
import firebase from 'firebase/compat/app'

function ChatInput({channelName, channelId, chatRef}) {

    const [input, setInput] = useState('');

    const sendMessage = e => {
        e.preventDefault();

        if (!channelId) {
            return false;
        }

        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'zane found',
            userImage: 'https://w7.pngwing.com/pngs/465/803/png-transparent-princess-peach-super-mario-bros-princess-peach-princess-daisy-peach-super-mario-bros-video-game-cartoon-thumbnail.png'
        });

        chatRef.current.scrollIntoView({ behavior: 'smooth'});

        setInput('');
    };

  return (
    <ChatInputContainer>
        <form>
            <input value={input}
            onChange={e => setInput(e.target.value)}
             placeholder={`message #${channelName}`}
            />
            <Button hidden type='submit' onClick={sendMessage}>
                send
            </Button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form >input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`;