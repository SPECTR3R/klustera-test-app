import React from 'react';

import { Flex, Text } from '@chakra-ui/core';

const Footer = () => {
  return (
    <>
      <Flex
        m={0}
        w={['90%', '90%', '80%', '992px']}
        h="65px"
        align="center"
        justify="center"
        borderTop="solid 1px"
        borderColor="gray.200"
      >
        <Text>2020 SPECTRER-B</Text>
      </Flex>
    </>
  );
};

export default Footer;
