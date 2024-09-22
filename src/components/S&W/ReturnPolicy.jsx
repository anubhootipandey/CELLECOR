import React from 'react';
import return_Policy from "../../assets/return_policy_img.webp";

const ReturnPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">

     <div className="m-4">
     <h1 className='text-[1.6rem] font-bold mb-[3rem]'>RETURN AND SHIPPING POLICY</h1>
      <div className="image">
        <img src={return_Policy} alt="" />
      </div>
     </div>
      <div className="container mx-auto py-12 px-4">
        <div className="mb-8">
          <h1 className="font-bold text-[25px]">
            Order Cancellation Policy
          </h1>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Prepaid Orders: </h2>
          <p className="text-gray-700">
          Once a fully prepaid order is placed, it cannot be cancelled or modified. We encourage you to review your order carefully before completing the purchase.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Partially Paid Orders:</h2>
          <p className="text-gray-700">
          For orders with partial payment, cancellation is possible before the order is shipped. However, please note that the partial payment is non-refundable, as stated on our website and in our Terms and Conditions.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">After Shipment: </h2>
          <p className="text-gray-700">
          Once an order has been dispatched, it is no longer eligible for cancellation. We recommend double-checking your order details to prevent any inconvenience.<br />
          For any questions or assistance, please contact our customer service team. We’re here to help.
          </p>
        </div>

        <div className="mb-8">
          <h1 className="font-bold text-[25px]">
          Product Replacement and Refund/Return Policy
          </h1>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Replacement Conditions:</h2>
          <ul className="list-disc list-inside text-gray-700">
          <li>Software-Damaged Products: Customers can request a replacement within 7 days of delivery. (To be eligible for a replacement, you must share a video of the unboxing process)</li>
          <li>Defective or Damaged Products: If a product is physically damaged, defective, or has hardware/manufacturing issue, the customer must report it within 48 hours of receiving the product for a replacement. (To be eligible for a replacement, you must share a video of the unboxing process)</li>
          <li>Incorrect Delivery: In case of wrong delivery or incorrect delivery location, notify our customer support at 8527578792 or email info@cellecor.com within 48 hours.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Notes:</h2>
          <ul className="list-disc list-inside text-gray-700">
          <li>Cancellation: Orders cannot be canceled once shipped.</li>
          <li>Exchanges: No returns or refunds will be issued. However, replacements are allowed for damaged products within 7 days of delivery.</li>
          <li>Service Center: For issues arising after 7 days of delivery, visit the nearest Cellecor Service Center.</li>
          </ul>
        </div>

        <h3 className='mb-6 font-bold text-gray-700'>We suggest you must make a video of the unboxing process when you receive your product.</h3>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Replacement Process: </h2>
          <ul className="list-disc list-inside text-gray-700">
          <li>Report the Issue: Contact customer support within  7 days of delivery in case of Software damaged issue and within 48 hours in case of Defective or Damaged Products. (To be eligible for a replacement, you must share a video of the unboxing process)</li>
          <li>Provide Evidence: An unboxing video is required for all replacement claims.</li>
          <li>Collect and Replace: The entire product package, including all accessories, will be collected by our courier for replacement.</li>
          <li>Warranty: If a replacement product is unavailable in the desired color or variant, a substitute of equal value will be provided, maintaining the original warranty period.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Non-Replacement Conditions:</h2>
          <ul className="list-disc list-inside text-gray-700">
          <li>Customer Dissatisfaction: No replacements for dissatisfaction with appearance or sound quality if the product is defect-free.</li>
          <li>Late Reporting: Issues not reported within the specified time frame (24 hours for damages, 48 hours for delivery issues).</li>
          <li>User Damage: Damage caused by the user or electrical surges.</li>
          <li>Broken Seal: If the product seal is broken before recording the unboxing video.</li>
          </ul>
        </div>
        
        <p>We strive to provide the best service to our customers and ensure a smooth replacement process for any eligible products.</p>

      </div>
    </div>
  );
};

export default ReturnPolicy;
