import { Box, Card, CardActionArea, CardContent, CardMedia, Modal, Typography } from '@mui/material'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const style = { 
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60vw',
    minWidth: '320px',
    height: '90vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 3,
    overflowY: 'scroll',
    borderRadius: '10px'
};

export default function SpeakersCard({ speaker }) {

    const { name, post, description, img } = speaker
    const [open, setOpen] = React.useState(false);
    const [modalobj, setObj] = React.useState({});
    const handleOpen = (obj) => {
        setObj(obj);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false)
        setObj({});
    };
    console.log(modalobj)

    const color=[
        '#4285f4',
        '#ea4335',
        '#fbbc05',
        '#34a853',
    ]

    return (
        <>
            <div  className=' col-12 col-sm-6 col-md-6 col-lg-4 m-0 my-4 p-0 d-flex justify-content-center'>
                <Card elevation={5} sx={{width: '400px', backgroundColor: color[speaker.sno %4] }}  onClick={() => handleOpen({name, post, description})} >
                    <CardActionArea style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <CardMedia
                            component="img"
                            height="250"
                            width="250"
                            image={img}
                            alt="green iguana"
                            style={{  borderRadius: '100%', width: '250px', textAlign: 'center' }}
                            className='my-3'
                        />
                        <CardContent style={{ height: 'auto' }}>
                            <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: "bold" }}>
                                {name.toUpperCase()}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {post}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="d-flex m-0 mb-2 flex-direction-flex-end" style={{ flexDirection: 'row-reverse', right: '10px' }}>
                        <FontAwesomeIcon icon={faTimes} cursor={'pointer'} onClick={handleClose} />
                    </div>
                    <img alt='' src={img} width={265} height={265}></img>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mt: 2 }}>
                        {modalobj.name}
                    </Typography>
                    <Typography id="modal-modal-description" variant='p' component="h6" color={'#e62b1e'} sx={{ mb: 2 }} >
                        {modalobj.post}
                    </Typography>
                    <Typography id="modal-modal-description" variant='p' sx={{ mt: 2 }}>
                        {modalobj.description}
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}
