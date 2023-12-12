// CategoryPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import KitchenAreaPage from './KitchenAreaPage';
import BarAreaPage from './BarAreaPage';

const CategoryPage = () => {
  const { categoryId } = useParams();

  // Используйте categoryId, чтобы определить, какой компонент отобразить
  const renderCategoryPage = () => {
    if (categoryId === 'kitchen-area') {
      return <KitchenAreaPage />;
    } else if (categoryId === 'bar-area') {
      return <BarAreaPage />;
    }
    // Добавьте другие категории по аналогии
    return null; // Можете также отобразить сообщение об ошибке, если категория не найдена
  };

  return (
    <div>
      {renderCategoryPage()}
    </div>
  );
}

export default CategoryPage;
