import React from 'react';
import type { TicketType } from '../../types/ticket';

interface TicketCardProps {
  ticket: TicketType;
  quantity: number;
  onUpdateQuantity: (quantity: number) => void;
}

export default function TicketCard({ ticket, quantity, onUpdateQuantity }: TicketCardProps) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div>
        <h3 className="text-lg font-semibold">{ticket.name}</h3>
        <p className="text-gray-600">Age: {ticket.ageRange}</p>
        <p className="text-red-600 font-semibold">R{ticket.price}</p>
      </div>

      <div className="w-24">
        <select
          value={quantity}
          onChange={(e) => onUpdateQuantity(Number(e.target.value))}
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
        >
          {[...Array(11)].map((_, i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
      </div>
    </div>
  );
}