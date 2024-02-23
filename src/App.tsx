// import { useState } from 'react';

import Title from './components/Title';
import TriviaCards from './components/TriviaCards';
import Score from './components/Score';
import { Box, Heading, VStack } from '@chakra-ui/react';

const cardData = [
  {
    title: 'General Knowledge',
    content: 'General Knowledge content',
    answer: 'General Knowledge answer',
  },
  { title: 'Funny', content: 'Funny content', answer: 'Funny answer' },
  { title: 'Animals', content: 'Animals content', answer: 'Animals answer' },
  { title: 'Disney', content: 'Disney content', answer: 'Disney answer' },
  { title: 'Friends', content: 'Friends content', answer: 'Friends answer' },
  {
    title: 'Lord of the Ring',
    content: 'Lord of the Ring content',
    answer: 'Lord of the Ring answer',
  },
];

function App() {
  const groupedCards: {
    [title: string]: { title: string; content: string; answer: string }[];
  } = {};
  cardData.forEach((card) => {
    if (!groupedCards[card.title]) {
      groupedCards[card.title] = [];
    }
    groupedCards[card.title].push(card);
  });

  return (
    <>
      <Title />
      <VStack spacing='20px' align='stretch'>
        {Object.keys(groupedCards).map((title) => (
          <VStack key={title} spacing='10px' align='stretch'>
            <Heading size='md'>{title}</Heading>
            {groupedCards[title].map((card, index) => (
              <Box key={index}>
                <TriviaCards content={card.content} answer={card.answer} />
              </Box>
            ))}
          </VStack>
        ))}
      </VStack>
      <Score />
    </>
  );
}

export default App;
