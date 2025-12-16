'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

type PaymentMethodType = 'card' | 'easypaisa' | 'jazzcash' | 'bank_transfer';

interface PaymentMethod {
  id: PaymentMethodType;
  name: string;
  icon: string;
  description: string;
  available: boolean;
}

const paymentMethods: PaymentMethod[] = [
  {
    id: 'card',
    name: 'Credit/Debit Card',
    icon: '💳',
    description: 'Visa, Mastercard, UnionPay',
    available: true,
  },
  {
    id: 'easypaisa',
    name: 'EasyPaisa',
    icon: '📱',
    description: 'Pay via EasyPaisa mobile wallet',
    available: true,
  },
  {
    id: 'jazzcash',
    name: 'JazzCash',
    icon: '📲',
    description: 'Pay via JazzCash mobile wallet',
    available: true,
  },
  {
    id: 'bank_transfer',
    name: 'Bank Transfer',
    icon: '🏦',
    description: 'Direct bank transfer (HBL, MCB, UBL)',
    available: true,
  },
];

function CheckoutForm({ 
  selectedMethod, 
  amount, 
  onSuccess, 
  onError 
}: { 
  selectedMethod: PaymentMethodType;
  amount: number;
  onSuccess: () => void;
  onError: (msg: string) => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [selectedBank, setSelectedBank] = useState('');

  const banks = ['HBL', 'MCB', 'UBL', 'Allied Bank', 'Bank Alfalah', 'Meezan Bank'];

  const handleCardPayment = async () => {
    if (!stripe || !elements) return;
    
    setProcessing(true);
    
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + '/checkout?status=success',
      },
      redirect: 'if_required',
    });

    if (error) {
      onError(error.message || 'Payment failed');
      setProcessing(false);
    } else if (paymentIntent?.status === 'succeeded') {
      onSuccess();
    } else {
      setProcessing(false);
    }
  };

  const handleMobileWalletPayment = async () => {
    if (!mobileNumber || mobileNumber.length < 11) {
      onError('Please enter a valid mobile number');
      return;
    }
    
    setProcessing(true);
    
    setTimeout(() => {
      onSuccess();
    }, 2000);
  };

  const handleBankTransfer = async () => {
    if (!selectedBank) {
      onError('Please select a bank');
      return;
    }
    
    setProcessing(true);
    
    setTimeout(() => {
      onSuccess();
    }, 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    switch (selectedMethod) {
      case 'card':
        await handleCardPayment();
        break;
      case 'easypaisa':
      case 'jazzcash':
        await handleMobileWalletPayment();
        break;
      case 'bank_transfer':
        await handleBankTransfer();
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <AnimatePresence mode="wait">
        {selectedMethod === 'card' && (
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gray-50 rounded-xl p-6 border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Card Details</h3>
            <div className="max-h-[400px] overflow-y-auto">
              <PaymentElement 
                options={{
                  layout: 'tabs',
                }}
              />
            </div>
          </motion.div>
        )}

        {(selectedMethod === 'easypaisa' || selectedMethod === 'jazzcash') && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gray-50 rounded-xl p-6 border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {selectedMethod === 'easypaisa' ? 'EasyPaisa' : 'JazzCash'} Details
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="03XX-XXXXXXX"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-gray-900"
                  maxLength={12}
                />
              </div>
              <div className={`p-4 rounded-lg ${selectedMethod === 'easypaisa' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <p className="text-sm text-gray-600">
                  {selectedMethod === 'easypaisa' 
                    ? 'You will receive an OTP on your EasyPaisa registered number to confirm the payment.'
                    : 'You will receive an OTP on your JazzCash registered number to confirm the payment.'}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {selectedMethod === 'bank_transfer' && (
          <motion.div
            key="bank"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gray-50 rounded-xl p-6 border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Bank Transfer Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Bank
                </label>
                <select
                  value={selectedBank}
                  onChange={(e) => setSelectedBank(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-gray-900"
                >
                  <option value="">Choose your bank</option>
                  {banks.map((bank) => (
                    <option key={bank} value={bank}>{bank}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Account Number (Optional)
                </label>
                <input
                  type="text"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  placeholder="Enter your account number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-gray-900"
                />
              </div>
              <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                <p className="text-sm text-gray-600">
                  Transfer the amount to the following account and upload the receipt.
                </p>
                <div className="mt-3 space-y-1 text-sm">
                  <p><span className="font-medium">Bank:</span> HBL</p>
                  <p><span className="font-medium">Account Title:</span> Pakistan Store</p>
                  <p><span className="font-medium">Account No:</span> 1234-5678-9012-3456</p>
                  <p><span className="font-medium">IBAN:</span> PK12HABB1234567890123456</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="submit"
        disabled={processing || (selectedMethod === 'card' && (!stripe || !elements))}
        className="w-full py-4 px-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: processing ? 1 : 1.02 }}
        whileTap={{ scale: processing ? 1 : 0.98 }}
      >
        {processing ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Processing...
          </span>
        ) : (
          `Pay PKR ${amount.toLocaleString()}`
        )}
      </motion.button>
    </form>
  );
}

export default function CheckoutPage() {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethodType>('card');
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [amount] = useState(5000);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('status') === 'success') {
      setStatus('success');
      return;
    }

    setStatus('loading');
    fetch('/api/payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        amount, 
        currency: 'pkr',
        paymentMethod: selectedMethod 
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
          setStatus('idle');
        } else {
          setErrorMessage(data.error || 'Failed to initialize payment');
          setStatus('error');
        }
      })
      .catch(() => {
        setErrorMessage('Failed to connect to payment server');
        setStatus('error');
      });
  }, [amount, selectedMethod]);

  const handleSuccess = () => {
    setStatus('success');
  };

  const handleError = (msg: string) => {
    setErrorMessage(msg);
    setStatus('error');
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
          <p className="text-gray-600 mb-6">Your payment of PKR {amount.toLocaleString()} has been processed successfully.</p>
          <Link
            href="/"
            className="inline-block py-3 px-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Store</span>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Checkout</h1>
              <p className="text-gray-600">Complete your purchase securely</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Payment Method</h2>
              <div className="grid grid-cols-2 gap-3">
                {paymentMethods.map((method) => (
                  <motion.button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      selectedMethod === method.id
                        ? 'border-amber-500 bg-amber-50'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    } ${!method.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!method.available}
                    whileHover={method.available ? { scale: 1.02 } : {}}
                    whileTap={method.available ? { scale: 0.98 } : {}}
                  >
                    <span className="text-2xl mb-2 block">{method.icon}</span>
                    <span className="font-semibold text-gray-900 block text-sm">{method.name}</span>
                    <span className="text-xs text-gray-500">{method.description}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 rounded-xl p-4"
              >
                <p className="text-red-700 font-medium">{errorMessage}</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-red-600 underline text-sm mt-2"
                >
                  Try again
                </button>
              </motion.div>
            )}

            {status === 'loading' && (
              <div className="bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center">
                <div className="animate-spin rounded-full h-10 w-10 border-4 border-amber-500 border-t-transparent"></div>
              </div>
            )}

            {clientSecret && status === 'idle' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <Elements
                  stripe={stripePromise}
                  options={{
                    clientSecret,
                    appearance: {
                      theme: 'stripe',
                      variables: {
                        colorPrimary: '#f59e0b',
                        colorBackground: '#ffffff',
                        colorText: '#1f2937',
                        colorDanger: '#ef4444',
                        fontFamily: 'system-ui, sans-serif',
                        borderRadius: '8px',
                      },
                    },
                  }}
                >
                  <CheckoutForm
                    selectedMethod={selectedMethod}
                    amount={amount}
                    onSuccess={handleSuccess}
                    onError={handleError}
                  />
                </Elements>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:sticky lg:top-8 h-fit"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-3xl">📦</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Sample Product</h3>
                    <p className="text-sm text-gray-500">Qty: 1</p>
                    <p className="font-bold text-amber-600 mt-1">PKR 5,000</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>PKR 5,000</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>PKR 0</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-lg font-bold text-amber-600">PKR 5,000</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <div className="flex items-center gap-2 text-amber-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="font-medium text-sm">Secure Payment</span>
                </div>
                <p className="text-xs text-amber-600 mt-1">Your payment information is encrypted and secure</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
