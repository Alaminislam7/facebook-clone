import React from 'react'
import SidebarRow from '../SidebarRow/SidebarRow'
import EmojiFlags from '@material-ui/icons/EmojiFlags'
import LocalHospital from '@material-ui/icons/LocalHospital'
import People from '@material-ui/icons/People'
import Chat from '@material-ui/icons/Chat'
import Storefront from '@material-ui/icons/Storefront'
import VideoLibrary from '@material-ui/icons/VideoLibrary'
import { ExpandMoreOutlined } from '@material-ui/icons'


function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow 
                title='Alamin'
                src='https://images.unsplash.com/photo-1592009309602-1dde752490ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
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
