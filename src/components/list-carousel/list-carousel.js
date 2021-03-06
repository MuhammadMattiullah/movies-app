import React from 'react';
import { FlatList } from 'react-native';

import { ListCarousalItem } from './list-carousel-item';
import { CarouselListHeader, CarouselListWrapper, HeaderContainer, ViewAll } from './styled';
import { defaultProps, propTypes } from './props';

export const ListCarousal =
    ({
        movies,
        headerTitle,
        shouldShowViewAll,
        onPressViewAll,
    }) => {
        return (
            <CarouselListWrapper>
                <HeaderContainer>
                    <CarouselListHeader>
                        {headerTitle}
                    </CarouselListHeader>
                    {
                        shouldShowViewAll &&
                        (
                            <ViewAll onPress={onPressViewAll} >
                                See All
                            </ViewAll>
                        )
                    }

                </HeaderContainer>
                <FlatList
                    horizontal
                    data={movies}
                    keyboardShouldPersistTaps='handled'
                    keyExtractor={(item) => `list-carousel-${item.id}`}
                    listKey={Math.random().toString()}
                    renderItem={({ item }) => (
                        <ListCarousalItem
                            imageSrc={item.poster_path}
                            rating={item.vote_average}
                            title={item.title}
                            releaseDate={item.release_date}
                            id={item.id}
                        />
                    )}
                />
            </CarouselListWrapper>

        )
    };

ListCarousal.propTypes = propTypes;
ListCarousal.defaultProps = defaultProps;
