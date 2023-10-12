import { ProductList } from "../page";

export  default function Card(props:ProductList){
    return (
        <>
        {props.products.map((item)=>
            <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            {/* CARD */}
            <div
              className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer"
            >
              <img
                src="https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg"
                alt=""
                className="w-full h-36"
              />
              <div className="p-1">
                <h3 className="font-bold text-2xl mb-2">{item.productName}</h3>
                <div className="flex items-start">
                  <div className="flex mb-2">*****</div>
                  <p className="ml-2">{item.productRating}</p>
                </div>
                <div className="flex text-reg font-light capitalize">
                  <p className=" mr-3">Mexican</p>
                  <p className="mr-3">{item.productPrice}</p>
                  <p>Toronto</p>
                </div>
                <p className="text-sm mt-1 font-bold">{item.booked}</p>
              </div>
            </div>
            {/* CARD */}
          </div>
        )}
        </>
    )
}