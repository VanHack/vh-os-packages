import React from 'react'
import PropTypes from 'prop-types'

// import { ReactComponent as BulletIcon } from '../../../assets/icons/dot.svg'
// import { ReactComponent as FilterIcon } from '../../../assets/icons/icon_filter.svg'
// import { ReactComponent as ArrowLeftIcon } from '../../../assets/icons/ico-arrow-left.svg'
// import { ReactComponent as SortIcon } from '../../../assets/icons/icon_swap-vert.svg'
// import { ReactComponent as SearchIcon } from '../../../assets/icons/mdi_search.svg'

// import svg as component (solve inline import problem outside lib)
import  BulletIcon from '../../Icons/icons/Dot'
import  FilterIcon from '../../Icons/icons/IconFilter'
import  ArrowLeftIcon from '../../Icons/icons/IcoArrowLeft'
import  SortIcon from '../../Icons/icons/IconSwapVert'
import  SearchIcon from '../../Icons/icons/MdiSearch'

import Color from "../../Colors";

let size = {
  w: 18,
  h: 18
}

let defaultColor = "silver"

const VHIcon = props => {

  switch (true) {
    default:
    case props.xs:
      size = {
        w: 18,
        h: 18
      }
      break
    case props.sm:
      size = {
        w: 24,
        h: 24
      }
      break
    case props.md:
      size = {
        w: 36,
        h: 36
      }
      break
    case props.lg:
      size = {
        w: 48,
        h: 48
      }
      break
  }

  switch (true) {
    case props.primary:
      defaultColor = "blue"
      break
    case props.danger:
      defaultColor = "red"
      break
    case props.warning:
      defaultColor = "yellow"
      break
    case props.info:
      defaultColor = "silver"
      break
  }

  if(props.color) {
    defaultColor = Color[props.color];
  }

  switch (props.icon) {
    case "bullet":      
      return <BulletIcon fill={defaultColor}  width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`}/>
    case "sort":      
      return <SortIcon fill={defaultColor}  width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`}/>
    case "filter":      
      return <FilterIcon fill={defaultColor}  width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`}/>
    case "search":      
      return <SearchIcon fill={defaultColor}  width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`}/>
    case "arrow-left":      
      return <ArrowLeftIcon fill={defaultColor}  width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`}/>
    default:
      return <BulletIcon fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`}/>
  }
}

VHIcon.defaultProps = {
  className: '',
}
export const IconPropTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
}

VHIcon.propTypes = IconPropTypes

export default VHIcon
