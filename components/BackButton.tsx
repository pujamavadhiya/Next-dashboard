import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

interface BackButtonProps{
    text: string;
    link: string;
}

import React from 'react'

const backButton = ({text, link }: BackButtonProps) => {
  return (
    <Link 
    href={link}
    className="textgray-500 hover:Underline flex items-center gap-1 font-Bold mb-5" 
    >
      <ArrowLeftCircle size={18} />
      {text}
    </Link>
  )
}

export default backButton