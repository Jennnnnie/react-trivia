// import { useState } from 'react';

import Title from './components/Title';
import TriviaCards from './components/TriviaCards';
import Score from './components/Score';
import { Box, Flex, Heading, VStack } from '@chakra-ui/react';

import backdrop from './assets/triviabackdrop.jpg';

import './App.css';

const cardData = [
  {
    title: 'History',
    content:
      'Who broke the German enigma code and is hailed as the father of modern computers?',
    answer: 'Alan Turing',
  },
  {
    title: 'History',
    content: 'Which weapons is a long, curved sword with a sharp outer edge?',
    answer: 'Scimitar',
  },
  {
    title: 'History',
    content: 'Which English queen has the same name as a variety of plum?',
    answer: 'Victoria',
  },
  {
    title: 'History',
    content:
      'What did Romans use as a form of sweetner before the widespread use of sugar?',
    answer: 'Sapa (a reduction of grape juice) and honey',
  },
  {
    title: 'History',
    content: 'What was the shortest war in history, lasting only 38 minutes?',
    answer: 'The Anglo-Zanzibar War, on August 27th 1896',
  },
  {
    title: 'Funny',
    content: 'What is the most stolen food in the world?',
    answer: 'Cheese',
  },
  {
    title: 'Funny',
    content: 'What is the only sport to have been played on the moon?',
    answer: 'Golf',
  },
  {
    title: 'Funny',
    content:
      'What is the world record for the largest collection of rubber ducks?',
    answer: '9000',
  },
  {
    title: 'Funny',
    content:
      'What famous leader was once kidnapped by pirate, but instead of fearing for his life, he spent his time with them composing poetry and demanding that they increase his ransom?',
    answer: 'Julius Ceasar',
  },
  {
    title: 'Funny',
    content: 'What do you call a group of musical whales?',
    answer: 'An ocra-stra!',
  },
  {
    title: 'Animals',
    content: 'The age of a lion can be determined by its ________ ',
    answer: 'Nose',
  },
  {
    title: 'Animals',
    content: 'In what kind of tree does a koala spend almost its entire life?',
    answer: 'Eucalyptus',
  },
  {
    title: 'Animals',
    content: 'What animal has the strongest punch?',
    answer: 'Peacock mantis shrimp',
  },
  {
    title: 'Animals',
    content: 'What is the only mammal capable of sustained flight?',
    answer: 'Bats',
  },
  {
    title: 'Animals',
    content: 'What is the larges living species of cat?',
    answer: 'The Siberian Tiger, males exceeding 660lbs in weight',
  },
  {
    title: 'Lord of the Rings',
    content: 'What does Eowyn mean?',
    answer: 'Horse Joy',
  },
  {
    title: 'Lord of the Rings',
    content: 'What type of blade was Frodo stabbed with?',
    answer: 'Morgul Blade',
  },
  {
    title: 'Lord of the Rings',
    content:
      'Who is the first member of the fellowship of the ring to be separated from the group?',
    answer: 'Gandalf',
  },
  {
    title: 'Lord of the Rings',
    content: 'What is the name of the land ruled by Aragorn as king?',
    answer: 'City of Minas Tirith in Gondor',
  },
  {
    title: 'Lord of the Rings',
    content: "What is the name of Gandalf's sword?",
    answer: 'Glamdring, meaning "Foe-hammer" in Sindarin',
  },
  {
    title: ' Friends the TV Show',
    content:
      "Phoebe accidentally cuts Monica's hair in the style of which actor?",
    answer: 'Dudley Moore',
  },
  {
    title: ' Friends the TV Show',
    content: "Who was Joey's imaginary childhood friend?",
    answer: 'Space Cowboy',
  },
  {
    title: ' Friends the TV Show',
    content:
      "What was Chandler's father's gay Las Vegas burlesque show called?",
    answer: 'Viva Las Gaygas',
  },
  {
    title: ' Friends the TV Show',
    content: "What is the name of Ross's second wife?",
    answer: 'Emily Waltham',
  },
  {
    title: ' Friends the TV Show',
    content: 'What is the coffee shop the main characters frequently hang out?',
    answer: 'Central Perk',
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
      <Box
        backgroundImage={backdrop}
        backgroundRepeat='no-repeat'
        backgroundSize='100vw 220vh'
      >
        <Title />
        <Flex>
          {Object.keys(groupedCards).map((title) => (
            <VStack key={title}>
              <Heading
                size='md'
                border='5px solid #90e0ef'
                p='1rem 5rem 1rem 5rem'
                borderRadius='20px'
                boxShadow='0 0 20px rgba(144, 224, 239, 1)'
              >
                {title}
              </Heading>
              {groupedCards[title].map((card, index) => (
                <Box key={index} fontSize='1.5rem'>
                  <TriviaCards content={card.content} answer={card.answer} />
                </Box>
              ))}
            </VStack>
          ))}
        </Flex>
        <Score />
      </Box>
    </>
  );
}

export default App;
