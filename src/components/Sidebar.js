import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOptions from './SidebarOptions';
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import AppsIcon from '@material-ui/icons/Apps'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase'

function Sidebar() {

    const [channels, loading, error] = useCollection(db.collection('rooms'));
    const [user] = useAuthState(auth)

  return (
    <SidebarContainer>
        <SidebarHeader>
            <SidebarInfo>
                <h2>quicktalk</h2>
                <h3>
                    <FiberManualRecordIcon />
                    {user?.displayName}
                </h3>
            </SidebarInfo>
            <CreateIcon />
        </SidebarHeader>

        <SidebarOptions Icon={InsertCommentIcon} title='threads' />
        <SidebarOptions Icon={InboxIcon} title='mentions & reactions' />
        <SidebarOptions Icon={DraftsIcon} title='saved items' />
        <SidebarOptions Icon={BookmarkBorderIcon} title='channel browser' />
        <SidebarOptions Icon={PeopleAltIcon} title='people & user groups' />
        <SidebarOptions Icon={AppsIcon} title='apps' />
        <SidebarOptions Icon={FileCopyIcon} title='file browser' />
        <SidebarOptions Icon={ExpandLessIcon} title='show less' />
        <hr />
        <SidebarOptions Icon={ExpandMoreIcon} title='channels' />
        <hr />
        <SidebarOptions Icon={AddIcon} addChannelOption title='add channel' />

        {channels?.docs.map((doc) => (
            <SidebarOptions key={doc.id} id={doc.id} title={doc.data().name} />
        ))}

    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
    background: var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    margin-top: 60px;
    max-width: 260px;

    > hr {
        margin: 10px 0;
        border: 1px solid #49274b;
    }
`;

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`;

const SidebarInfo = styled.div`
flex: 1;

> h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
}

> h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
}

> h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
}
`;