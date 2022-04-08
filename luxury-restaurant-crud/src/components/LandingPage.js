import { React, useState } from 'react';
import { UncontrolledCarousel, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

const RestaurantsPresentation = (props) => {
    return (
        <>
            <div>
                <Navbar color="faded" dark>
                    <NavbarBrand className="me-auto" href="/">
                        ADMSpecs
                    </NavbarBrand>
                    <NavbarToggler
                        className="me-2" />
                <Collapse navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/components/">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">
                                Places
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
            </div>
            <div>
                <h2> Places: </h2>
            </div>
            <UncontrolledCarousel
                items={[{
                    altText: 'Restaurant01',
                    caption: 'Restaurant 01',
                    key: 1,
                    src: 'https://www.collinsdictionary.com/images/full/restaurant_135621509.jpg'
                },
                {
                    altText: 'Restaurant02',
                    caption: 'Restaurant 02',
                    key: 2,
                    src: 'https://media-cdn.tripadvisor.com/media/photo-s/17/75/3f/d1/restaurant-in-valkenswaard.jpg'
                },
                {
                    altText: 'Restaurant03',
                    caption: 'Restaurant 03',
                    key: 3,
                    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80'
                },
                ]}
            />
            <div>
                <h2> Stablishments products: </h2>
            </div>
            <UncontrolledCarousel
                items={[
                    {
                        altText: 'Consumable01',
                        caption: 'Consumable 02',
                        key: 1,
                        src: 'https://media.istockphoto.com/photos/grilling-steaks-on-flaming-grill-and-shot-with-selective-focus-picture-id594465522?k=20&m=594465522&s=612x612&w=0&h=aVM4-T9v_G1NcSJ-_KJxQFCNt6BO_LEjwJbvnISOtKY='
                    },
                    {
                        altText: 'Drink01',
                        caption: 'Drink 01',
                        key: 2,
                        src: 'https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80'
                    },
                    {
                        altText: 'Dessert01',
                        caption: 'Dessert 01',
                        key: 3,
                        src: 'https://www.cookingclassy.com/wp-content/uploads/2019/10/chocolate-cake-3.jpg'
                    }
                ]}
            />
            <hr />
            <div>
                <Badge color="primary" pill> About us </Badge>
                <p> We are a management enterprise responsible for clients and business data storage, organization and presentation.
                    Since 2019, we create robust, modern, dynamic and stylish digital enviroments to give more focus, value and engagement
                    to our partners inside the 21th century technology world. Answering multiple market areas, our main mission
                </p>
            </div>
            <div>
                <Badge color="primary" pill> Find us </Badge>
                Winged Saints Boulevard St. Number 445 - Miami, US
                Magma building - Floor 3, Room 120
            </div>
        </>
    )
}

export default RestaurantsPresentation;