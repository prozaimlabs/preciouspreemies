import { Category } from '@/types';

const URL = `${process.env.STORE_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const response = await fetch(`${URL}/${id}`);

  return response.json();
};

export default getCategory;
