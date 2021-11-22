import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';
import { Noticable } from '../../../classes/idea/Noticable';
import { Drinkable, Eatable } from '../../../classes/TavernProduct';
import { WeServe } from '../../../editNavigator/WeServe';
import { Demand } from '../../menuScene/offerList/actionInterfaces';
import { CategoryHandling, CategoryPage } from './CategoryPage';
import { CoverageTest } from './CoverageTest';

type PageState = { show: WeServe | 'services' };
export const DescribableDialog = (props: {
    onCoverTest: (demand: Demand) => CoverageTest;
    isVisible: boolean;
    onDismiss: () => void;
}) => {
    const [page, setPage] = useState({ show: 'services' } as PageState);
    const onService = (chosenService: WeServe) => {
        setPage({ show: chosenService });
    };
    const getCategoryHandling = (isAbout: WeServe): CategoryHandling => {
        switch (isAbout) {
            case WeServe.food:
                const onFood = (category: Eatable) =>
                    props.onCoverTest({ isAbout, category });
                return { isAbout, onCategory: onFood };
            case WeServe.drinks:
                const onDrink = (category: Drinkable) =>
                    props.onCoverTest({ isAbout, category });
                return { isAbout, onCategory: onDrink };

            default:
                const onImpression = (category: Noticable) =>
                    props.onCoverTest({ isAbout, category });
                return { isAbout, onCategory: onImpression };
        }
    };
    return (
        <Portal>
            <Dialog
                dismissable={true}
                visible={props.isVisible}
                onDismiss={props.onDismiss}
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
        <Button key={service} onPress={() => props.onService(service)}>
            {service}
        </Button>
    ));
    return (
        <View
            style={{
                flexDirection: 'column',
                alignContent: 'center',
                justifyContent: 'space-between',
            }}
        >
            {serviceButtons}
        </View>
    );
};
