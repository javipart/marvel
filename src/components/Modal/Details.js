import * as React from 'react';
import { ArrowForwardIosSharp } from "@mui/icons-material"
import { Box, Card, Grid, LinearProgress, Tooltip, Typography } from "@mui/material";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { sections } from "../../models/constants";
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { getDataDetails } from '../../actions/topicActions';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharp sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Details = (props) => {
  const dispatch = useDispatch();
  const store = useStore();

  const topic = useSelector((state = store.getState()) => state.topic);
  const { get } = topic;
  const [expanded, setExpanded] = React.useState(Object.keys(sections[props.topic])[0]);

  React.useEffect(() => {
    if (expanded) {
      dispatch(getDataDetails(expanded));
    }
  }, [expanded])

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const title = props.title || props.name;
  const img = props.thumbnail ? `${props.thumbnail.path}.${props.thumbnail.extension}` : null;

  return (
    <>
      <div
        style={{
          display: 'inline-flex',
          verticalAlign: 'text-bottom',
          boxSizing: 'inherit',
          textAlign: 'center',
          alignItems: 'center',
          fontSize: 30,
        }}
      >
        <img width='25%' height='25%' src={img} />&nbsp;&nbsp;&nbsp;&nbsp;<span><h1>{title}</h1></span>
      </div>
      {Object.keys(sections[props.topic]).map(item => (
        <Accordion expanded={expanded === item} onChange={handleChange(item)}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>{sections[props.topic][item]}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{maxHeight: 150, overflowY: 'auto'}}>
            {!get.loading
              ? (
                <Grid
                  container
                  direction='row'
                  justifyContent='flex-start'
                  alignItems='flex-start'
                  spacing={1}
                >
                  {get.details.length ? get.details.map(it => (
                    <Grid item key={it.id}>
                      {it.thumbnail
                        ? (<Tooltip title={it.name || it.title} key={it.id}>
                          <img
                            width='100'
                            height='auto'
                            src={it.thumbnail ? `${it.thumbnail.path}.${it.thumbnail.extension}` : null}
                            alt={it.name || it.title}
                          />
                        </Tooltip>
                        )
                        : (
                          <Card>
                            <Typography>{title}</Typography>
                          </Card>
                        )}
                    </Grid>
                  ))
                    : 'No hay información Disponible'}
                </Grid>
              )
              : (
                <Box sx={{ width: '100%' }}>
                  <LinearProgress />
                </Box>
              )}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  )
}

export default Details;
