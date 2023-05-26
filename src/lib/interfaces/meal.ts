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
export interface IcreateMeal {
    price: number;
    mealName: string;
    preparationTime: number;
    category: string;
    pictures: string[];
    meal_id: string;
    status: boolean;
    // file: [];
  }
  
export interface IcreateMealModal {
    price: number;
    mealName: string;
    preparationTime: number;
    category: string;
    pictures: string[];
    meal_id: string;
    status: boolean;
    // file: [];
  }

  export interface Icategory{
    name: string;
  }
  

  export interface IPicture {
    url: string;
    publicId: string;
  }
  
  export interface IMerchant {
    id: string;
    name: string;

  }
  
  export interface IMeal {
    id: string;
    merchant: IMerchant;
    mealName: string;
    pictures: IPicture[];
    category: string;
    status: boolean;
    price: number;
    preparationTime: number;
    createdAt: string;
  }
  