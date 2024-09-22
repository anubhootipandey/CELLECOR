import React from 'react';
import Management01 from '../../assets/management01.png';

const Management = () => {
  return (
    <div className="w-11/12 m-auto">
      <div>
        <h1 className="font-bold text-2xl mb-6">Management</h1>
      </div>
      <div>
        <img src={Management01} alt="Management Banner" className="mb-6" />
      </div>
      <div className="mx-[6rem] text-xl mb-4">
        <h1>COMPOSITION OF BOARD AND ITS COMMITTEES</h1>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-700 border-collapse">
          {/* Board of Directors */}
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="py-2 px-4">S.No.</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Category</th>
              <th className="py-2 px-4">Designation</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-4">1</td>
              <td className="py-2 px-4">Name 1</td>
              <td className="py-2 px-4">Non-Executive Director</td>
              <td className="py-2 px-4">Managing Director</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4">2</td>
              <td className="py-2 px-4">Name 2</td>
              <td className="py-2 px-4">Independent Director</td>
              <td className="py-2 px-4">Member</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>

        {/* More sections like Audit Committee, Nomination & Remuneration Committee, etc. */}
        <div className="mt-8">
          <h2 className="font-bold text-lg mb-4">Audit Committee</h2>
          <table className="w-full text-left text-sm text-gray-700 border-collapse">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="py-2 px-4">S.No.</th>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Category</th>
                <th className="py-2 px-4">Designation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">1</td>
                <td className="py-2 px-4">Name 1</td>
                <td className="py-2 px-4">Non-Executive Director</td>
                <td className="py-2 px-4">Chairperson</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">2</td>
                <td className="py-2 px-4">Name 2</td>
                <td className="py-2 px-4">Independent Director</td>
                <td className="py-2 px-4">Member</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Management;
