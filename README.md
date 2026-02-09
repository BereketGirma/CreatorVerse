# WEB103 Prework - *Creatorverse*

Submitted by: **Bereket Girma**

About this web app: **Creatorverse is a full-stack React application that allows users to create, read, update, and delete their favorite content creators. Built with React, Vite, React Router, and Supabase, this app provides a beautiful dark space-themed interface to manage and discover content creators across various platforms like YouTube and Twitter.**

Time spent: **2** hours

## Required Features

The following **required** functionality is completed:

<!-- 👉🏿👉🏿👉🏿 Make sure to check off completed functionality below -->

- [x] **A logical component structure in React is used to create the frontend of the app**

- [x] **At least five content creators are displayed on the homepage of the app**

- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**

- [x] **API calls use the async/await design pattern via Axios or fetch()**

- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**

- [x] **Each content creator has their own unique URL**

- [x] **The user can edit a content creator to change their name, url, or description**

- [x] **The user can delete a content creator**

- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [x] Picocss is used to style HTML elements

- [x] The content creator items are displayed in a creative format, like cards instead of a list

- [x] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

* [x] Custom dark space-themed design with Earth hero background
* [x] Social media link support (YouTube and Twitter handles with icons)
* [x] Responsive grid layout for creator cards
* [x] Smooth hover effects and transitions on cards
* [x] Icon-based action buttons for viewing and editing creators
* [x] Form validation requiring at least one social media link
* [x] Loading states and error handling throughout the app

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://github.com/BereketGirma/CreatorVerse/blob/main/assets/prework_demo.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->

GIF created with [image2url](https://www.image2url.com/gif-to-url)

<!-- Recommended tools:

[Kap](https://getkap.co/) for macOS

[ScreenToGif](https://www.screentogif.com/) for Windows

[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app or any additional context you'd like to add.

**Challenges:**
- Initially had issues with database schema compatibility - the code was trying to use `youtube` and `twitter` columns that didn't exist in the Supabase table. Fixed by using only the existing `url` field and extracting handles from URLs when needed.
- Styling the dark theme to be both dark enough and maintain card visibility required careful color balancing.
- Implementing the hero section with Earth background while maintaining text readability required proper overlay adjustments.

**Additional Context:**
- The app uses Supabase for backend database operations instead of traditional REST APIs
- All API calls use async/await pattern with the Supabase client library
- The design features a space theme with Earth imagery to match the "Creatorverse" concept

## License

Copyright [2026] [Bereket Girma]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
