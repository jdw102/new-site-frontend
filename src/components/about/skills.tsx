import React from 'react'
import { Center, Title, Group, Stack, Badge, Divider } from '@mantine/core';

const colorNames = ["red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"];

const Skills = ({skills} : {
    skills: {name: string, type: string}[]
}) => {

    interface GroupedData {
        [type: string]: string[];
    }
    
    const groupedData: GroupedData = skills.reduce((acc: GroupedData, obj: {name: string, type: string}) => {
        if (!acc[obj.type]) {
            acc[obj.type] = [];
        }
        acc[obj.type].push(obj.name);
        return acc;
    }, {});
    // Convert groupedData to an array of [type, names[]] pairs
    const groupedArray: [string, string[]][] = Object.entries(groupedData);

    // Sort groupedArray based on the length of the names array in each pair
    groupedArray.sort((a, b) => b[1].length - a[1].length);

    return (
        <div>
            <Center>
                <Stack>
                {
                    groupedArray && groupedArray.map((vals, key1) => (
                        <>
                            <div>
                                <Title order={4} m={8}>
                                    {vals[0]}
                                </Title>
                                <Group>
                                {
                                    vals[1].map((skill, key2) => (
                                        <Badge c={colorNames[key1]} key={key2} color="indigo" variant="light">
                                            {skill}
                                        </Badge>
                                    ))
                                }
                                </Group>
                            </div>
                            <Divider />
                        </>
                    ))
                }
                </Stack>
            </Center>
        </div>
    )
}

export default Skills