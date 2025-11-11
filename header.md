# Header Section

Structure:
Header component is made up of 3 main blocks:

1. logo block: logo icon component, close icon button components
2. navigation block: navigation pill list component
3. auth block: header auth component

## Platform

### Desktop (Default)

Shared style between Header section variants in Desktop view

- Hide icon button in logo block
- Show navigation items component in row
- Show header auth component in auth block

display: flex;
width: var(--sds-responsive-device-width);
padding: var(--sds-size-space-800);
align-items: center;
align-content: center;
gap: 0 var(--sds-size-space-600);
flex-wrap: wrap;

border-bottom: var(--sds-size-stroke-border) solid var(--sds-color-border-default-default);
background: var(--sds-color-background-default-default);

### Mobile

Shared style between Header section variants in Mobile view

#### States

display: flex;
width: var(--sds-responsive-device-width);
align-items: center;

border-bottom: var(--sds-size-stroke-border) solid var(--sds-color-border-default-default);
background: var(--sds-color-background-default-default);

//Icon

--icon-color: var(--sds-color-icon-default-default)

//Logo block

display: flex;
justify-content: space-between;
align-items: center;
align-self: stretch;

##### Default (Closed)

- Change the close icon button to menu icon button
- Hide navigation items

padding: var(--sds-size-space-600);
justify-content: space-between;
align-content: center;
flex-wrap: wrap;

border-bottom: var(--sds-size-stroke-border) solid var(--sds-color-border-default-default);
background: var(--sds-color-background-default-default);

##### Open

- Change the menu icon button to close icon button
- Show all navigation items as column in header
- Show header auth component below navigation items

height: 100vh; // to cover full mobile screen height
padding: var(--sds-size-space-800) var(--sds-size-space-600);
flex-direction: column;
gap: var(--sds-size-space-1600);
flex-shrink: 0;

//Navigation block

gap: var(--sds-size-space-200);
flex: 1 0 0;
align-self: stretch;

//Auth block

gap: var(--sds-size-space-300);
align-self: stretch;
