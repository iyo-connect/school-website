import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from 'src/componentPage/LanguageSelector';

function Dummy() {
    const { t } = useTranslation();
    return (
        <div className="h-fit m-[5rem] mt-[5rem]">
            <div className="flex items-center flex-col justify-center bg-gray-200">
                <LanguageSelector />
                <h1>
                    {t("greeting")}
                </h1>

                <p>
                    {t("description")}
                </p>
            </div>
        </div>
    );
}

export default Dummy;
