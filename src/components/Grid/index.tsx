import './styles.css'
import { Card, CardProps } from '../Card'
import { useRef, useState } from 'react'
import { duplicateRegenerateSortArray } from '../../utils/card-utils'
import { useNavigate } from 'react-router-dom'

export interface GridProps {
  cards: CardProps[]
}

export function Grid({ cards }: GridProps) {
  const navigate = useNavigate()
  const [stateCards, setStateCards] = useState(() => {
    return duplicateRegenerateSortArray(cards)
  })
  const first = useRef<CardProps | null>(null)
  const second = useRef<CardProps | null>(null)
  const unflip = useRef(false)
  const [matches, setMatches] = useState(0)

  const handleClick = (id: string) => {
    const newStateCards = stateCards.map(card => {
      // Se o id do cartão não for o id clicado, não faz nada
      if (card.id !== id) return card
      // Se o cartão já estiver virado, não faz nada
      if (card.flipped) return card

      // Desviro possíveis cartas erradas
      if (unflip.current && first.current && second.current) {
        first.current.flipped = false
        second.current.flipped = false
        first.current = null
        second.current = null
        unflip.current = false
      }

      // Virar o card
      card.flipped = true

      // Configura primeiro e segundo cartão clicados
      if (first.current === null) {
        first.current = card
      } else if (second.current === null) {
        second.current = card
      }

      // Se eu tenho os dois cartão virados
      // Posso checar se estão corretos
      if (first.current && second.current) {
        if (first.current.back === second.current.back) {
          // A pessoa acertou
          first.current = null
          second.current = null
          setMatches(m => m + 1)
        } else {
          // A pessoa errou
          unflip.current = true
        }
      }

      return card
    })

    setStateCards(newStateCards)
  }

  if (matches === 4) {
    console.log('sim')
    navigate('/final')
  }

  return (
    <div className="grid">
      {stateCards.map(card => {
        return <Card {...card} key={card.id} handleClick={handleClick} />
      })}
    </div>
  )
}
