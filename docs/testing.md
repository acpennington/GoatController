# Testing

This serves as a guide for the testing that should be done after changing the code of a specific component. This guide is not intended to be comprehensive. Treat it as a work in progress.

# Chat

Test that messages are visible and that scroll up and scroll down works as expected.

# FriendlyScroll

This component is used throughout the app. It is not expected to be changed very much. However, when doing any changes, check the behavior anywhere that FriendlyScroll is implemented. You should be able to scroll freely and see its children (contents).

# RenderCards

This component is used both in SearchResults and also in-game (Modal). If you make changes in this component, be sure to test that it works with both.

# YugiohCard

This is the in-game card component. Check that it renders as expected in hands, field, deck, and graveyard. Ensure that opponent's cards are also rendered correctly in PVP.

# DecklistCard

This is the deck constructor card component. It is similar to YugiohCard, but has slightly different parameters. Check that cards render correctly in the maindeck, sidedeck, and search results.

# YugiohCardExpanded

This components is implemented in both games (solo and PVP) and the deck constructor. Check that it renders correctly in all three. Also check that buttons inside this component render when expected (e.g. no scripts in deck constructor).

# databases/cardDB

When changing anything in this database, ensure that you test your changes by viewing the card in both a game and the deck constructor. If you make a typo somewhere, it may not render correctly. If you give a card a script, test it in both solo mode and PVP to ensure that it works as expected.

# statestore

Whatever is changed here should be tested by calling its actions. If a WebSocket is used, you must test that it works as expected via starting a PVP game.

# utils directory

Most of these util functions are already done. If you write another one, test it wherever it is implemented. If you modify another util function, same thing. Run a search to see wherever it is imported.

# views

For pages lacking any real complexity, such as the beta page, you can test changes there by just visiting the page. Pretty straightforward. Specific guidance for more complex pages is described below.

# CreateLeague

For this page, significant functionality changes will need be tested by actually creating a new league and seeing if the item in the DynamoDB database matches what is expected. Changes to this component may require changes in Lambda/LeagueEndpoint.

# DeckConstructor/Decklist

Any changes here can be verified by loading different kinds of decks. Big ones, small ones, etc. Make sure that the maindeck and sidedeck are clearly visible in all situations. Also mess around with the card size slider.

# DeckConstructor/LeftPanel

Mostly just need to make sure that search parameters are visible/straightforward to the user and that hitting "search" works as expected.

# DeckConstructor/SearchResults

These results are mostly controlled by redux and LeftPanel. If the search results are "wrong", the issue is probably with one of those. Of course if there is a visible bug, it's probably caused by this component. If you change it, make sure that there are no visual bugs.

# Game

The Game component has a large number of child components. I don't feel like describing them all right now. If you change one of them, be sure to test the changes in both solo and PVP mode.

# GameOverPage

As of right now, this page still needs to be written. When it is done, you will be able to see what it looks like by starting a PVP match and having one player quit the game (after someone concedes).

# LeaguePage/JoinLeaveButton

Any changes here should be tested by having a test user repeatedly join and leave the league. Expected behavior should be verified by checking DynamoDB's leagues table.

# LoginPage

This page behaves differently in development and production. Make sure that any changes here behave properly in both environments.

# SettingsPage

This is another case where changes here should be tested by having a test user make changes to their settings and then checking DynamoDB to make sure that it does what it expected. If you cannot check DyanmoDB, having the user log out and back in should verify if settings changes were saved or not.

# Wall

Wall is still a work in progress. If you change anything regarding how posts are displayed, well then just load the page and try different dropdown options.
