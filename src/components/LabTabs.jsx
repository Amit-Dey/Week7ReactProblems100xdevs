import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import Problem1 from './Problem1/Problem1';
import Problem2 from './Problem2/Problem2';
import Problem3 from './Problem3/Problem3';
import Problem4 from './Problem4/Problem4';
import Problem5 from './Problem5/Problem5';
import Problem6 from './Problem6/Problem6';
import Problem7 from './Problem7/Problem7';



function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor='primary'
        >
          <Tab sx={{ color: 'var(--color-primary)' }} label="Problem 1" {...a11yProps(0)} />
          <Tab sx={{ color: 'var(--color-primary)' }} label="Problem 2" {...a11yProps(1)} />
          <Tab sx={{ color: 'var(--color-primary)' }} label="Problem 3" {...a11yProps(2)} />
          <Tab sx={{ color: 'var(--color-primary)' }} label="Problem 4" {...a11yProps(3)} />
          <Tab sx={{ color: 'var(--color-primary)' }} label="Problem 5" {...a11yProps(4)} />
          <Tab sx={{ color: 'var(--color-primary)' }} label="Problem 6" {...a11yProps(5)} />
          <Tab sx={{ color: 'var(--color-primary)' }} label="Problem 7" {...a11yProps(6)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Problem1 />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Problem2 />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Problem3 />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Problem4 />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Problem5 />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <Problem6 />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <Problem7 />
      </CustomTabPanel>
    </Box>
  );
}