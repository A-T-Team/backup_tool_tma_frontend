import React from 'react';
import {
    BackupReport,
    BackupReportHeader, BackupReportHeaderText, BackupReportText,
    BackupsContainer,
    BackupsItem,
    BackupsList
} from "../styled-components/BuckupsStyles";
import {CloseIcon} from "../styled-components/DeviceWindowStyles";
import {faTimes, faLayerGroup} from "@fortawesome/free-solid-svg-icons";

const Backups = () => {

    return (
        <BackupsContainer>
            <BackupsList>
                <BackupsItem isActive={false}>May 15, 2023 07:40</BackupsItem>
                <BackupsItem isActive={true}>May 16, 2023 07:40</BackupsItem>
                <BackupsItem isActive={false}>May 17, 2023 07:40</BackupsItem>
                <BackupsItem isActive={false}>May 18, 2023 07:40</BackupsItem>
            </BackupsList>
            <BackupReport>
                <BackupReportHeader>
                    <BackupReportHeaderText>May 8, 2023 07:40</BackupReportHeaderText>
                    <CloseIcon icon={faLayerGroup}/>
                </BackupReportHeader>

                <BackupReportText>This type of file provides a human-readable format for storing and manipulating data
                    when developers build software. It was initially designed based on Javascript object notation but
                    has since grown in popularity, so many different languages are compatible with JSON data.
                    The JSON data format is an open standard file (.json) and data format used for data interchange
                    through various forms of technology. The most common use of JSON data and files is to read data from
                    a server for a website or web application to display — and change data given the correct
                    permissions.
                    But, that is not the only thing it is used for. Computer applications, programs, mobile apps, and
                    much more all use JSON files. It is so universal that one might argue it is used virtually
                    everywhere.
                    Since developers use JSON to support software development, some might think JSON files are complex
                    and tedious. But they are relatively simple by comparison to other data management methods.
                    So, let's take a look at some examples of the various data types used in sets of key-value
                    pairs.</BackupReportText>
            </BackupReport>


        </BackupsContainer>
    );
};

export default Backups;