// import React from 'react'

import { Center, Flex, Text, Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const handleClickOutside = () => {
      setFlipped(false);
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <Center>
      <Flex>
        <Box
          w='23rem'
          h='15rem'
          p='1rem'
          backgroundColor={flipped ? '#8e94f2' : '#ff8fab'}
          m='3rem'
          marginRight='50px'
          border='2px solid white'
          borderRadius='30px'
          boxShadow='0 0 20px rgba(255, 255, 255, 1)'
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
