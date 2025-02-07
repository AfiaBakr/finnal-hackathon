

export interface Food{
    quantity: number;
    category: string;
    originalPrice: number;
    tags: string[];
    available: string;
    imageUrl: string;
    _id: string;
    name: string;
    _type: "name";
    image?: {
        asset: {
            _ref: string;
            _type: "image";  
        }
    };
    price: number;
    description: string;
    slug:{
        _type: "slug";
        current: string;
    };
};