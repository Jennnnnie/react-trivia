// import React from 'react'

import { Flex, Center, Text } from '@chakra-ui/react';

const Title = () => {
  return (
    <>
      <Center>
        <Flex m='2rem' direction='column' width='50rem'>
          <Flex justify='center' gap='2rem'>
            <Text fontSize='2rem' fontWeight='bold'>
              TRIVIA!!
            </Text>
          </Flex>
        </Flex>
      </Center>
    </>
  );
};

export default Title;
