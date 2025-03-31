'use client';

import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { BorderBeam } from '@/components/magicui/border-beam';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState<boolean>(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    const formData = new FormData(event.currentTarget);

    formData.append('access_key', '584dd52f-934e-4dfc-a8ce-dcf16bc25d40');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log('Success', res);
      formRef.current?.reset();
    }
    setIsSending(false);
  };

  return (
    <Card className='relative overflow-hidden w-full max-w-lg p-6 rounded-2xl shadow-lg space-y-4'>
      <CardHeader>
        <CardTitle>Contact Me</CardTitle>
        <CardDescription>
          Enter your details and message in this form.
        </CardDescription>
      </CardHeader>
      <form ref={formRef} onSubmit={onSubmit}>
        <CardContent className='grid w-full items-center gap-8'>
          <div className='flex flex-col space-y-1.5'>
            <Label htmlFor='name'>Your Name</Label>
            <Input
              type='text'
              name='name'
              placeholder='Enter your name'
              required
            />
          </div>
          <div className='flex flex-col space-y-1.5'>
            <Label htmlFor='email'>Your Email</Label>
            <Input
              type='email'
              name='email'
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='flex flex-col space-y-1.5'>
            <Label htmlFor='message'>Your Message</Label>
            <Textarea
              name='message'
              rows={8}
              placeholder='Type your message here.'
              required
            />
          </div>
        </CardContent>
        <CardFooter className='flex justify-between my-4'>
          <Button
            type='submit'
            className='w-full mt-4 p-3 font-semibold rounded-lg transition cursor-pointer'
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </Button>
        </CardFooter>
      </form>
      <BorderBeam duration={8} size={400} />
    </Card>
  );
};

export default ContactForm;
