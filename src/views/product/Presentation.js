import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components'

import UXContext from 'utils/UXContext'

const hover = keyframes`
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  ${(props) => props.theme.mq.small} {
    flex-direction: column-reverse;
  }
`
const Title = styled.h1`
  flex: 1;
  margin: 0 1.5rem 1.5rem 0;
  font-size: 3.25rem;
  line-height: 1.1;

  ${(props) => props.theme.mq.small} {
    font-size: 2.25rem;
    margin: 0 0 1rem 0;
  }
`
const Share = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  margin: 0.5rem 0 0;
  padding: 0;
  background: none;
  border: 3px solid ${(props) => props.theme.colors.ter};
  border-radius: 2rem;
  cursor: pointer;

  &:hover,
  &:focus {
    .outline {
      animation-name: ${hover};
      animation-duration: 400ms;
    }
  }

  ${(props) => props.theme.mq.small} {
    align-self: flex-end;
    width: 2.5rem;
    height: 2.5rem;
    margin: 0;
  }

  svg {
    display: block;
    width: 1.6rem;
    height: auto;

    ${(props) => props.theme.mq.small} {
      width: 1.4rem;
    }
    path {
      fill: ${(props) => props.theme.colors.ter};

      &.outline1 {
        animation-delay: 200ms;
      }
      &.outline2 {
        animation-delay: 400ms;
      }
    }
  }
`

const Subtitle = styled.span`
  display: block;
  font-size: 0.5em;
`
const Text = styled.p`
  margin-bottom: 3rem;
  font-size: 1.25rem;

  ${(props) => props.theme.mq.small} {
    margin-bottom: 2.5rem;
    font-size: 1.125rem;
  }
`
export default function Presentation(props) {
  const { setShareOpen, setTypeShare } = useContext(UXContext)

  return (
    <>
      <Header>
        <Title>
          {props.product['Nom']}
          {props.product['parent'] && (
            <Subtitle>({props.product['parent']})</Subtitle>
          )}
        </Title>
        <Share
          onClick={() => {
            setShareOpen(true)
            setTypeShare('result')
          }}
        >
          <svg height='512pt' viewBox='-21 0 512 512' width='512pt'>
            <path d='m453.332031 85.332031c0 38.292969-31.039062 69.335938-69.332031 69.335938s-69.332031-31.042969-69.332031-69.335938c0-38.289062 31.039062-69.332031 69.332031-69.332031s69.332031 31.042969 69.332031 69.332031zm0 0' />
            <path
              className='outline'
              d='m384 170.667969c-47.0625 0-85.332031-38.273438-85.332031-85.335938 0-47.058593 38.269531-85.332031 85.332031-85.332031s85.332031 38.273438 85.332031 85.332031c0 47.0625-38.269531 85.335938-85.332031 85.335938zm0-138.667969c-29.417969 0-53.332031 23.9375-53.332031 53.332031 0 29.398438 23.914062 53.335938 53.332031 53.335938s53.332031-23.9375 53.332031-53.335938c0-29.394531-23.914062-53.332031-53.332031-53.332031zm0 0'
            />
            <path d='m453.332031 426.667969c0 38.289062-31.039062 69.332031-69.332031 69.332031s-69.332031-31.042969-69.332031-69.332031c0-38.292969 31.039062-69.335938 69.332031-69.335938s69.332031 31.042969 69.332031 69.335938zm0 0' />
            <path
              className='outline outline2'
              d='m384 512c-47.0625 0-85.332031-38.273438-85.332031-85.332031 0-47.0625 38.269531-85.335938 85.332031-85.335938s85.332031 38.273438 85.332031 85.335938c0 47.058593-38.269531 85.332031-85.332031 85.332031zm0-138.667969c-29.417969 0-53.332031 23.9375-53.332031 53.335938 0 29.394531 23.914062 53.332031 53.332031 53.332031s53.332031-23.9375 53.332031-53.332031c0-29.398438-23.914062-53.335938-53.332031-53.335938zm0 0'
            />
            <path d='m154.667969 256c0 38.292969-31.042969 69.332031-69.335938 69.332031-38.289062 0-69.332031-31.039062-69.332031-69.332031s31.042969-69.332031 69.332031-69.332031c38.292969 0 69.335938 31.039062 69.335938 69.332031zm0 0' />
            <path
              className='outline outline1'
              d='m85.332031 341.332031c-47.058593 0-85.332031-38.269531-85.332031-85.332031s38.273438-85.332031 85.332031-85.332031c47.0625 0 85.335938 38.269531 85.335938 85.332031s-38.273438 85.332031-85.335938 85.332031zm0-138.664062c-29.417969 0-53.332031 23.933593-53.332031 53.332031s23.914062 53.332031 53.332031 53.332031c29.421875 0 53.335938-23.933593 53.335938-53.332031s-23.914063-53.332031-53.335938-53.332031zm0 0'
            />
            <path d='m135.703125 245.761719c-7.425781 0-14.636719-3.863281-18.5625-10.773438-5.824219-10.21875-2.238281-23.253906 7.980469-29.101562l197.949218-112.851563c10.21875-5.867187 23.253907-2.28125 29.101563 7.976563 5.824219 10.21875 2.238281 23.253906-7.980469 29.101562l-197.953125 112.851563c-3.328125 1.898437-6.953125 2.796875-10.535156 2.796875zm0 0' />
            <path d='m333.632812 421.761719c-3.585937 0-7.210937-.898438-10.539062-2.796875l-197.953125-112.851563c-10.21875-5.824219-13.800781-18.859375-7.976563-29.101562 5.800782-10.238281 18.855469-13.84375 29.097657-7.976563l197.953125 112.851563c10.21875 5.824219 13.800781 18.859375 7.976562 29.101562-3.945312 6.910157-11.15625 10.773438-18.558594 10.773438zm0 0' />
          </svg>
        </Share>
      </Header>
      <Text
        dangerouslySetInnerHTML={{
          __html: props.product[`Qu'est-ce_que_j'en_fais_?`],
        }}
      />
    </>
  )
}
