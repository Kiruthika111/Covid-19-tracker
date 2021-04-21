import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './faq.css'
import HelpIcon from '@material-ui/icons/Help';

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>

      <Button className="button" variant="contained"
        color="default" startIcon={<HelpIcon />} onClick={handleClickOpen('body')}>FAQ</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Frequently Asked Questions</DialogTitle>
       
        <DialogContent dividers={scroll === 'paper'}>
            <DialogContentText>
             <div className="question">1. What is Covid-19 ?</div>
             <div className="answer">COVID-19 is a new disease, caused by a novel (or new) coronavirus that has not previously been seen in humans. Because it is a new virus, scientists are learning more each day. Although most people who have COVID-19 have mild symptoms, COVID-19 can also cause severe illness and even death. Some groups, including older adults and people who have certain underlying medical conditions, are at increased risk of severe illness.</div>
        </DialogContentText> 

        <DialogContentText>
             <div className="question">2. How does the virus spread?</div>
             <div className="answer">COVID-19 spreads very easily from person to person. How easily a virus spreads from person to person can vary. The virus that causes COVID-19 appears to spread more efficiently than influenza but not as efficiently as measles, which is among the most contagious viruses known to affect people.</div>
        </DialogContentText>

        <DialogContentText>
             <div className="question">3. What can patients do to protect themselves against contracting this disease?</div>
             <div className="answer">Patients suspected of having the virus should
wear masks, however, in order to prevent transmission. Washing of potentially infected surfaces
with specific anti-viral hospital-grade disinfectants may also limit spread of this virus. Further
information for healthcare professionals is available on the CDC website.</div>
        </DialogContentText>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}