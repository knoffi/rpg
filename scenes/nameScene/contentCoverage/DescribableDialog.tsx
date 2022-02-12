import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';
import { WeServe } from '../../../editNavigator/WeServe';
import { Describable } from '../../../mainNavigator/TavernData';
import { nameSceneStyles } from '../nameSceneStyles';
import { CategoryHandling } from './CategoryHandling';
import { CategoryPage } from './CategoryPage';
import { CoverageTest } from './CoverageTest';

type PageState = { show: WeServe | 'services' };
export const CoverageTestDialog = (props: {
    onTest: (categor: Describable) => CoverageTest;
    isVisible: boolean;
    onDismiss: () => void;
}) => {
    const [page, setPage] = useState({ show: 'services' } as PageState);
    const onService = (chosenService: WeServe) => {
        setPage({ show: chosenService });
    };
    const getCategoryHandling = (isAbout: WeServe): CategoryHandling => {
        return { isAbout, onCategory: props.onTest };
    };
    const onDismiss = () => {
        props.onDismiss();
        setPage({ show: 'services' });
    };
    return (
        <Portal>
            <Dialog
                dismissable={true}
                visible={props.isVisible}
                onDismiss={onDismiss}
            >
                {page.show === 'services' ? (
                    <ServicePage onService={onService}></ServicePage>
                ) : (
                    <CategoryPage
                        handling={getCategoryHandling(page.show)}
                    ></CategoryPage>
                )}
            </Dialog>
        </Portal>
    );
};

const ServicePage = (props: { onService: (category: WeServe) => void }) => {
    const serviceButtons = Object.values(WeServe).map((service) => (
        <Button
            key={service}
            onPress={() => props.onService(service)}
            style={nameSceneStyles.buttonsInDialog}
            mode="contained"
        >
            {service}
        </Button>
    ));
    return <View style={nameSceneStyles.viewInDialog}>{serviceButtons}</View>;
};
