import React from 'react';
import { useTranslation } from 'react-i18next';

const ExampleComponent = () => {
    const { t ,i18n} = useTranslation();
    const applybtn = t('apply_now')
    const aboutText = t('ourCampus')
    return (
        <>
        <button>
            {t('apply_now')}
        </button>
        <h3>
            {t('ourCampus')}
        </h3>
        </>
    );
};

export default ExampleComponent;