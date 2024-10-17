import React from 'react'
import * as C from './styles';

type Props = {
    name: string;
}

export const Title = ({name}: Props) => {
    
  return (
    <C.Title>{name}</C.Title>
  )
}
