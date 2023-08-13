import React, {ChangeEvent, useState} from 'react';
import {DevicesSearchBar, SearchArea, searchTextStyle, textStyle} from "../styled-components/SearchBarStyles";
import {Device} from "../utils/types";

type PropsType = {
    devices: Device[];
    setFilteredDevices: (devices: Device[]) => void;
}

function SearchBar({ devices, setFilteredDevices }: PropsType) {
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const searchText = e.target.value;
        setInputValue(searchText);
        filterDevices(searchText);
    }

    const filterDevices = (searchText: string) => {
        if (!searchText) {
            setFilteredDevices(devices);
            return;
        }

        if (!isNaN(Number(searchText.charAt(0)))) {
            const filteredDevices = devices.filter(device =>
                device.ip.includes(searchText)
            );
            setFilteredDevices(filteredDevices);
        } else {
            const filteredDevices = devices.filter(device =>
                device.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredDevices(filteredDevices);
        }
    }

    return (
        <SearchArea>
            <DevicesSearchBar
                id="custom-css-outlined-input"
                label="Search Device"
                variant="outlined"
                value={inputValue}
                onChange={handleInputChange}
                InputLabelProps={{
                    sx: {
                        ...textStyle
                    },
                }}
                inputProps={{
                    sx: {
                        ...searchTextStyle
                    },
                }}
                fullWidth={true}
            />
        </SearchArea>
    );
}

export default SearchBar;
