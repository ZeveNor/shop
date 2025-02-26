"use client"

import { Card, Button,Link  } from "ui";
import { Skeleton } from "./ui/skeleton";
import React from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  sold?: string;
  imageUrl?: string;
}

const products: Product[] = [
  { 
    id: 1, 
    name: 'Prospect Briefcase', 
    description: 'A stylish and durable briefcase for professionals.',
    price: '$325.00', 
    sold: '4.3k', 
    imageUrl: 'https://blocks.getjustd.com/images/blocks/products/prospect-briefcase-wxa.jpg'
  },
  { 
    id: 2, 
    name: 'Prospect Briefcase', 
    description: 'A stylish and durable briefcase for professionals.',
    price: '$325.00', 
    sold: '4.3k', 
    imageUrl: 'https://blocks.getjustd.com/images/blocks/products/prospect-briefcase-wxa.jpg'
  },
  { 
    id: 3, 
    name: 'Prospect Briefcase', 
    description: 'A stylish and durable briefcase for professionals.',
    price: '$325.00', 
    sold: '4.3k', 
    imageUrl: 'https://blocks.getjustd.com/images/blocks/products/prospect-briefcase-wxa.jpg'
  },
  { 
    id: 4, 
    name: 'Prospect Briefcase', 
    description: 'A stylish and durable briefcase for professionals.',
    price: '$325.00', 
    sold: '4.3k', 
    imageUrl: 'https://placehold.co/400'
  },
  { 
    id: 5, 
    name: 'Prospect Briefcase', 
    description: 'A stylish and durable briefcase for professionals.',
    price: '$325.00', 
    sold: '4.3k', 
    imageUrl: 'https://blocks.getjustd.com/images/blocks/products/prospect-briefcase-wxa.jpg'
  },
  { 
    id: 6, 
    name: 'Prospect Briefcase', 
    description: 'A stylish and durable briefcase for professionals.',
    price: '$325.00', 
    sold: '4.3k', 
    imageUrl: 'https://placehold.co/400'
  },
];

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <Link href="#basic">
    <Card style={{ 
      margin: '10px',
      width: '250px', 
      textAlign: 'left', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
      borderRadius: '8px', 
    }}>
      <div style={{ height: '200px', overflow: 'hidden' }}>
        {product.imageUrl && (
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} 
          />
        )}
      </div>
      <div style={{padding: '15px'}}>
        <h3 style={{ fontSize: '15px', fontWeight: '500', marginBottom: '10px' }}>{product.name}</h3>
        <p style={{ fontSize: '12px', marginBottom: '10px' }}>{product.description}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div>
            <h4 style={{ fontSize: '20px', fontWeight: 'bold' }}>{product.price}</h4>
          </div>
          <div>
            {product.sold && (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ fontSize: '14px', marginRight: '5px' }}>ขายแล้ว:</span>
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{product.sold}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
    </Link>
  );
};

const ProductList = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {loading ? (
        Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} style={{ margin: '10px', width: '250px', height: '350px' }} />
        ))
      ) : (
        products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductList;