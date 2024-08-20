import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';

export default function ProductDetail({ route }) {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [productId]);

  if (!product) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Image source={{ uri: product.image }} style={{ width: '100%', height: 300, marginBottom: 20 }} />
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{product.title}</Text>
      <Text style={{ fontSize: 18, marginVertical: 10 }}>{product.price} USD</Text>
      <Text style={{ fontSize: 16 }}>{product.description}</Text>
    </View>
  );
}
