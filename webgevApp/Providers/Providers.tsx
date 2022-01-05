/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import { Compose } from './Compose'

interface Props {
  providers?: React.JSXElementConstructor<React.PropsWithChildren<any>>[]
}

export const Providers: React.FC<Props> = ({ children, providers }) => {
  return <Compose components={providers}>{children}</Compose>
}
