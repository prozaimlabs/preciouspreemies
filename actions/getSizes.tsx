import { Size } from '@/types';

const URL = `${process.env.STORE_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const response = await fetch(URL);

  return response.json();
};

export default getSizes;
