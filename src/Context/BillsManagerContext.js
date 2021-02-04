import React, { useContext } from 'react'

export const useBillsManagerContext = () => useContext(BillsManagerContext)
const BillsManagerContext = React.createContext({})

export default BillsManagerContext