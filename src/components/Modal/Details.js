import * as React from 'react';
import { ArrowForwardIosSharp, Close } from "@mui/icons-material"
import { AppBar, Dialog, IconButton, ImageList, ImageListItem, Slide, Toolbar, Typography } from "@mui/material";
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
    dispatch(getDataDetails(expanded));
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
        <img width='40%' height='40%' src={img} />&nbsp;&nbsp;&nbsp;&nbsp;<span><h1>{title}</h1></span>
      </div>
      {Object.keys(sections[props.topic]).map(item => (
        <Accordion expanded={expanded === item} onChange={handleChange(item)}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>{sections[props.topic][item]}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ImageList sx={{height: 200}}>
              {get.details.map(it => (
                <ImageListItem key={it.id}>
                  <img />
                </ImageListItem>
              ))}
            </ImageList>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  )
}

export default Details;
