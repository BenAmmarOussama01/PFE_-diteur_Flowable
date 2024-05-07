//import { useState } from "react";
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import axios from 'axios'
import { APP_BASE_URL } from '../../config/app.constant'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pb: 4,

  outline: 'none',
}

interface NewProcessModalProps {
  open: boolean
  handleClose: () => void
  //setArr?: (process: any) => void
}

const NewProcessModal = ({ open, handleClose }: NewProcessModalProps) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [key, setKey] = useState('')

  const handleCreateProcess = () => {
    /*axios
      .post(`${APP_BASE_URL}configuration/modeler/rest/models`, {
        name,
        key,
        description,
        modelType: 0,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))*/
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="w-full bg-slate-100 py-5 mb-6">
          <p className="text-2xl ml-10">Create a new Process model</p>
        </div>
        <form action="" className="mx-10">
          <div>
            <label className="text-xl">Model name*</label>
            <TextField
              variant="outlined"
              className="w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mt-5">
            <label className="text-xl">Key*</label>
            <TextField
              variant="outlined"
              className="w-full"
              value={key}
              onChange={(e) => setKey(e.target.value)}
            />
          </div>

          <div className="mt-5">
            <label className="text-xl">Description</label>
            <TextField
              variant="outlined"
              className="w-full"
              multiline
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mt-10 flex gap-4 float-end">
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleCreateProcess}>
              Save
            </Button>
          </div>
        </form>
        <CloseIcon
          color="disabled"
          sx={{ fontSize: 30 }}
          className="absolute top-6 right-3 hover:cursor-pointer"
          onClick={handleClose}
        />
      </Box>
    </Modal>
  )
}

export default NewProcessModal
