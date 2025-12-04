import { useNavigate } from 'react-router-dom';
import { Ticket } from 'lucide-react';
import { tickets } from '../data/tickets';
import TicketCard from '../components/tickets/TicketCard';
import OrderSummary from '../components/tickets/OrderSummary';
import TicketSummary from '../components/tickets/TicketSummary';
import { calculateTotal } from '../utils/ticket';
import { useCart } from '../context/CartContext';
import type { TicketOrder } from '../types/ticket';

export default function Tickets() {
  const navigate = useNavigate();
  const { order, updateOrder } = useCart();

  // calculate total from the order summary (tickets + quantities)
  const computedTotal = tickets.reduce((sum, t) => {
    const qty = Number(order[t.id as keyof Omit<TicketOrder, 'total'>] || 0);
    return sum + (t.price || 0) * qty;
  }, 0);

  const updateQuantity = (type: keyof Omit<TicketOrder, 'total'>, quantity: number) => {
    const newOrder = {
      ...order,
      [type]: quantity,
    };

    updateOrder({
      ...newOrder,
      total: calculateTotal(newOrder),
    });
  };

  const handleCheckout = async () => {
    if (computedTotal === 0) return;
    // Navigate to the checkout page and pass the total amount (from summary)
    navigate('/checkout', { state: { total: computedTotal } });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center mb-8">
          <Ticket className="h-8 w-8 text-red-600 mr-3" />
          <h1 className="text-3xl font-bold">Purchase General Tickets</h1>
        </div>

        <div className="space-y-6">
          {/* Display all tickets */}
          {tickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              quantity={order[ticket.id as keyof Omit<TicketOrder, 'total'>]}
              onUpdateQuantity={(quantity) =>
                updateQuantity(ticket.id as keyof Omit<TicketOrder, 'total'>, quantity)
              }
            />
          ))}

          <div className="mt-8 border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            {/* Show the ticket summary */}
            <TicketSummary order={order} />
          </div>

          {/* Display the total amount at the bottom */}
          <div className="mt-8 text-right">
            <h3 className="text-xl font-bold">Total Amount: ZAR {computedTotal.toFixed(2)}</h3>
          </div>

          {/* Pass the checkout handler to the OrderSummary */}
          <OrderSummary order={order} onCheckout={handleCheckout} />
        </div>
      </div>
    </div>
  );
}
