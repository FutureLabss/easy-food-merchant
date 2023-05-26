 export interface PictureDTO {
    url: string;
    public_id: string;
  }
  
  export interface MerchantDTO {
    _id: string;
    merchant_name: string;

  }
  
  export interface MealDTO {
    _id: string;
    merchant_id: MerchantDTO;
    meal_name: string;
    pictures: PictureDTO[];
    category: string;
    status: boolean;
    price: number;
    preparation_time: number;
    createdAt: string;
    updatedAt: string;
  }
  