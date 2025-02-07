export interface chef{
    
    _id: string;
    name: string;
    _type: "name";
    image?: {
        asset: {
            _ref: string;
            _type: "image";  
        }
    };
    
    description: string;
    slug:{
        _type: "slug";
        current: string;
    };
    position: string;
    experience: string;
    specialty: string;
    available: string;
    imageUrl: string;
}
