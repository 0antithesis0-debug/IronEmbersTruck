/**
 * ============================================================
 * IRON & EMBERS FOOD TRUCK — ORDER SYSTEM STUB
 * /js/order-system-stub.js
 *
 * STATUS: PLACEHOLDER — Not yet functional.
 * This file is scaffolding for the online ordering system.
 * The UI section in index.html (#order) currently shows a
 * "Coming Soon" state with an email capture form.
 *
 * ============================================================
 * INTEGRATION PLAN
 * ============================================================
 *
 * OPTION A — Third-party platform (fastest to launch):
 *   → Food Truck Pub (https://foodtruck.pub/)
 *     - Built specifically for food trucks
 *     - Handles ordering + print-to-kitchen natively
 *     - Embed their widget in place of the coming-soon section
 *     - No custom backend needed
 *
 *   → Square Online (https://squareup.com/us/en/online-store)
 *     - Square already handles many food trucks
 *     - Can print orders to Square KDS or Bluetooth receipt printer
 *     - Integrates with Square POS (likely already in use)
 *
 * OPTION B — Custom (more control, more work):
 *   → Stack: Next.js frontend → Node/Express API → Stripe payments
 *   → Order tickets printed via:
 *       · Epson TM-T20III (USB/Ethernet thermal printer, ~$150)
 *       · Star Micronics TSP143 (Ethernet + iOS AirPrint)
 *       · Printing via node-thermal-printer or escpos npm package
 *   → Order data stored in: Supabase / PlanetScale / Firebase
 *
 * ============================================================
 * DATA SCHEMA (when backend is built)
 * ============================================================
 *
 * Order {
 *   id: string (uuid),
 *   createdAt: timestamp,
 *   status: 'pending' | 'confirmed' | 'ready' | 'picked_up',
 *   customer: {
 *     name: string,
 *     phone: string,
 *     email: string (optional)
 *   },
 *   items: [
 *     {
 *       id: string,
 *       name: string,
 *       price: number,
 *       qty: number,
 *       notes: string (e.g. "no onions")
 *     }
 *   ],
 *   subtotal: number,
 *   tax: number,        // KS sales tax: 6.5% state + ~2% local
 *   total: number,
 *   paymentStatus: 'unpaid' | 'paid',
 *   pickupTime: timestamp (optional, if scheduling ahead)
 * }
 *
 * ============================================================
 * PRINT TICKET FORMAT
 * ============================================================
 *
 * When an order is placed, the truck's thermal printer should
 * receive a formatted ticket like:
 *
 *   --------------------------------
 *   IRON & EMBERS #0042
 *   12:34 PM  |  Dine-In / Pick Up
 *   --------------------------------
 *   2x  Claim Jumper          $27.98
 *       no pickles
 *   1x  Loaded Mine Fries      $9.99
 *   1x  Ember Lemonade         $3.99
 *   --------------------------------
 *   SUBTOTAL               $41.96
 *   TAX (8.5%)              $3.57
 *   TOTAL                  $45.53
 *   --------------------------------
 *   CUSTOMER: Jane D. | (620) 555-0000
 *   READY IN: ~15 min
 *   --------------------------------
 *
 * ============================================================
 * NOTIFY EMAIL LIST
 * ============================================================
 *
 * Emails captured from the "Notify Me" form on index.html should
 * POST to a serverless endpoint (Netlify Function / Vercel Function)
 * that writes them to a Mailchimp list or a simple DB table.
 *
 * Endpoint stub: POST /api/notify-signup
 * Body: { email: string }
 * Response: { success: true }
 *
 * When ordering goes live, trigger a one-time campaign to this list.
 *
 * ============================================================
 * NEXT STEPS (priority order)
 * ============================================================
 *
 *  1. Evaluate Food Truck Pub — if it meets needs, use it. Fast.
 *  2. If custom: set up Netlify backend + Stripe + Supabase
 *  3. Source thermal printer + test node-thermal-printer locally
 *  4. Build order management view (tablet-based KDS for the truck)
 *  5. Replace #order section in index.html with live ordering widget
 *  6. Migrate notify emails to launch campaign
 *
 * ============================================================
 */

// Stub: Notify signup (replace with real fetch() call when backend exists)
// Called from index.html handleNotifySignup()
window.ORDER_SYSTEM = {
  version: '0.1.0-stub',
  status: 'pre-launch',

  // TODO: Replace with real API endpoint
  notifySignupEndpoint: '/api/notify-signup',

  // Simulated submit (for development only)
  submitNotifyEmail: async function(email) {
    console.log('[OrderSystem STUB] Would submit email:', email);
    // When ready:
    // const res = await fetch(this.notifySignupEndpoint, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email })
    // });
    // return res.json();
    return { success: true, message: 'Stub: email captured (not actually sent)' };
  }
};

console.log('[Iron & Embers] Order system stub loaded. Status:', window.ORDER_SYSTEM.status);
