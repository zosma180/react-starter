import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function AppLoader({ size, block }) {
  const sizeList = { small: 16, medium: 40, big: 90 };
  const sizeNumber = size in sizeList ? sizeList[size] : sizeList.medium;

  return (
    <Box sx={{ ...styles.root, ...(block && styles.block) }}>
      <CircularProgress
        variant="indeterminate"
        size={sizeNumber}
        thickness={3}
      />
    </Box>
  );
}

const styles = {
  root: {
    display: 'inline-block',
    lineHeight: 'normal',

    block: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '15px',
      width: '100%',
    },
  },
};
