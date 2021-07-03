import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import {fetchProduct} from '../../../../api/api';

const Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [error, setError] = useState("");
  
    useEffect(() => {
        fetchProduct(id)
        .catch((err) => console.log(err))
        .then((response) => {
          console.log(response);
          if (!response || response.data.error) setError(response.data.error);
          setProduct(response.data);
        });
    }, [id]);
    
    return (
        <>
        {error && <div>{error}</div>}
        <div>{product.title}</div>
      </>
    );
};


export default Product;