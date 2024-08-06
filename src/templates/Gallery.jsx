import React,{useState} from 'react'
import LoginModal from './LoginModel';

function Gallery(handleClick) {

  const [quantity, setQuantity] = useState(1);
  const [coffees, setCoffees] = useState([
    {
      id: 1,
      name: "MILK COFFEE",
      image: "images/cf8.jpeg",
      quantity: 0
    },
    {
      id: 2,
      name: "BLACK COFFEE",
      image: "images/cf7.webp",
      quantity: 0
    },
    {
      id: 3,
      name: "IRISH COFFEE",
      image: "images/cf1.jpeg",
      quantity: 0
    },
    {
      id: 4,
      name: "TOFFEE NUT",
      image: "images/cf2.jpg",
      quantity: 0
    },
    {
      id: 5,
      name: "VANILLA",
      image: "images/cf3.jpg",
      quantity: 0
    },
    {
      id: 6,
      name: "DOUBLE CHOC MOCHA",
      image: "images/cf4.jpg",
      quantity: 0
    },
    {
      id: 7,
      name: "CAPPUCCINO",
      image: "images/cf5.jpeg",
      quantity: 0
    },
    {
      id: 8,
      name: "CAPPUCCINO UNSWEETENED",
      image: "images/cf6.jpg",
      quantity: 0
    },
    {
      id: 9,
      name: "HAZELNUT COFFEE",
      image: "images/cf9.jpg",
      quantity: 0
    },
    // Add more coffee objects as needed
  ]);

  const increaseQuantity = (id) => {
    const updatedCoffees = coffees.map(coffee => {
      if (coffee.id === id) {
        return {
          ...coffee,
          quantity: coffee.quantity + 1
        };
      }
      return coffee;
    });
    setCoffees(updatedCoffees);
  };
  

const decreaseQuantity = (id) => {
  const updatedCoffees = coffees.map(coffee => {
    if (coffee.id === id && coffee.quantity > 0) {
      return {
        ...coffee,
        quantity: coffee.quantity - 1
      };
    }
    return coffee;
  });
  setCoffees(updatedCoffees);
};


  
    return (
      <div className="gallery_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="gallery_taital">Order Our Coffee</h1>
              <p className="gallery_text">In our gallery we serve best quality of coffees. The taste of coffee can range from a dark, bitter yet rich and aromatic flavor to a light, mellow taste with a creamy tone. Coffee can be either a shot of energy or a warm hug depending on the situation, which is why so many people love it. </p>
            </div>
          </div>
          <div className="">
          <div className="gallery_container">
  <div className="gallery_section_2">
    <div className="row">
      
      {coffees.map((coffee) => (
        <div className="col-md-4" key={coffee.id}>
          <div className="container_main">
            <img src={coffee.image} alt="Gallery Image" className="image" />
            <div className="overlay">
              <div className="text" onClick={()=>{}}></div>
            </div>
            <button onClick={handleClick(coffee.name)}>Add to cart</button>
          </div>
          <div>
            
            <div className="quantity-button" onClick={() => decreaseQuantity(coffee.id)}>-</div>
            
            <input type="text" value={coffee.quantity} readOnly />
            
            <div className="quantity-button" onClick={() => increaseQuantity(coffee.id)}>+</div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
</div>

           
          </div>
          <div className="seemore_bt"><a href="#">See More</a></div>
        </div>
      </div>
    );
  }
  
  export  default Gallery;
  