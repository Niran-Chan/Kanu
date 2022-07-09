import React from "react";
import { Avatar } from "flowbite-react";

export default function AvatarText() {
    return(
        <Avatar
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded={true}
            >
        <div className="space-y-1 font-medium dark:text-black">
            <div style={{paddingLeft: 10}}>
            Jese Leos
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400" style={{paddingLeft: 10}}>
            Joined in August 2014
            </div>
        </div>
        </Avatar>
    )
}

