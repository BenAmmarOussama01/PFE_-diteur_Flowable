import ProcessItem from './process_item/ProcessItem'
import { arrayOfXmlProcess } from '../../fakeXml'
import React, { useState } from 'react'
interface searchProps {
  arr: Array<any>
}
const [searchQuery, setSearchQuery] = useState('')

const handleSearch = (value: string) => {
  setSearchQuery(value)
}

const ProcessSearchBar = ({ arr }: searchProps) => {
  return (
    <div>
      {arr.length > 0 && <p>There are {arr.length} process models</p>}
      <div className="grid grid-cols-4 gap-4">
        {arr.map((item, index) => (
          <ProcessItem key={item.id} {...item} xml={arrayOfXmlProcess[index]} />
        ))}
      </div>
    </div>
  )
}

export default ProcessSearchBar
