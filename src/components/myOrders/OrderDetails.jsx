import React, { useState } from "react";

const DetailItem = ({ label, value }) => (
 <p>
  <b>{label}</b>
  {value}
 </p>
);

const OrderDetails = () => {
 const [order, setOrder] = useState({
  shipping: {
    address: "sjda 12-32ss dsad",
  },
  contact: {
    name: "Stuart",
    phone: 2131232123,
  },
  status: {
    orderStatus: "Processing",
    placedAt: "23-02-2002",
    deliveredAt: "23-02-2003",
  },
  payment: {
    paymentMethod: "COD",
    paymentReference: "asdasdsadsad",
    paidAt: "23-02-2003",
  },
  amount: {
    itemsTotal: 2132,
    shippingCharges: 200,
    tax: 232,
    totalAmount: 232 + 200 + 2132,
  },
  orderedItems: [
    { name: "Cheese Burger", quantity: 12, price: 232 },
    { name: "Veg Cheese Burger", quantity: 10, price: 500 },
    { name: "Burger Fries", quantity: 10, price: 1800 },
  ],
 });

 return (
  <section className="orderDetails">
    <main>
      <h1>Order Details</h1>
      <div>
        <h1>Shipping</h1>
        <DetailItem label="Address" value={order.shipping.address} />
      </div>
      <div>
        <h1>Contact</h1>
        <DetailItem label="Name" value={order.contact.name} />
        <DetailItem label="Phone" value={order.contact.phone} />
      </div>
      <div>
        <h1>Status</h1>
        <DetailItem label="Order Status" value={order.status.orderStatus} />
        <DetailItem label="Placed At" value={order.status.placedAt} />
        <DetailItem label="Delivered At" value={order.status.deliveredAt} />
      </div>
      <div>
        <h1>Payment</h1>
        <DetailItem label="Payment Method" value={order.payment.paymentMethod} />
        <DetailItem label="Payment Reference" value={order.payment.paymentReference} />
        <DetailItem label="Paid At" value={order.payment.paidAt} />
      </div>
      <div>
        <h1>Amount</h1>
        <DetailItem label="Items Total" value={order.amount.itemsTotal} />
        <DetailItem label="Shipping Charges" value={order.amount.shippingCharges} />
        <DetailItem label="Tax" value={order.amount.tax} />
        <DetailItem label="Total Amount" value={order.amount.totalAmount} />
      </div>
      <article>
        <h1>Ordered Items</h1>
        {order.orderedItems.map((item, index) => (
          <div key={index}>
            <h4>{item.name}</h4>
            <div>
              <span>{item.quantity}</span> x <span>{item.price}</span>
            </div>
          </div>
        ))}
        <div>
          <h4 style={{ fontWeight: 800 }}>Sub Total</h4>
          <div style={{ fontWeight: 800 }}>₹{order.amount.totalAmount}</div>
        </div>
      </article>
    </main>
  </section>
 );
};

export default OrderDetails;
