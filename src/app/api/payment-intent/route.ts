import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount, currency = 'pkr', paymentMethod } = body;

    if (!amount || amount < 100) {
      return NextResponse.json(
        { error: 'Invalid amount. Minimum is 100 PKR' },
        { status: 400 }
      );
    }

    // For non-card payment methods (bank_transfer, easypaisa, jazzcash, cod),
    // return a mock response since these are handled manually in Pakistan
    if (paymentMethod && paymentMethod !== 'card') {
      return NextResponse.json({
        clientSecret: `manual_${paymentMethod}_${Date.now()}`,
        paymentIntentId: `pi_manual_${Date.now()}`,
        manualPayment: true,
      });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: currency.toLowerCase(),
      payment_method_types: ['card'],
      metadata: {
        payment_method: paymentMethod || 'card',
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    console.error('Payment intent creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    );
  }
}
