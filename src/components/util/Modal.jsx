import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { SetOpenFontModal } from '../../features/OpenFontModalSlice';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    boxShadow: 24,
    p: 2,
    borderRadius: 5,

};

export default function MyModal(props) {
    const OpenModal = useSelector((state) => state.OpenFontsModal.isOpen)
    const dispatch = useDispatch();
    return (
        <div>
            <Modal
                keepMounted
                open={OpenModal}
                onClose={() => dispatch(SetOpenFontModal(!OpenModal))}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box
                    className={props.className}
                    sx={style}>
                    {props.children}
                </Box>
            </Modal>
        </div>
    );
}