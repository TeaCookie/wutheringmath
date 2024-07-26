"use client";
import React from 'react';
// import Container from '../components/drag-around/Container';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Example from '@/components/drag-around/Example';

const Home: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className='h-full w-full'>
        <Example />
      </div>
    </DndProvider>
  );
};

export default Home;
