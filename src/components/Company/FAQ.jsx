import React, { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa6";
import "./FAQ.css";

const FAQ = () => {
  const [openSection, setOpenSection] = useState(null);
  const contentRef = useRef([]);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const faqs = [
    {
      category: "Payment",
      questions: [
        {
          question: (
            <p>
              Payment for the order has been deducted from my account, but no
              order details have been received?
            </p>
          ),
          answer: (
            <div className="Fa-answer">
              <p>
                Your order details may have not been captured with us. The
                amount will be refunded to your account in the next 5-7 days
              </p>
            </div>
          ),
        },
        {
          question: <p>What payment options do you have?</p>,
          answer: (
            <p className="pt-2 pb-2 Fa-answer">
              Keeping in mind the health and safety in these times, we accept
              prepaid orders only to minimize the contact. You can choose to pay
              by the following options:
              <div className="List-container">
                <li className="ans-list">Credit/Debit Card Payment</li>
                <li className="ans-list">Net Banking</li>
                <li className="ans-list">
                  Wallets – PhonePe, Amazon Pay, FreeCharge, Payzapp
                </li>
                <li className="Faq-list">UPI/QR</li>
              </div>
            </p>
          ),
        },
      ],
    },
    {
      category: "Order Related",
      questions: [
        {
          question: <p>'How can I cancel my order?'</p>,
          answer: (
            <div className="Fa-answer">
              <p className=" pb-4">
                You have the option to cancel your order before it is dispatched
                from our warehouse. To cancel the order: <br />{" "}
              </p>
              <b className="bold-text">If you have an account</b>{" "}
              <div className="List-container">
                <li>Login to your account</li>
                <li>Go to manage your order: https://www.cellecor.in/</li>
                <li>Cancel the desired order.</li>
              </div>
              If you don’t have an account, create an account at
              https://www.cellecor.in and follow the steps mentioned above.{" "}
            </div>
          ),
        },
        {
          question: <p>I want to change my delivery address?</p>,
          answer: (
            <div className="Fa-answer">
              {" "}
              <p>Before the order is dispatched: </p>
              <div className="List-container">
                <li>
                  Cancel the order on the website and place the order again with
                  the correct address.
                </li>
                <li>
                  Contact our customer care team to change the delivery address.
                </li>
              </div>
              <p>By Email: info@cellecor.in</p>
              <p>By Phone: 1800 3070 1032</p>
              <p className="pt-4">
                {" "}
                Delivery address cannot be changed once the product has been
                dispatched from our warehouse.
              </p>
            </div>
          ),
        },
        {
          question: <p> I want to change my product color?</p>,
          answer: (
            <div className="Fa-answer">
              {" "}
              <p className="pb-4">
                Before the order is dispatched, cancel the order on the website
                and place the order again with the desired product colour.{" "}
              </p>
              <p>
                *Product Colour cannot be changed once the product has been
                dispatched from our warehouse.
              </p>
            </div>
          ),
        },
        {
          question: <p>I have lost my invoice copy, what should I do?</p>,
          answer: (
            <div className="Fa-answer List-container">
              {" "}
              <li className="">
                Order placed through Amazon/FK/Any other ecommerce marketplace:
                Locate your invoice in the order details of your account on the
                website from where you placed the order for Cellecor products.
              </li>
              <li className="">
                Order placed on the website: Contact Customer Service to help
                you.
              </li>{" "}
            </div>
          ),
        },
      ],
    },
    {
      category: "Shipping",
      questions: [
        {
          question: <p>When can I expect the delivery of my product?</p>,
          answer: (
            <p className="Fa-answer">
              Once you receive the shipping confirmation, your package will be
              delivered within 3-5 business days. We are constantly working to
              get your order delivered as soon as possible.
            </p>
          ),
        },
        {
          question: <p>How do I track my order details?</p>,
          answer: (
            <div className="Fa-answer">
              <p>
                An email and an SMS with the tracking number will be sent once
                the order has been dispatched from our warehouse. You can also
                track your order from your account on the website by clicking
                “Track your Order” at the top right corner. <br /> <br /> If you
                are an existing user you can simply log in to your account and
                track your current and past order details. However, if you
                haven’t made an account and has signed in as a guest user – we
                advise you to create your account with the same guest user mail
                id. *Please note, that it can take some time before the tracking
                information is uploaded.
              </p>
            </div>
          ),
        },
      ],
    },
    {
      category: "Return & Exchanges",
      questions: [
        {
          question: <p>When will I receive my refund?'</p>,
          answer: (
            <p className="Fa-answer">
              Once you receive the shipping confirmation, your package will be
              delivered within 3-5 business days. We are constantly working to
              get your order delivered as soon as possible.
            </p>
          ),
        },
        {
          question: <p>When will I receive my refund?'</p>,
          answer: (
            <div className="Fa-answer">
              <p>
                An email and an SMS with the tracking number will be sent once
                the order has been dispatched from our warehouse. You can also
                track your order from your account on the website by clicking
                “Track your Order” at the top right corner. <br /> <br /> If you
                are an existing user you can simply log in to your account and
                track your current and past order details. However, if you
                haven’t made an account and has signed in as a guest user – we
                advise you to create your account with the same guest user mail
                id. *Please note, that it can take some time before the tracking
                information is uploaded.
              </p>
            </div>
          ),
        },
      ],
    },
    {
      category: "Warranty",
      questions: [
        {
          question: (
            <p>My product has not been picked up for replacement yet?'</p>
          ),
          answer: (
            <p className="Fa-answer">
              Mail your query at info@cellecor.in for all the warranty and
              service-related issues or call Customer Service to help you.
            </p>
          ),
        },
        {
          question: (
            <p>I have not received my product after replacement yet?'</p>
          ),
          answer: (
            <p className="Fa-answer">
              Mail your query at info@cellecor.in for all the warranty and
              service-related issues or call Customer Service to help you.
            </p>
          ),
        },
        {
          question: <p>I want to register a complaint redarding a product?'</p>,
          answer: (
            <p className="Fa-answer">
              Mail your query at info@cellecor.in for all the warranty and
              service-related issues or call Customer Service to help you.
            </p>
          ),
        },
      ],
    },
  ];

  return (
    <>
      <h1 className="FAQ-heading">FAQ</h1>
      <img src="./src/assets/privacy_policy_img.webp" alt="" className="img" />
      <div
        className="faq-container"
        style={{ maxWidth: "87%", margin: "auto" }}
      >
        {faqs.map((section, sectionIndex) => (
          <div key={sectionIndex} className="faq-section">
            <h2 className="p-2">{section.category}</h2>
            {section.questions.map((faq, faqIndex) => (
              <div key={faqIndex} className="faq-item">
                <button
                  className="faq-question shadow-md hover:shadow-md"
                  onClick={() => toggleSection(`${sectionIndex}-${faqIndex}`)}
                >
                  {faq.question}
                  <span style={{ float: "right" }}>
                    {openSection === `${sectionIndex}-${faqIndex}` ? (
                      <FaPlus className="text-gray-500 icons" />
                    ) : (
                      <FaPlus className="text-gray-500 icons" />
                    )}
                  </span>
                </button>
                <div
                  ref={(el) =>
                    (contentRef.current[`${sectionIndex}-${faqIndex}`] = el)
                  }
                  className="faq-answer-wrapper"
                  style={{
                    maxHeight:
                      openSection === `${sectionIndex}-${faqIndex}`
                        ? contentRef.current[`${sectionIndex}-${faqIndex}`]
                            ?.scrollHeight
                        : 0,
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <div className="faq-answer">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;
