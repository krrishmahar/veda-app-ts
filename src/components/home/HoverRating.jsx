import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';


function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}`;
}

export default function HoverRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box sx={{ width: 250, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55, color: '#B5BD84' }} fontSize="inherit" />}
      />
      {value !== null && (
        <div className='text-[#B5BD84] font-semibold mx-2'>{value} Rating</div>
      )}
    </Box>
  );
}
