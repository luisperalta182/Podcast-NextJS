import React from 'react'
import HomeBanner from '../homeBanner'
import NavMenu from '../nav'

const Header = ({ trending, menu, header }) => (
    <header className="bg-gradient">
      <div className="container mx-auto ">
        <NavMenu
          menu={menu}
          header={header}
        />
        <HomeBanner
          trending={trending}
          header={header}
        />
      </div>
    </header>
  )

export default Header
