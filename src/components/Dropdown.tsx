import React from "react";
import { Dropdown } from "flowbite-react";

export default function Dropdownbar() {
    return(
        <Dropdown label="Dropdown button">
            <Dropdown.Item>
                Dashboard
            </Dropdown.Item>
            <Dropdown.Item>
                Settings
            </Dropdown.Item>
            <Dropdown.Item>
                Earnings
            </Dropdown.Item>
            <Dropdown.Item>
                Sign out
            </Dropdown.Item>
        </Dropdown>
    )
}

