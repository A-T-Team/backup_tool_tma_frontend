import React, {useState} from 'react';
import {
    CustomTimePicker,
    InputBlock,
    InputLabel,
    SettingsContainer,
    SettingsGenContainer,
    SettingsInput,
    SettingsSchedule,
    SettingsTitle,
    TimePickerBlock,
    WeekPicker,
    WeekPickerList
} from "../styled-components/SettingsStyles";
import dayjs from 'dayjs';
import Button from "@mui/material/Button";
import {Chip} from "@mui/material";


const Settings = () => {
    const format = 'HH:mm';
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const [checkedDay, setCheckedDay] = useState("Tuesday");
    const [deviceName, setDeviseName] = useState("CISCO_ZBD_123466");
    const [description, setDescription] = useState("My personal device")

    return (
        <SettingsContainer>
            <SettingsGenContainer>
                <SettingsTitle>General</SettingsTitle>
                <InputBlock>
                    <InputLabel>Device Name</InputLabel>
                    <SettingsInput
                        defaultValue={deviceName}
                        size="small"
                        fullWidth
                        onChange={(e) => setDeviseName(e.target.value)}
                    />
                </InputBlock>
                <InputBlock>
                    <InputLabel>Description (option)</InputLabel>
                    <SettingsInput
                        defaultValue={description}
                        size="small"
                        fullWidth
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </InputBlock>
                <Button
                    variant="contained"
                    style={{
                        marginTop: '13px',
                        padding: '10px 16px',
                        backgroundColor: '#276BD2',
                    }}
                >Save Changes</Button>
            </SettingsGenContainer>
            <SettingsSchedule>
                <SettingsTitle>Schedule Backup</SettingsTitle>
                <WeekPicker>
                    <InputLabel>Backup occurs every</InputLabel>
                    <WeekPickerList>
                        {week.map((day) => (
                            <Chip
                                key={day}
                                label={day}
                                style={{
                                    marginRight: '8px',
                                    marginBottom: '22px',
                                    fontFamily: 'Inter, sans-serif',
                                    backgroundColor: checkedDay === day ? '#276BD2' : '#3d465b',
                                    color: checkedDay === day ? 'white' : '#D7E1EC',
                                }}
                                onClick={(e) => setCheckedDay(day)}
                            />
                        ))}
                    </WeekPickerList>
                </WeekPicker>
                <TimePickerBlock>
                    <InputLabel>Select time</InputLabel>
                    <CustomTimePicker defaultValue={dayjs('12:08', format)} format={format}/>
                </TimePickerBlock>
                <Button
                    variant="contained"
                    style={{
                        marginTop: '28px',
                        padding: '10px 16px',
                        backgroundColor: '#276BD2',
                    }}
                >Create Backup Now</Button>
            </SettingsSchedule>
        </SettingsContainer>
    );
};

export default Settings;
