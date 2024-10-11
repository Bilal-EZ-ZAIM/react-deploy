import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import products from "../data/produit";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Convertir `id` en entier pour la comparaison
  const productId = parseInt(id, 10);

  // Trouver le produit correspondant
  const data = products.find((pro) => pro.id === productId);

  // Rediriger si le produit n'est pas trouvé
  if (!data) {
    navigate("/404"); // Assurez-vous d'avoir une route /404 pour les erreurs
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="py-8">
          <h1 className="text-3xl font-bold mb-2"> {data?.title} </h1>
          <p className="text-gray-500 text-sm">
            Published on <time datetime="2022-04-05">April 5, 2022</time>
          </p>
        </div>

        <img
          src={data?.image}
          alt="Featured image"
          className="w-full h-auto mb-8"
        />

        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
          <p>{data?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
