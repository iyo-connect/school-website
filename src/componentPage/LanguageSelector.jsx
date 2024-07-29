import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuItem,
    DropdownMenuGroup
  } from "../components/ui/dropdown-menu";
import { Languages } from 'lucide-react';

const languages = [
    { code: "en", lang: "English" },
    { code: "ar", lang: "Arabic" },
    { code: "hi", lang: "Hindi" },
    { code: "ta", lang: "Tamil" },
    { code: "ur", lang: "Urdu" }
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    useEffect(()=>{
        document.body.dir = i18n.dir()
    },[i18n,i18n.language])

    return (
        <>
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button><Languages className="inline-block size-[5rem] text-blue-900" /> &nbsp;&nbsp;&nbsp;&nbsp;  <p className='text-[4rem] inline-block text-[#7776B3] '>Select Your Language</p></button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[62rem] bg-gray-200">

        <DropdownMenuSeparator />
        <DropdownMenuGroup className="py-2 px-4">
        {languages.map((lng) => (
                <DropdownMenuItem className="mb-5 flex flex-col py-2 px-4">
                <button key={lng.code} onClick={() => changeLanguage(lng.code)} className="m-2 text-[4rem] text-center p-[1.5rem] text-[#7776B3] hover:text-blue-900 active:text-blue-900">
                    {lng.lang}
                </button>
                </DropdownMenuItem>
            ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>   
            
        </>
    );
};

export default LanguageSelector;
