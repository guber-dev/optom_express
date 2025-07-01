export interface Product {
  name: string;
  price: number;
  unit: string;
}

export interface Category {
  category: string;
  items: Product[];
}

export const products: Category[] = [
  {
    category: 'Овощи',
    items: [
      { name: 'Патисон', price: 160, unit: 'шт/кг' },
      { name: 'Перец холопень', price: 180, unit: 'шт/кг' },
      { name: 'Помидор чер марин банка', price: 165, unit: 'банка' },
      { name: 'Лук', price: 35, unit: 'кг' },
      { name: 'Картошка маленькая', price: 35, unit: 'кг' },
      { name: 'Картошка крупная', price: 48, unit: 'кг' },
      { name: 'Болгарский перец', price: 50, unit: 'кг' },
      { name: 'Помидоры местные', price: 35, unit: 'кг' },
      { name: 'Баклажан', price: 25, unit: 'кг' },
      { name: 'Огурцы', price: 28, unit: 'кг' },
      { name: 'Капуста', price: 25, unit: 'кг' },
      { name: 'Брокколи', price: 130, unit: 'кг' },
      { name: 'Чеснок', price: 80, unit: 'кг' },
      { name: 'Морковь чистая', price: 58, unit: 'кг' },
    ],
  },
  {
    category: 'Консервация и соусы',
    items: [
      { name: 'Соус пицца', price: 760, unit: 'шт/л' },
      { name: 'Шампиньоны конс большой', price: 240, unit: 'банка' },
      { name: 'Кукуруза Бандуель оригинал', price: 130, unit: 'банка' },
      { name: 'Горох Бандуель оригинал', price: 130, unit: 'банка' },
      { name: 'Грузди марин', price: 165, unit: 'банка' },
      { name: 'Имбирь маринованные', price: 190, unit: 'кг' },
      { name: 'Корнишон', price: 165, unit: 'банка' },
      { name: 'Маслины', price: 85, unit: 'банка' },
      { name: 'Оливки', price: 95, unit: 'банка' },
      { name: 'Огурцы марин 1л', price: 110, unit: '1л' },
      { name: 'Огурцы марин 3л', price: 245, unit: '3л' },
    ],
  },
  {
    category: 'Бакалея',
    items: [
      { name: 'Горох', price: 60, unit: 'кг' },
      { name: 'Нокот', price: 145, unit: 'кг' },
      { name: 'Гречка', price: 55, unit: 'кг' },
      { name: 'Маш', price: 145, unit: 'кг' },
      { name: 'Рис байдала', price: 90, unit: 'кг' },
      { name: 'Фасоль белый', price: 170, unit: 'кг' },
      { name: 'Чечевица', price: 110, unit: 'кг' },
      { name: 'Лапша гречневая', price: 110, unit: 'кг' },
      { name: 'Удон лапша', price: 120, unit: 'кг' },
      { name: 'Фетучини гранора', price: 320, unit: 'кг' },
      { name: 'Спагетти султан', price: 68, unit: 'кг' },
      { name: 'Фунчеза 500г', price: 95, unit: '500г' },
      { name: 'Фунчеза юнн', price: 165, unit: 'кг' },
    ],
  },
  {
    category: 'Майонез и масла',
    items: [
      { name: 'Мохеев майонез ведёрко', price: 190, unit: 'ведро' },
      { name: 'Масло оливковое 1л', price: 380, unit: '1л' },
      { name: 'Масло печагин', price: 1600, unit: 'шт/л' },
    ],
  },
  {
    category: 'Молочная продукция',
    items: [
      { name: 'Кефир', price: 58, unit: 'шт/л' },
      { name: 'Молоко', price: 58, unit: 'шт/л' },
      { name: 'Каймак', price: 55, unit: 'шт/л' },
      { name: 'Молоко домик дерев 2,5%', price: 120, unit: 'шт/л' },
      { name: 'Молоко домик дерев 3,2%', price: 125, unit: 'шт/л' },
      { name: 'Молоко белая река 2,5%', price: 68, unit: 'шт/л' },
      { name: 'Молоко белая река 3,2%', price: 72, unit: 'шт/л' },
      { name: 'Сливки 33% калих 1л', price: 430, unit: '1л' },
      { name: 'Сметанка', price: 75, unit: 'шт/л' },
    ],
  },
  {
    category: 'Птица',
    items: [
      { name: 'Голень', price: 210, unit: 'кг' },
      { name: 'Окорочка', price: 210, unit: 'кг' },
      { name: 'Грудка', price: 210, unit: 'кг' },
      { name: 'Крыло', price: 260, unit: 'кг' },
      { name: 'Утиные грудка', price: 200, unit: 'кг' },
    ],
  },
  {
    category: 'Фрукты',
    items: [
      { name: 'Лимон', price: 300, unit: 'кг' },
      { name: 'Авокадо', price: 120, unit: 'штук' },
      { name: 'Киви', price: 200, unit: 'кг' },
      { name: 'Сливы', price: 90, unit: 'кг' },
      { name: 'Персик', price: 90, unit: 'кг' },
      { name: 'Виноград', price: 130, unit: 'кг' },
      { name: 'Виноград (другой сорт)', price: 280, unit: 'кг' },
      { name: 'Черри', price: 200, unit: 'кг' },
      { name: 'Яблоко', price: 35, unit: 'кг' },
      { name: 'Бананы', price: 120, unit: 'кг' },
    ],
  },
]; 