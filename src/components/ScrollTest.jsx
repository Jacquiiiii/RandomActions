import { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { homeImages } from "../constants/constants"

import Nav from "./Nav"

const ScrollWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 75%;
    color: #5dacbd;
    font-weight: bold;
    font-family: Gill Sans;
  }
`

const RightSide = styled.div`
  width: 50%;
  position: sticky;
  top: 10px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const FirstImage = styled.img`
  position: absolute;
  border-radius: 1em;
  height: 50vh;
  width: auto;
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
`

const SecondImage = styled.img`
  position: absolute;
  border-radius: 1em;
  height: 50vh;
  width: auto;
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'}
`

const ThirdImage = styled.img`
  position: absolute;
  border-radius: 1em;
  height: 50vh;
  width: auto;
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'}
`

// const Spacer = styled.div`
//   height: 100px;
// `

const ScrollTest = () => {
  const [firstImageVisibility, setFirstImageVisibility] = useState(true)
  const [secondImageVisibility, setSecondImageVisibility] = useState(false)
  const [thirdImageVisibility, setThirdImageVisibility] = useState(false)

  const contentOneRef = useRef(null)
  const contentTwoRef = useRef(null)
  const contentThreeRef = useRef(null)

  useEffect(() => {
    setFirstImageVisibility(true)
    let lastScrollTop = 0;

      window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop

        if (scrollTop > lastScrollTop) {
          const currentObserver = new IntersectionObserver((entries) => {
            if (contentOneRef.current.getBoundingClientRect().bottom > 0) {
              setFirstImageVisibility(true)
              setSecondImageVisibility(false)
              setThirdImageVisibility(false)
            } else if (contentTwoRef.current.getBoundingClientRect().bottom > 0) {
              setFirstImageVisibility(false)
              setSecondImageVisibility(true)
              setThirdImageVisibility(false)
            } else if (contentThreeRef.current.getBoundingClientRect().bottom > 0) {
              setFirstImageVisibility(false)
              setSecondImageVisibility(false)
              setThirdImageVisibility(true)
            }
          })

          if (contentOneRef.current) {
            currentObserver.observe(contentOneRef.current)
          }
          if (contentTwoRef.current) {
            currentObserver.observe(contentTwoRef.current)
          }
          if (contentThreeRef.current) {
            currentObserver.observe(contentThreeRef.current)
          }
        } else {
          const currentObserver = new IntersectionObserver((entries) => {
            if (contentOneRef.current.getBoundingClientRect().top > 0) {
              setFirstImageVisibility(true)
              setSecondImageVisibility(false)
              setThirdImageVisibility(false)
            } else if (contentTwoRef.current.getBoundingClientRect().top > 0) {
              setFirstImageVisibility(false)
              setSecondImageVisibility(true)
              setThirdImageVisibility(false)
            } else if (contentThreeRef.current.getBoundingClientRect().top > 0) {
              setFirstImageVisibility(false)
              setSecondImageVisibility(false)
              setThirdImageVisibility(true)
            }
          })

          if (contentOneRef.current) {
            currentObserver.observe(contentOneRef.current)
          }
          if (contentTwoRef.current) {
            currentObserver.observe(contentTwoRef.current)
          }
          if (contentThreeRef.current) {
            currentObserver.observe(contentThreeRef.current)
          }
        }

        lastScrollTop = scrollTop
      })
  }, [])

  return (
    <>
    <Nav />
      <ScrollWrapper>
      <LeftSide>
        <div ref={contentOneRef}>
          <h2>Content One</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div ref={contentTwoRef}>
          <h2>Content Two</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div ref={contentThreeRef}>
          <h2>Content Three</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </LeftSide>
      <RightSide>
        <FirstImage isVisible={firstImageVisibility} alt="random" src={homeImages[0]} />
        <SecondImage isVisible={secondImageVisibility} alt="random" src={homeImages[1]} />
        <ThirdImage isVisible={thirdImageVisibility} alt="random" src={homeImages[2]} />
      </RightSide>
    </ScrollWrapper>
    <div style={{height: '1000px'}}></div>
    </>
  )
}

export default ScrollTest