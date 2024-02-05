import * as React from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import Typography from '@mui/material/Typography';

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0',color:'white'}}
          variant="body2"
          color="text.secondary"
          className='tracking-widest text-xl' data-aos="fade-right" data-aos-duration="2000"
        >
          Education
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color:'white' }}  data-aos="zoom-in" data-aos-duration="2000">
          <Typography variant="h6" component="span" className='text-sm'>
            Bachelor in Computer Science
          </Typography>
          <Typography className='text-sm'>2020 - 2023</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', color:'white'}}
          align="right"
          variant="body2"
          color="text.secondary"
          className="tracking-widest text-xl"  data-aos="zoom-in" data-aos-duration="2000"
        >
          Internship
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color:'white' }} data-aos="fade-right" data-aos-duration="2000">
          <Typography variant="h6" component="span" className='text-sm'>
            Front-End Development
          </Typography>
          <Typography className='text-sm'>11/2023 - 12/2023</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', color:'white'}}
          align="right"
          variant="body2"
          color="text.secondary"
          className="tracking-widest text-xl" data-aos="fade-right" data-aos-duration="2000"
        >
          Certificate
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <CardMembershipIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color:'white' }}  data-aos="zoom-in" data-aos-duration="2000">
          <Typography variant="h6" component="span" className='text-sm'>
            Web Development
          </Typography>
          <Typography className='text-sm'>10/2023 - Present</Typography>
        </TimelineContent>
      </TimelineItem>
      
     
    </Timeline>
  );
}
