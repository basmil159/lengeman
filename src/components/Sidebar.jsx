import { Svgs } from './Svgs'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../img/blackbox.png'
/**
 * @NavLinks receives two props, title and icon
 * using template literal, we concatenate props.icon with svg's link to retrieve desired icon
 */

const activePage = () => {
  const activePage = window.location
  document.querySelectorAll('a.navigation__nav--elements').forEach((link) => {
    link.classList.remove('active')
    if (link.href === `${activePage}` || `${link.href}` === `${activePage}/`) {
      link.classList.add('active')
      console.log(`${activePage}`)
    }
  })
}

window.onload = () => {
  // Call active page function so that the home page or any active page is displayed as active in navbar
  activePage()
}

const NavLinks = (props) => {
  const title = props.title

  if (title == 'Simulation') {
    return (
      <li className='heading-secondary nav-element'>
        <a
          className='navigation__nav--elements'
          target='_blank'
          href='https://mr-xree.github.io/lmansimseqvier'
          nav-collapse={`${!props.state ? '1' : '0'}`}
        >
          <Svgs icon={props.icon} title={`small-svg ${props.title}`} />
          <span>{props.title}</span>
        </a>
      </li>
    )
  }
  return (
    // {props.state && <span className="navigation__nav--hide-on-tab ">{props.title}</span>}
    <li className='heading-secondary nav-element' onClick={activePage}>
      <Link
        className={`navigation__nav--elements`}
        to={props.NavLinks}
        id={props.id}
        nav-collapse={`${!props.state ? '1' : '0'}`}
      >
        <Svgs icon={props.icon} title={`small-svg ${props.title}`} />
        <span>{props.title}</span>
      </Link>
    </li>
  )
}

export const Sidebar = () => {
  const [openNav, setOpenNav] = useState(false)

  const toggleMenu = () => {
    document.querySelector('.toggle').classList.toggle('active')
    document.getElementById('logo').toggleAttribute('collapse')
    document.querySelectorAll('.logo-hide').forEach((element) => {
      element.toggleAttribute('hide')
    })
    if (openNav) {
      setOpenNav(false)
      document.getElementById('togglemenu').style.transform = 'rotate(180deg)'

      document.getElementById('sidebar').style.width = '8rem'
      document.querySelectorAll('.nav-element').forEach((element) => {
        element.style.justifyContent = 'center'
      })
      document.querySelectorAll('.wrapper__body').forEach((element) => {
        element.style.marginLeft = '11rem'
      })
    } else {
      setOpenNav(true)
      document.getElementById('togglemenu').style.transform = 'rotate(0deg)'

      document.getElementById('sidebar').style.width = '20rem'
      document.querySelectorAll('.nav-element').forEach((element) => {
        element.style.justifyContent = 'left'
        element.style.width = 'calc(100% - 0rem )'
      })

      document.querySelectorAll('.wrapper__body').forEach((element) => {
        element.style.marginLeft = '23rem'
      })
    }
  }

  return (
    <>
      <div class='toggle' onClick={toggleMenu}>
        <svg id='togglemenu' className='small-svg'>
          <use
            xlinkHref={process.env.PUBLIC_URL + `/img/blackbox.svg#menuarrow`}
          ></use>
        </svg>
      </div>
      <section id='sidebar' className='sidebar'>
        <div className='sidebar__top'>
          <div
            className='sidebar__logo-box'
            onClick={() => {
              document.getElementById('jobpage').click()
            }}
            id='logolink'
          >
            <div className='sidebar__logo--blackbox logo-hide' hide='1'>
              <img src={logo} width='28' height='28' alt='BLACKBOX' />
              <span>BlackBOX</span>
            </div>
            <h1
              className='sidebar__logo logo-hide'
              hide='1'
              id='logo'
              collapse='1'
            >
              Lengeman
            </h1>
          </div>

          <div className='sidebar__user logo-hide' hide='1'>
            <div className='sidebar__user--pic'>
              <Svgs icon='userpic' title='big-svg' />
            </div>
            <div className='sidebar__user--name '>
              <span className='sidebar__user--user-name'>Bahadur</span>
              <span className='sidebar__user--user-position'>Admin</span>
            </div>
            {/* <Svgs icon='signout' title='small-svg' /> */}
          </div>
        </div>
        <div className='line'></div>

        <div id='navigation' className='navigation'>
          <ul className='navigation__nav'>
            <NavLinks
              icon='work'
              title='Jobs'
              NavLinks='/lengeman/'
              state={openNav}
              id='jobpage'
            />
            <NavLinks
              icon='tool'
              title='Tool'
              NavLinks='/lengeman/tools'
              state={openNav}
            />
            <NavLinks
              icon='materials'
              title='Boards'
              NavLinks='/lengeman/boards'
              state={openNav}
            />
            <NavLinks
              icon='configure'
              title='Configure'
              NavLinks='/lengeman/configure'
              state={openNav}
            />
            <NavLinks
              icon='log'
              title='Logs'
              NavLinks='/lengeman/Logs'
              state={openNav}
            />
            <NavLinks
              icon='simulation'
              title='Simulation'
              NavLinks='/lengeman/simulation'
              state={openNav}
            />
            {/* <NavLinks icon="setting" title="Site Setting" NavLinks="#" state={openNav}/> */}
          </ul>
        </div>
        <div className='sidebar__bottom logo-hide' hide='1'>
          <Svgs icon='setting' title='small-svg' />
          <span>Setting</span>
        </div>
      </section>
    </>
  )
}
