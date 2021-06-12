import colors from '@/styles/colors';
import React, { useMemo } from 'react';
import { FiPackage } from "react-icons/fi";
import { RiVipCrownLine } from 'react-icons/ri';
import { IoPhonePortraitOutline, IoWalletOutline } from 'react-icons/io5'

import {
  StyledContainer,
  Chest,
  ChestTitle,
  ListItems,
  Footer,
  ProgressBar,
  Bar,
  Item,
  Content,
  Container,
  Wrapper,
  UserCard,
  InfoUser,
  ContainerRow
} from './styles';

import {
  Grid
} from '@material-ui/core';
import { from } from 'seamless-immutable';

function Home() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

  const ItemInv = useMemo(() => {
    return (
      <Item>
        <Content></Content>
      </Item>
    )
  }, [items])

  return (
    <StyledContainer>
      <Chest>
        <Wrapper>
          <UserCard>
            <InfoUser>
              <h3>Vinícius Assis</h3>
              <h4>#90</h4>

              <InfoUser className="extras right">
                <ul>
                  <li className="phone">
                    <h5><IoPhonePortraitOutline color="white" />123-123</h5>
                  </li>
                  <li className="bank">
                    <h5><IoWalletOutline color="white" />R$100,00</h5>
                  </li>
                  <li className="vip">
                    <h5><RiVipCrownLine color="white" />Nenhum :(</h5>
                  </li>
                </ul>
              </InfoUser>
            </InfoUser>

          </UserCard>
          <Container>
            <ChestTitle>inventário</ChestTitle>
            <ListItems>
              {items.map(item => ItemInv)}
            </ListItems>
          </Container>

          <Footer className="center">
            <Grid container spacing={2}>
              <Grid item>
                <FiPackage color={colors.white} size={22} />
              </Grid>
              <Grid style={{ flex: 1 }} item>
                <Grid container className="center">
                  <Grid item md={6} className="text-left">Capacidade do inventário</Grid>
                  <Grid item md={6} className="text-right">25/90kg</Grid>
                </Grid>
                <ProgressBar>
                  <Bar />
                </ProgressBar>
              </Grid>
            </Grid>
          </Footer>
        </Wrapper>
      </Chest>
    </StyledContainer>
  );
}

export default Home;
