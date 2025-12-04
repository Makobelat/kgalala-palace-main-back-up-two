import React from 'react';
import { format } from 'date-fns';
import type { Invoice } from '../../types/invoice';

interface InvoiceDetailsProps {
  invoice: Invoice;
}

export default function InvoiceDetails({ invoice }: InvoiceDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold">Invoice</h2>
          <p className="text-gray-600">#{invoice.id}</p>
        </div>
        <div className="text-right">
          <p className="font-medium">Date</p>
          <p className="text-gray-600">{format(new Date(invoice.date), 'dd MMM yyyy')}</p>
        </div>
      </div>

      <table className="w-full mb-8">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Item</th>
            <th className="text-right py-2">Quantity</th>
            <th className="text-right py-2">Price</th>
            <th className="text-right py-2">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {invoice.items.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="py-2">{item.name}</td>
              <td className="text-right py-2">{item.quantity}</td>
              <td className="text-right py-2">R{item.price}</td>
              <td className="text-right py-2">R{item.subtotal}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end">
        <div className="w-64">
          <div className="flex justify-between py-2 font-bold">
            <span>Total</span>
            <span>R{invoice.total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}