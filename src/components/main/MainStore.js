// import FountainDots from "../common/ui/effect/FountainDots";
// import Typographic from "./partials/ui/Typographic";
// import ParallaxImage from "./partials/ui/ParallaxImage";
// import ProjectProgress from "./partials/ui/ProjectProgress";
// import ProfileCard from "../common/ui/profile-card/ProfileCard";
// import Banner from "./partials/ui/Banner";
// import React from "react";
// import ScrollAnim from "rc-scroll-anim/es";
// import styled from "styled-components";
//
// const ScrollParallax = ScrollAnim.Parallax
// const ScrollElement = ScrollAnim.Element
//
// export const MainComponents = [
//   <FountainDots>
//     <Typographic
//       title={'.Big Idea'}
//       subtitle={'세상을 바꾸는 방법'}
//       subtitleColor={'skyblue'}
//     />
//   </FountainDots>,
//   <ViewPortDivider
//     height={3}
//   />,
//   <ParallaxImage
//     image={'Work-culture.jpg'}
//     type={'dynamicBlur'}
//     min_blur={-10}
//     max_blur={30}
//   >
//     <Typographic
//       title={'결과로 보여드립니다.'}
//       subtitle={'-CK Studio'}
//       titleColor={'#2b2929'}
//       subtitleColor={'#ff4a75'}
//     />
//   </ParallaxImage>,
//   <ViewPortDivider/>,
//   <ScrollParallax
//     animation={{blur: '0px', playScale: [0, 0.5], opacity: 1}}
//     style={{filter: 'blur(20px)', opacity: 0, color: '#ffffff'}}
//     className={'parallax-shape'}
//   >
//     <ProjectProgress/>
//   </ScrollParallax>,
//   <ViewPortDivider/>,
//   <ScrollParallax
//     animation={{x: 0, backgroundColor: '#00ffc6', playScale: [0.3, 0.8], opacity: 1}}
//     style={{transform: 'translateX(-300px)', opacity: 0, filter: 'blur(0px)'}}
//   >
//     <Typographic
//       title={`About CK-Studio`}
//       titleColor={'cornsilk'}
//       article={`
//           '불가능 한 일은 없다'는 모토로 세상에 만연해 있는 불편함들을 해결하는 '해결사'입니다.br
//           _yellow 문제 해결_을 위한 _deepskyblue 근본적인 문제 인식_과 설계, 끊임없는 연구를 통해 어떠한 솔루션보다br
//           완벽한 결과물을 선사해드립니다.
//           `}
//       articleColor={'white'}
//     />
//   </ScrollParallax>,
//   <ViewPortDivider/>,
//   <ProfileCard
//     cardClass={'float'}
//     name={'test'}
//     positionName={'Engineer'}
//     stats={[
//       {name: 'test1', value: 350},
//       {name: 'test1', value: 350},
//       {name: 'test1', value: 350},
//     ]}
//   />,
//   <ParallaxImage
//     image={'work2.jpeg'}
//     strength={500}
//     type={'renderProp'}
//   >
//     <ViewPortDivider/>
//     <Typographic
//       title={'무엇이든 말씀하세요.'}
//       subtitle={'-Developer CK-'}
//       titleColor={'white'}
//       subtitleColor={'#c3873e'}
//     />
//     <ViewPortDivider/>
//   </ParallaxImage>,
//   <ViewPortDivider/>,
//   <Banner/>,
// ]
//
// const ViewPortDivider = styled.div`
//   height: ${props => props.height ? props.height + 'rem' : (height / 7) + 'px'}
//   width: 100%;
// `
// const height = window.innerHeight