import React, { useEffect } from 'react'
import * as C from '../../App.styles'
import { useCharacter } from '../../hooks/useCharacter'
import { Character } from '../../components/Character'
import { Title } from '../../components/Title'
import { Voltar } from '../../components/Voltar/Index'

export const Labirinto = () => {
  const char = useCharacter('Bonieky')

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
  }, [])

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft()
        break
      case 'KeyW':
      case 'ArrowUp':
        char.moveUp()
        break
      case 'KeyD':
      case 'ArrowRight':
        char.moveRight()
        break
      case 'KeyS':
      case 'ArrowDown':
        char.moveDown()
        break
    }
  }

  return (
    <C.Container>
      <C.Box>
      <Voltar/>
        <Title name={'Labirinto'} />
        <C.Map>
          <Character x={char.x} y={char.y} side={char.side} />
        </C.Map>
      </C.Box>
    </C.Container>
  )
}
