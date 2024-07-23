import React from 'react'
import { Deals } from './Deals/Deals'
import { Computers } from './ComputersTablets/Computers'
import { Smartwatches } from './Smartwatches/Smartwatches'

export const HomePage = () => {
  return (
    <>
        <Deals />
        <Computers />
        <Smartwatches />
    </>
  )
}
