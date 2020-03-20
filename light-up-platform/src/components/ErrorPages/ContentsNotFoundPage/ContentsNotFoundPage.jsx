import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';


const ContentsNotFoundPage = ({ on, direction, timeout }) => {
    return (
        <div>
            <Slide direction={direction} in={true} timeout={timeout} mountOnEnter unmountOnExit>
                <Typography variant='body1' color="textSecondary"> No content found :(</Typography>
            </Slide>
        </div>
    )
}

export default ContentsNotFoundPage
