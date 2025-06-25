import { Box, Typography, IconButton, Modal, Checkbox, FormControlLabel, useTheme, useMediaQuery } from '@mui/material';
import { useState, useEffect } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export const VoteModal = ({ open, onClose }: ModalProps) => { 
  const theme = useTheme();

  return (
    <Modal
      open={open}
      onClose={(_, reason) => {
        if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') return;
        onClose();
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: 353, sm: 772 },
          height: { xs: 709, sm: 779 },
          backgroundColor: '#fff',
          borderRadius: '16px',
          textAlign: 'center',
          p: 2,
          boxShadow: '0px 2px 8px 0px #0000001F',
          outline: 'none',
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 20,
            right: 20,
            width: 30,
            height: 30,
            background: theme.palette.grey[200],
          }}
        >
        {/* Close Icon */}
        </IconButton>
        
        <Typography>Modal Skeleton</Typography>
      </Box>
    </Modal>
  )
}