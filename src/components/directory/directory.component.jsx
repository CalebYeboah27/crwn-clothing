import React from 'react'

import MenuItem from '../menu-item/menu-item.component'
import { sections } from './directory.data'

import './directory.styles.scss'

class Directory extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sections,
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((section) => (
          <MenuItem key={section.id} id={section.id} {...section} />
        ))}
      </div>
    )
  }
}

export default Directory
