import { categorys } from "../data/categorys";
import { Dispatch, SetStateAction } from 'react';

interface CategoryListProps {
  setSelect: Dispatch<SetStateAction<string>>;
  select: string;
}

const selectedStyle =
  'px-3 py-1 bg-green-100 dark:bg-green-900 border-2 border-gray-700 dark:border-gray-300 rounded-2xl sm:text-lg';
const defaultStyle =
  'px-3 py-1 sm:text-lg border-2 border-gray-700 dark:border-gray-300 rounded-2xl transition-transform duration-300 hover:scale-110';

export default function CategoryList({ setSelect, select }: CategoryListProps) {
  return (
    <div className="flex justify-between flex-wrap gap-4 mt-5">
      {categorys.map((category) => {
        if (select === category.keyword)
          return (
            <button
              type="button"
              onClick={() => setSelect(category.keyword === 'All' ? '' : category.keyword)}
              key={category.keyword}
              className={selectedStyle}
            >
              {category.title}
            </button>
          );
        return (
          <button
            type="button"
            onClick={() => setSelect(category.keyword === 'All' ? '' : category.keyword)}
            key={category.keyword}
            className={defaultStyle}
          >
            {category.title}
          </button>
        );
      })}
    </div>
  );
}
