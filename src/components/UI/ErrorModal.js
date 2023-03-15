import React from 'react'
import Button from './Button'
import Card from './Card'
import classes from './ErrorModal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onHandleError} />;
  };
  
const ModalOverlay = (props) => {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onHandleError}>Okay</Button>
        </footer>
      </Card>
    );
  };

export default function ErrorModal(props) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onHandleError={props.onHandleError} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onHandleError={props.onHandleError}
                />,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    )
}
