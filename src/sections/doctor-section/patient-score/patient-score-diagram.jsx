import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import { patients } from 'src/Data/patients';

import Chart, { useChart } from 'src/components/chart';

import PostSort from './post-sort';

// ----------------------------------------------------------------------

export default function PatientScore({ title, subheader, chart, ...other }) {

  const handleSortChange = (eventTarget) => {
    // Handle the event target in PatientScore
    console.log('Event target in PatientScore:', eventTarget);
  };

  const { labels, colors, series, options } = chart;

  const chartOptions = useChart({
    colors,
    plotOptions: {
      bar: {
        columnWidth: '16%',
      },
    },
    fill: {   
      type: series.map((i) => i.fill),
    },
    labels,
    xaxis: {
      type: 'datetime',
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value) => {
          if (typeof value !== 'undefined') {
            return `${value.toFixed(0)} points`;
          }
          return value;
        },
      },
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} action={
        <Box>
          <PostSort
          options={patients.map((item) => ({
            value: item.name , label: item.name
          }))
          
            /* 
            [
            
            
            { value: 'latest', label: 'Latest Latest' },
            { value: 'popular', label: 'Popular popular' },
            { value: 'oldest', label: 'Oldest oldest' },
            
          ] */
        }
        onSortChange={handleSortChange}
        />
        </Box>
      }/>

      <Box sx={{ p: 3, pb: 1 }}>
        <Chart
          dir="ltr"
          type="line"
          series={series}
          options={chartOptions}
          width="100%"
          height={364}
        />
      </Box>
    </Card>
  );
}

PatientScore.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};
