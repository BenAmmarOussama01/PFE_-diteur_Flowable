import PersonIcon from '@mui/icons-material/Person'
import CreateIcon from '@mui/icons-material/Create'

//import '../diagram_editor/bpmn.css'
import { Link } from 'react-router-dom'
import { formatDate } from '../../../config/utils/formatDate'
import ProcessItemImage from './ProcessItemImage'
import { fetchThumbnailImage } from '../../../config/utils/converToImage'
import { useEffect, useState } from 'react'

export interface ProcessProps {
  name: string
  createdBy: string
  lastUpdated: number
  id: string
  xml: string
}

const ProcessItem = ({
  id,
  name,
  createdBy,
  lastUpdated,
  xml,
}: ProcessProps) => {
  const [imageSrc, setImageSrc] = useState('')
  useEffect(() => {
    fetchThumbnailImage(id)
      .then((imageUrl) => {
        setImageSrc(imageUrl)
      })
      .catch((error) => {
        console.error('Error:', error)
      })

    // Cleanup function to revoke the URL when component unmounts
    return () => {
      if (imageSrc) {
        URL.revokeObjectURL(imageSrc)
      }
    }
  }, [])
  return (
    <div className="border-2 h-80 hover:cursor-pointer relative w-80">
      <Link to={`${id}`} state={{ xml }}>
        <div
          style={{
            height: '200px',
            width: '100%',
            background: `url(${imageSrc}) no-repeat center center `,
            border: '1px solid #e8edf1',
          }}
        ></div>
        <div className="bg-slate-100 p-3 hover:pb-10 absolute bottom-0 right-0 left-0 transition duration-300 ease-in-out">
          <div>{name}</div>
          <div className="flex items-center gap-2 mt-3">
            <PersonIcon /> {createdBy}
          </div>
          <div className="flex items-center gap-2 mt-3 ">
            <CreateIcon /> {formatDate(lastUpdated)}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProcessItem
