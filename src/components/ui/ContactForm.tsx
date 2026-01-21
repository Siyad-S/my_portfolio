'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import MagneticButton from './MagneticButton';
import { toast } from 'sonner';

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setStatus('sending');
        try {
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                console.error("Critical: EmailJS environment variables are missing. Check your .env file.");
                throw new Error("Missing EmailJS Environment Variables");
            }

            const response = await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: data.name,
                    reply_to: data.email,
                    message: data.message,
                },
                publicKey
            );

            if (response.status !== 200) {
                throw new Error(`EmailJS failed with status: ${response.status}`);
            }

            toast.success("Message sent successfully! I'll get back to you soon.");
            reset();
            setStatus('idle'); // Reset status to idle after success
        } catch (error: any) {
            // Detailed Error Logging
            console.error("❌ EmailJS Error Details:", error);
            if (error.text) console.error("Error Text:", error.text); // EmailJS specific property

            toast.error("Failed to send message. Please try again.");
            setStatus('idle'); // Reset status to idle after error
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <input
                        {...register('name')}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan transition-colors text-white"
                        placeholder="Enter your name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input
                        {...register('email')}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan transition-colors text-white"
                        placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan transition-colors text-white resize-none"
                    placeholder="Let's build something..."
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>

            <div className="flex justify-end">
                <MagneticButton className="md:w-auto w-full px-8 border-neon-cyan/20 bg-neon-cyan/5 hover:bg-neon-cyan/20">
                    {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                </MagneticButton>
            </div>

            {status === 'error' && <p className="text-red-500 text-center text-sm">Something went wrong. Please try again.</p>}
        </form>
    );
}
