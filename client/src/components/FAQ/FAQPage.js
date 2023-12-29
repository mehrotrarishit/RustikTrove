import React, {useState} from 'react';
import './faq.css'

const FAQPage = () => {
  const  [selected, setSelected]=useState(null)
  const toggle =(i) =>{
  if(selected === i){
    return setSelected(null)
  }
  setSelected(i)
}
  const faqData = [
    {
      question: 'How can I place an order on your website?',
      answer: 'To place an order, browse our website, select the desired items, and add them to your cart. Proceed to checkout, fill in your shipping details, and complete the payment process.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods, including credit/debit cards, and other secure online payment options. You can find the complete list during the checkout process.',
    },
    {
      question: 'Can I modify or cancel my order after it has been placed?',
      answer: 'Unfortunately, once an order is confirmed, it cannot be modified.However it can be cancelled within 24 hours of placing the order. Please double-check your order before completing the purchase.',
    },
    {
      question: 'How can I track the status of my order?',
      answer: 'After your order is dispatched, you will receive a tracking number via email. You can use this number to track the status of your shipment on our website.',
    },
    {
      question: 'What is the estimated delivery time for my order?',
      answer: 'Delivery times vary based on your location and the shipping method chosen during checkout. You can view the estimated delivery time on the checkout page before completing your purchase.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer return and exchange in certain cases. You can check our return and exchange policies for more details ',
    },
    {
      question: 'How do I determine the right size for my clothing?',
      answer: 'Refer to our size chart available on each product page to find the appropriate size. If you have specific questions, our customer support team is here to help.',
    },
    {
      question: 'Are the product colors accurate to what is displayed online?',
      answer: 'While we strive to display accurate colors, variations may occur due to monitor settings. Refer to product descriptions and customer reviews for additional insights.',
    },
  ];

  return (
    <div className="faq_page">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <h3>The Ultimate E-Commerce Guide</h3>
      </div>
      <div className="wrapper">
      <div className="accordion">
        {faqData.map((item, i) => (
          <div className="faq-item" onClick={() => toggle(i)}>
            <div className="faq-title">
              <h2>{item.question}</h2>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={ selected === i ?  "faq-content show" : "faq-content"} >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default FAQPage;