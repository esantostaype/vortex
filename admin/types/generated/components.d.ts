import type { Schema, Attribute } from '@strapi/strapi';

export interface HomeAboutHome extends Schema.Component {
  collectionName: 'components_home_about_homes';
  info: {
    displayName: 'About Home';
    icon: 'information';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    content: Attribute.Text;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home.about-home': HomeAboutHome;
    }
  }
}
