"use client"

import { userSchema } from '@/lib/schema';
import React, { useState } from 'react';
import { useForm } from "react-hook-form"; 
import z from 'zod';
import {zodResolver} from "@hookform/resolvers/zod"

interface Props {
    name: string;
    email: string;
    image?:string
}

type UserDataType = z.infer<typeof userSchema>

export const OnboardingForm = ({name, email, image}: Props) => {
    const [pending, setPending] = useState(false);
    const form = useForm<UserDataType>({
        resolver: zodResolver(userSchema)
    })
  return <div>OnboardingForm</div>;
}