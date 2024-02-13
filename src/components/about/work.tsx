import React from 'react'
import { Timeline, TimelineItem, Text, Center, Divider, Stack } from '@mantine/core';
import { grabImage } from '@/lib/sanity-client';


type MyComponentProps = {
    workExperiences: { position: string; company: string, startDate: string, endDate: string, description: string, logo: object }[]; // Example object type: key (string) and value (number)
  };


  function formatDate(dateString: string): string {
    const dateParts: string[] = dateString.split('-');
    const year: number = parseInt(dateParts[0]);
    const month: number = parseInt(dateParts[1]) - 1;
    const day: number = parseInt(dateParts[2]);
  
    // Create a Date object using the extracted parts
    const date: Date = new Date(year, month, day);
  
    const formattedMonth: string = date.toLocaleString('default', { month: 'long' });
    const formattedYear: number = date.getFullYear();
  
    // Construct the readable date string
    const readableDate: string = `${formattedMonth}, ${formattedYear}`;
  
    return readableDate;
  }

const Work: React.FC<MyComponentProps> = ({workExperiences}) => {
    workExperiences.sort((a, b) => {
        const dateA = new Date(a.startDate);
        const dateB = new Date(b.startDate);
        if (dateA > dateB) {
          return -1;
        }
        if (dateA < dateB) {
          return 1;
        }
        return 0;
      });
    return (
        <div >
            <Center>
                <Stack>
                    <Timeline ml={100} active={workExperiences.length * 2 -1} bulletSize={10} color='indigo'>
                        {
                            workExperiences.map((workExperience, key) => (
                                < >
                                    <TimelineItem key={key} title={workExperience.company} mb={20}
                                    bullet={
                                        <img src={grabImage(workExperience.logo)}  height={50} style={{marginRight: 150, marginTop: 50}} alt={workExperience.company} />
                                    }
                                    >
                                        <Text c="dimmed" size="sm">{workExperience.position}</Text>
                                        <Text size="xs" mt={4}>{formatDate(workExperience.startDate)} - {formatDate(workExperience.endDate)}</Text>
                                    </TimelineItem>
                                    {
                                    key < workExperiences.length - 1 &&
                                    <>
                                    <TimelineItem>
                                        <Divider />
                                    </TimelineItem>
                                    </>
                                    }
                                </>
                            ))
                        }
                    </Timeline>
                </Stack>
            </Center>
        </div>
    )
}

export default Work;