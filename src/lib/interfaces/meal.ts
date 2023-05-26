// export interface IcreateMeal {
//     price: number;
//     meal_name: string;
//     preparation_time: number;
//     category: string;
//     pictures: string[];
//     // status: boolean;
//     // file: [];
//   }

 export interface ICreateMeal {
    amount: number;
    mealName: string;
    category: string;
    categoryText: string;
    // pictures?: string[];
    pictures?: File;
    preparationTime: number;
  }
  
export interface ICreateMealModal {
  amount: number;
  mealName: string;
  category: string;
  pictures?: File;
  categoryText: string;
  // pictures?: string[];
  preparationTime: number;
  }
  