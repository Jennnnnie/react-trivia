// import React from 'react'

import { Center, Flex, Text, Box } from '@chakra-ui/react';
import { useState } from 'react';

interface CardProps {
  content: string;
  answer: string;
}

const TriviaCards: React.FC<CardProps> = ({ content, answer }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation(); // prevent event propagating to parent
    setFlipped(!flipped);
  };

  return (
    <Center>
      <Flex>
        <Box
          w='200px'
          h='200px'
          bg='gray.200'
          border='1px solid black'
          borderRadius='md'
          boxShadow='md'
          textAlign='center'
          display='flex'
          justifyContent='center'
          alignItems='center'
          onClick={handleClick}
          cursor='pointer'
          transform={flipped ? 'rotateY(180deg)' : ''}
          transition='transform 0.6s'
          position='relative'
        >
          <Box
            position='absolute'
            w='100%'
            h='100%'
            textAlign='center'
            style={{ backfaceVisibility: 'hidden' }}
            // backfaceVisibility='hidden'
          >
            <Box>
              {!flipped ? (
                <>
                  <Text>{content}</Text>
                </>
              ) : (
                <Text style={{ transform: 'rotateY(180deg)' }}>{answer}</Text>
              )}
            </Box>
          </Box>
        </Box>
      </Flex>
    </Center>
  );
};

export default TriviaCards;
