import React from 'react';
import styled from 'styled-components';
import FullScreen from './FullScreen';

const ContentWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: auto;
  z-index: 1;
`
const Center = styled.div`
  position: relative;
  max-width: 1000px;
  margin: auto;
  padding: 40px 0;
  height: 100%;
  box-sizing: border-box;
`

const Content = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 20px;
  height: 100%;
`

const Relative = styled.div`
  position: relative;
`

export default ({ children }) => (
  <FullScreen>
    <ContentWrapper>
      <Center>
        <Content>
          <Relative>
          </Relative>
          { children }
        </Content>
      </Center>
    </ContentWrapper>
  </FullScreen>
)
