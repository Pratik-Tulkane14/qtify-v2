import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box'; 
import { useState } from 'react';
import style from './tabbar.module.css';
import CustomTabPanel from './CustomTabPanel';


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const Tabbar = () => {
   const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={style.tabWrapper}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="All" {...a11yProps(0)}  className={style.tabName}/>
                    <Tab label="Rocks" {...a11yProps(1)} className={style.tabName}/>
                    <Tab label="Pop" {...a11yProps(2)} className={style.tabName}/>
                    <Tab label="Jazz" {...a11yProps(3)} className={style.tabName}/>
                    <Tab label="Blues" {...a11yProps(4)} className={style.tabName}/>
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0} >
                Item Oneaaa
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
        </div>
    )
}

export default Tabbar