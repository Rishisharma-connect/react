import React from 'react';
import { readFile } from 'fs/promises';
import ClientComponent from './test/ClientComponent';

const Home = async (): Promise<JSX.Element> => {
  // Function to read the file
  async function readLocalFile(filePath: string): Promise<string> {
    try {
      const data = await readFile(filePath, 'utf-8');
      return data; // Ensure a string is returned on success
    } catch (error) {
      console.error('Failed to read the file:', error);
      return 'Error loading file content'; // Fallback string on failure
    }
  }

  const filePath = './example.txt'; // Path to the file
  let data: string;

  try {
    data = await readLocalFile(filePath); // This will always return a string
  } catch (error) {
    data = 'Error loading file content' + error; // Ensure fallback string in case of an error
  }

  return (
    <div>
      This is a server component
      <ClientComponent data={data} data1={data + "sadgasjh"} /> {/* Pass 'data' as a string */}
    </div>
  );
};

export default Home;
