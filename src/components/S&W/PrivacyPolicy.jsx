import React from 'react';
import privacy_Policy from "../../assets/privacy_policy_img.webp";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">

     <div className="m-4">
     <h1 className='text-[1.6rem] font-bold mb-[3rem]'>PRIVACY POLICY</h1>
      <div className="image">
        <img src={privacy_Policy} alt="" />
      </div>
     </div>
      <div className="container mx-auto py-12 px-4">
        <div className="mb-8">
          <p className="text-gray-700 text-[18px]">
          Your privacy is important to us, so Cellecor Gadgets Limited has created the following Privacy Policy 
          to let you know what information we collect when you visit our Site <span className='underline'>https://cellecor.com</span> (“Cellecor”), 
          why we collect it and how we use it. The terms “You,” “Your,” “Yours” and “User” refer to the 
          entity/person/organization using our Site. When this Policy mentions “We”, “Us,” and “Our” it refers to 
          Cellecor Gadgets Public Limited and its subsidiaries and affiliates. This Privacy Policy is governed by 
          our <span className="underline">Terms of Service</span>. For any questions regarding this Policy or any requests regarding the processing of 
          personal data, please contact us at <span className="underline">info@cellecor.com</span>
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. INFORMATION WE COLLECT FROM YOU</h2>
          <p className="text-gray-700 mb-4">
          We collect the information You provide to us and this information is necessary for the adequate performance of the contractual arrangement which is in place between You and us and allow us to comply with our legal obligations.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Account Signup Information. When You create the account, we ask You to provide the signup information, such as Email, Name, Surname, Phone, Username, Password, Personal Number, and Address.</li>
            <li>Communications, Chats, Messaging. When you communicate with us through email or any other way, we collect information about your communication and any information You choose to provide or disclose. In order to answer your request, we may access information provided by email, chats, purchase history, etc.</li>
            <li>Payment Information. To order and use Site features, we may require you to provide certain financial information to facilitate the processing of payments. We collect your Credit or debit card number, Credit or debit card type, Credit or debit card expiration date, Name and surname.</li>
            <li>Login information. We collect Login information if You are logging into our account with Authentication Data.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. INFORMATION WE COLLECT AUTOMATICALLY</h2>
          <p className="text-gray-700 mb-4">
          When you use our Site or contact us directly we may collect information, including your personal information, about the way you act in our Site, the services You use and how You use them. This information is necessary for the adequate performance of the contract between You and us, to enable us to comply with legal obligations and given our legitimate interest in being able to provide and improve the functionalities of the Site.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Tracking technologies and Cookies. We use Cookies, Tags. We also automatically collect information about device’s operating system, .</li>
            <li>Geo-location data. We collect information about your approximate location as determined by data such as your IP address to offer you an improved user experience. Such data may be collected only when you access the Site using your device.</li>
            <li>Usage information. We use a tool called “Google Analytics” to collect information about your interactions with the Site (what pages you visit, such as the pages or content you view, your searches for Listings, bookings you have made, and other actions on the Site. In consequence, Google, Inc. plants a permanent cookie on your web browser to identify you as a unique user the next time you visit this Site). For more information please visit Google.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. THE WAY WE USE YOUR INFORMATION</h2>
          <p className="text-gray-700">
          We process your information adhering to the general data processing principles. We may use the information we collect through our Site for a number of reasons, including to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>to create account</li>
            <li>to identify user</li>
            <li>to stay connected</li>
            <li>to send billing information</li>
            <li>to manage user orders</li>
            <li>to contact user</li>
            <li>to provide support</li>
          </ul>
          <p>We will normally collect personal information from you only where we have your consent to do so, where we need the personal information to perform a contract with you, or where the processing is in our legitimate business interests.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4.DIRECT MARKETING</h2>
          <p className="text-gray-700">
          We may use your provided contact details for direct marketing. These direct marketing offers, depending on your preferences, may be personalized taking into account any other information which you have provided to us (e.g. location, social media profile information, etc.) or we have collected or generated from other sources as described below. If you wish to withdraw the consent for direct marketing, and refuse to receive information from us, you may exercise such option at any time you wish by following the instructions to unsubscribe in the received email.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. COOKIES</h2>
          <p className="text-gray-700">
          Cookies are small text files stored by your browser on your computer when you visit our Site. We use cookies to improve our Site and make it easier to use. Cookies permit us to recognize users and avoid repetitive requests for the same information. Cookies from our Site cannot be read by other Sites. Most browsers will accept cookies unless you change your browser settings to refuse them. Cookies we use on our Site:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
          <li>Strictly necessary cookies – These cookies are required for the operation of our Site. They help us to show you the right information, customize your experience, and allow us to implement and maintain security features as well as to help us detect malicious activities. Without these cookies operation of the Website would be impossible or its functioning may be severely affected.</li>
            <li> Functional cookies – These improve the functional performance of our Website and make it easier for you to use. These cookies remember the settings selected by the Visitors (for example, the settings of language and time zone). With the use of these cookies, the Visitors may avoid the changes of settings during each visit of the Website. These cookies also remember changes made by you in the Website (for example, in case you leave comment on the Website). These cookies do not track your behavior in other websites.</li>
            <li> Performance cookies – These cookies show us if the Visitor has visited our Website before. The analytic cookies allow us to recognize and count the number of users of our website and see how such users navigate through our Website. We also use cookies to understand, improve, and research products, features, and services. For instance, analytical cookies may show us, which websites are visited more frequently, help us to record disfunctionalities of the Website, etc.</li>
            <li> Marketing, targeting, and advertising cookies – These cookies record your visit to our website, the pages you have visited and the links you have followed. We will then use this information to make advertising displayed on it more relevant to your interests. The advertising cookies let us know whether you have already seen the specific advertisement or a certain type of advertisement, and how much time has elapsed since you saw it. We may use the cookies set by another entity so that we could provide the advertisement oriented more specifically to you. They are also used so that we could see the certain advertisements only a certain number of times and that it would help to measure the efficiency of advertising.</li>
          </ul>
          <p>You may find more information about how to delete cookies, as well as the other useful information related to the use of the cookies, on the website http://www.allaboutcookies.org/</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6.SENSITIVE INFORMATION</h2>
          <p className="text-gray-700">
          We do not collect sensitive information such as political opinions, religious or philosophical beliefs, racial or ethnic origin, genetic data, biometric data, health data or data related a sexual orientation. Please do not send, upload, or provide us any sensitive data and contact us using the contact details below if you believe that we might have such information. We have a right to delete any information we believe it might contain sensitive data.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. PAYMENT INFORMATION</h2>
          <p className="text-gray-700">
          To order and use our services we may require you to provide certain financial information to facilitate the processing of payments. We may collect your name, credit or debit card type, expiration date, billing address, the certain digits of your card number and details of your purchase. The exact personal data collected will vary depending on the payment method.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. RETENTION</h2>
          <p className="text-gray-700">
          We retain your personal information to provide services to you and as otherwise necessary to comply with our legal obligation, resolve disputes, and enforce our agreements. We will retain your personal information as long as we need it to provide services to you, unless we are otherwise required by law or regulations to retain your personal information longer.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9.SECURITY</h2>
          <p className="text-gray-700">
          We have implemented security measures designed to protect the personal information you share with us, including physical, electronic and procedural measures. Among other things, we regularly monitor our systems for possible vulnerabilities and attacks. Regardless of the measures and efforts taken by us, the transmission of information via internet, email or text message is not completely secure. We do not guarantee the absolute protection and security of your personal information or any other User Content you upload, publish or otherwise share with us or anyone else. We therefore encourage you to avoid providing us or anyone with any sensitive information of which you believe its disclosure could cause you substantial or irreparable harm. If you have any questions regarding the security of our Site or Services, you are welcome to contact us at info@cellecor.in.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. YOUR RIGHTS</h2>
          <p className="text-gray-700">
          You are entitled to a range of rights regarding the protection of your personal information. Those rights are:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
          <li>The right to access the information we have about you. If you wish to access your personal information that we collect, you can do so at any time by contacting us using the contact details provided below.</li>
          <li>The right to rectify inaccurate information about you. You can correct, update or request deletion of your personal information by contacting us using the contact details provided below.</li>
          <li>The right to object the processing. When we rely on your consent to process your personal information, you may withdraw consent at any time by contacting us using the contact details provided below. This will not affect the lawfulness of processing prior to the withdrawal of your consent.</li>
          <li>The right to lodge a complaint. You can raise questions or complaints to the national Data Protection Agency in your country of residence in the event where your rights may have been infringed. However, we recommend attempting to reach a peaceful resolution of the possible dispute by contacting us first.</li>
          <li>The right to erase any data concerning you. You may demand erasure of data without undue delay for legitimate reasons, e.g. where data is no longer necessary for the purposes it was collected, or where the data has been unlawfully processed.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. APPLICATION OF POLICY</h2>
          <p className="text-gray-700">
          This Policy was created with the help of the TermsHub Privacy Policy Generator and applies only to the services offered by our Company. Our Policy does not apply to services offered by other companies or individuals, including products or sites that may be displayed to you in search results, sites that may include our services or other sites linked from our Site or Services.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">12. AMENDMENTS</h2>
          <p className="text-gray-700">
          Our Policy may change from time to time. We will post any Policy changes on our Site and, if the changes are significant, we may consider providing a more explicit notice (including, for certain services, email notification of Policy changes).
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">13. ACCEPTANCE OF THIS POLICY</h2>
          <p className="text-gray-700">
          We assume that all Users of this Site have carefully read this document and agree to its contents. If someone does not agree with this Policy, they should refrain from using our Site. We reserve the right to change our Policy at any time and inform by using the way as indicated in Section 12. Continued use of this Site implies acceptance of the revised Policy.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">14. FURTHER INFORMATION</h2>
          <p className="text-gray-700">
          If you have any further questions regarding the data we collect, or how we use it, then please feel free to contact us at the details as indicated above.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
