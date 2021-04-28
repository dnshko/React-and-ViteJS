import { useEffect, useState } from "react";

export const Actions = () => {
  let [vs_product, setProduct] = useState([]);


    //userLength is for showing the Data Loading message.
  let [userLength, setUserLength] = useState(null);

  useEffect(() => {
    fetch("http://ashweembroiderysolution.com/api/vs_product.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setProduct(data.vs_product.reverse());
          setUserLength(true);
        } else {
          setUserLength(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return {
    vs_product,
    userLength,
  };
};
