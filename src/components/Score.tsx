// import React from 'react'
import { useState } from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';

const Score = () => {
  const [score, setScore] = useState(0); //initalize score state to 0

  const incrementSCore = () => {
    setScore(score + 1);
  };

  const decrementScore = () => {
    if (score > 0) {
      setScore(score - 1);
    }
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <Flex flexDir='column' justifyContent='center' alignItems='center'>
      <Text
        fontSize='4rem'
        border='5px solid #90e0ef'
        p='1rem 5rem 1rem 5rem'
        borderRadius='20px'
        boxShadow='0 0 20px rgba(144, 224, 239, 1)'
      >
        Score: {score}
      </Text>
      <Flex gap='1rem'>
        <Button
          w='5rem'
          h='5rem'
          backgroundColor='#788bff'
          boxShadow='0 0 20px rgba(144, 224, 239, 1)'
          color='white'
          cursor='pointer'
          borderRadius='20px'
          onClick={decrementScore}
        >
          –
        </Button>
        <Button
          w='5rem'
          h='5rem'
          backgroundColor='#5465ff'
          boxShadow='0 0 20px rgba(144, 224, 239, 1)'
          color='white'
          cursor='pointer'
          borderRadius='20px'
          onClick={incrementSCore}
        >
          +
        </Button>
      </Flex>

      <Flex>
        <Button
          w='12rem'
          h='5rem'
          m='1rem'
          backgroundColor='#aeb8fe'
          boxShadow='0 0 20px rgba(144, 224, 239, 1)'
          cursor='pointer'
          borderRadius='20px'
          onClick={resetScore}
        >
          Reset
        </Button>
      </Flex>
    </Flex>
  );
};

export default Score;
