"use client";

import { Button, Badge } from "flowbite-react";
import { HiCheck } from "react-icons/hi";
import { PreviewShell } from "../PreviewShell";

const plans = [
  {
    name: "Free", price: "$0", period: "/ month", badge: null, cta: "Get started free", ctaColor: "alternative" as const,
    description: "Perfect for individuals and small teams getting started.",
    features: ["Up to 5 users", "10 GB storage", "Basic analytics", "Email support", "API access (read-only)"],
  },
  {
    name: "Pro", price: "$49", period: "/ month", badge: "Most popular", cta: "Start free trial", ctaColor: "default" as const,
    description: "For growing teams that need more power and flexibility.",
    features: ["Up to 25 users", "100 GB storage", "Advanced analytics", "Priority support", "Full API access", "Custom reports", "Audit log"],
  },
  {
    name: "Enterprise", price: "$199", period: "/ month", badge: null, cta: "Contact sales", ctaColor: "alternative" as const,
    description: "For organizations that need enterprise-grade features and support.",
    features: ["Unlimited users", "1 TB storage", "Custom analytics", "Dedicated support", "Full API access", "SSO / SAML", "Custom SLA", "On-premise option"],
  },
];

const faqs = [
  { q: "Can I change plans later?", a: "Yes — upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle." },
  { q: "Is there a free trial?", a: "All paid plans include a 14-day free trial with no credit card required." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, ACH, and wire transfer for annual enterprise plans." },
  { q: "Do you offer discounts for annual billing?", a: "Yes — pay annually and save 20% compared to monthly billing." },
];

export default function AdminPricingPage() {
  return (
    <PreviewShell title="Pricing" variant="admin">
    <div className="min-h-full bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

        {/* Hero */}
        <div className="text-center space-y-4">
          <p className="text-sm font-semibold text-primary-700 dark:text-primary-400 uppercase tracking-widest">Pricing</p>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Simple, transparent pricing</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Start free. Upgrade when you need more. No hidden fees, no surprises.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 border-2 flex flex-col ${
                plan.badge
                  ? "border-primary-600 bg-white dark:bg-gray-800 shadow-lg shadow-primary-100 dark:shadow-none"
                  : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
              }`}
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-gray-900 dark:text-white">{plan.name}</p>
                  {plan.badge && <Badge color="indigo" size="xs">{plan.badge}</Badge>}
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{plan.description}</p>
              </div>
              <ul className="space-y-2.5 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <HiCheck className="h-4 w-4 text-green-500 shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Button color={plan.ctaColor} className="w-full">{plan.cta}</Button>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">Frequently asked questions</h2>
          <div className="space-y-0 divide-y divide-gray-200 dark:divide-gray-700">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-5">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">{faq.q}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
    </PreviewShell>
  );
}
