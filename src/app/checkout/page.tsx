'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import Image from 'next/image';
import HeaderNavigation from '@/components/sections/header-navigation';

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
              