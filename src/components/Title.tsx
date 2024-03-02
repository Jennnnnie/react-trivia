// import React from 'react'

import { Flex, Center, Text } from '@chakra-ui/react';

const Title = () => {
  return (
    <>
      <Center>
        <Flex m='2rem' direction='column' width='50rem'>
          <Flex justify='center' gap='2rem'>
            <Text
              fontSize='5rem'
              fontWeight='bold'
              border='5px solid #90e0ef'
              p='1rem 5rem 1rem 5rem'
              borderRadius='20px'
              boxShadow='0 0 20px rgba(144, 224, 239, 1)'
            >
              TRIVIA!!
            </Text>
          </Flex>
        </Flex>
      </Center>
    </>
  );
};

export default Title;
