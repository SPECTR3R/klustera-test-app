import React from 'react';
import { useLocation } from 'react-router-dom';

import LogoKlustera from '../components/LogoKlustera';
import RoundButton from '../components/RoundButton';
import { IoMdMoon, IoMdSunny, IoMdLogOut } from 'react-icons/io';
import { Flex, useColorMode, Box } from '@chakra-ui/core';

import { useAuth } from '../services/AuthService';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();
  const auth = useAuth();

  return (
    <Flex

      w={['90%', '90%', '80%', '992px']}
      pl="15px"
      height="65px"
      align="center"
      justify="space-between"
      borderBottom="solid 1px"
      borderColor="gray.200"
    >
      <a href="https://klustera.com/" target="blank">
        <LogoKlustera color={colorMode === 'light' ? '#1a202c' : 'white'} />
      </a>
      <Box display="inline">
        {location.pathname === '/mainPage' && (
          <RoundButton tooltip="logout" icoDay={IoMdLogOut} fcn={auth.logout} />
        )}
        <RoundButton
          tooltip="Toggle color"
          icoDay={IoMdMoon}
          icoNigth={IoMdSunny}
          fcn={toggleColorMode}
        />
      </Box>
    </Flex>
  );
};

export default Navbar;
