import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import HeroCardHeader from './HeroCardHeader';

export default function HeroCard(props) {
  const { model, sx, onReload } = props;

  return (
    <Card sx={sx}>
      <HeroCardHeader
        model={model}
        onReload={onReload}
      />

      <CardMedia
        component="img"
        height="250"
        image={model.image}
      />

      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ whiteSpace: 'pre-line' }}
        >
          {model.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
