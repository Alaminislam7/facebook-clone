import React from 'react'
import SidebarRow from '../SidebarRow/SidebarRow'
import EmojiFlags from '@material-ui/icons/EmojiFlags'
import LocalHospital from '@material-ui/icons/LocalHospital'
import People from '@material-ui/icons/People'
import Chat from '@material-ui/icons/Chat'
import Storefront from '@material-ui/icons/Storefront'
import VideoLibrary from '@material-ui/icons/VideoLibrary'
import { ExpandMoreOutlined } from '@material-ui/icons'
import { useStateValue } from '../stateProvider';


function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className='sidebar'>
            <SidebarRow 
                title={user.displayName}
                src={user.photoURL}
            />
            <SidebarRow 
                title='COVID-19 Information Center'
                Icon={LocalHospital}
            />
            <SidebarRow title='Pages' Icon={EmojiFlags}/>
            <SidebarRow title='Friends' Icon={People}/>
            <SidebarRow title='Messenger' Icon={Chat}/>
            <SidebarRow title='Marketplace' Icon={Storefront}/>
            <SidebarRow title='Videos' Icon={VideoLibrary}/>
            <SidebarRow title='Marketplace' Icon={ExpandMoreOutlined}/>
        </div>
    )
}

export default Sidebar
