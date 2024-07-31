import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuGroup } from "../components/ui/dropdown-menu";
import { Languages } from 'lucide-react';

const languages = [
    { code: "en", lang: "English" },
    { code: "hi", lang: "Hindi" },
    { code: "ta", lang: "Tamil" },
    { code: "ur", lang: "Urdu" },
    { code: "ml", lang: "Malayalam" }
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    useEffect(() => {
        document.body.dir = i18n.dir();
    }, [i18n, i18n.language]);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="outline-none border-none">
                <button>
                    <Languages className="inline-block size-[5rem] lg:size-[1.5rem] text-blue-900 lg:absolute top-2 right-2" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <p className="lg:hidden text-[4rem] inline-block text-[#7776B3]">Select Your Language</p>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[62rem] lg:w-fit bg-gray-200 lg:mt-7 lg:ms-[20rem] flex justify-center">
                <DropdownMenuSeparator />
                <DropdownMenuGroup className="block py-2 px-4 lg:py-0 lg:px-0 flex flex-col lg:flex-row lg:flex-wrap items-center justify-center">
                    {languages.map((lng) => (
                        <DropdownMenuItem  className="mb-5 lg:mb-1 flex py-2 px-4 lg:py-0 lg:px-0 z-[20]">
                            <button className="m-2 lg:m-0 text-[4rem] lg:text-[1.2rem] text-center p-[1.5rem] text-[#7776B3] hover:text-blue-900 active:text-blue-900"
                        key={lng.code} onClick={() => changeLanguage(lng.code)}>{lng.lang}</button>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageSelector;
